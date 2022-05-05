import { Box } from '@mui/material';
import React from 'react';
import Plot from 'react-plotly.js';

function createData(data, score){
    let res = [];
    const groupName = {positive: 0, negative: 1, neutral: 2}
    if(!data) return null;

    for(let i = 0; i < data.length; i++){
        let group = '';
        if(data[i].compound >= score) {
            group = 'positive';
        } 
        else if(data[i].compound <= -score) {
            group = 'negative';
        } 
        else {
            group = 'neutral';
        }

        if(!res[groupName[group]]){
            res[groupName[group]] = { 
                "x": [],
                name: group,
                type: 'histogram',
              };
        }

        res[groupName[group]].x.push(data[i].compound);
    }

    return res;
}

export default function VaderBarPlot(props) {
    const { rows, score } = props;
    const data = createData(rows, score);

    return(
        <Box>
          <Plot
            data={data}
            layout={ {title: 'Vader'} }
        />
      </Box>
    );
}