import { Box } from '@mui/material';
import React from 'react';
import Plot from 'react-plotly.js';

function createData(data, group){
    let res = [];
    if(!data && !group) return null;

    for(let i = 0; i < data.length; i++){
        if(!res[group[i]]){
            res[group[i]] = { 
                "x": [],
                "y": [],
                mode: 'markers',
                name: 'cluster' + group[i],
              };
        }

        res[group[i]].x.push(data[i][0]);
        res[group[i]].y.push(data[i][1]);
    }

    return res;
}

export default function PCAScatterPlot(props) {
    const { pca, cluster } = props;
    const test = createData(pca, cluster);

    return(
        <Box>
          <Plot
            data={test}
            layout={ {title: 'PCA Cluster Plot'} }
        />
      </Box>
    );
}