import Grid from '@mui/material/Grid';
import React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export default function KeyWords(props) {
    const { clustersKeyWords } = props;

    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      margin: "5px",
    }));

    return(
      <Grid container>
          {
              clustersKeyWords.data.map((item, index) => {
                  return(
                    <Grid item key={index}>
                      <Item>
                        <Typography variant="h6" gutterBottom component="div">
                          { 'Cluster ' + (index)}
                        </Typography>
                        <Typography component="p" style={{ wordWrap: "break-word" }}>
                            { item }
                        </Typography>
                      </Item>
                    </Grid>
                  )
              })
          }
      </Grid>  
    );
};