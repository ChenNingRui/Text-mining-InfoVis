import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';

import ColumnGroupingTable from './Table';
import Dialog from './ControlDialog';

import PCAScatterPlot from '../visualizations/PCAScatterPlot';
import TsneScatterPlot from '../visualizations/TsneScatterPlot';
import VaderBarPlot from '../visualizations/VaderBarPlot';
import Keyword from '../components/KeyWords';

function createData(id, sentence, neg, neu, pos, compound) {
    return { id, sentence, neg, neu, pos, compound};
}
  
function organizeData(vader, vaderSentence) {
    if(!vader || !vaderSentence) return;
    let rows = [];
  
    for(let i = 0; i < vader.length; i++){
      let temp = createData(i, vaderSentence[i], vader[i].neg, vader[i].neu, vader[i].pos, vader[i].compound);
      rows.push(temp);
    }
    
    return rows;
}

export default function Framework(props) {
    const { clustersKeyWords, pca, tsne, clusters, vader, vaderSentence, polarityScore, setPolarityScore, clusterNum, setClusterNum } = props;

    const [open, setOpen] = React.useState(false);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: "5px",
    }));

    const vaderData = organizeData(vader, vaderSentence);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
    const handleClose = (value) => {
        setOpen(false);
    };

  return (
    <React.Fragment>
        <Grid container>
            {/* row two */}
            <Grid item xs={6}>
                <Item><TsneScatterPlot tsne={tsne} cluster={clusters}></TsneScatterPlot></Item>
            </Grid>
            <Grid item xs={6}>
                <Item><PCAScatterPlot pca={pca} cluster={clusters}></PCAScatterPlot></Item>
            </Grid>
            {/* row one */}
            <Grid item xs={12}>
                <Keyword clustersKeyWords={clustersKeyWords}></Keyword>
            </Grid>
            {/* row three */}
            <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={6}>
                        <VaderBarPlot rows={vaderData} score={polarityScore}></VaderBarPlot>
                    </Grid>
                    <Grid item xs={6}>
                         <ColumnGroupingTable rows={vaderData} ></ColumnGroupingTable>
                    </Grid>
                </Grid>
            </Grid>
      </Grid>
         <Fab color="secondary" aria-label="edit" onClick={handleClickOpen} sx={{position:'fixed', left: '1rem', top: '1rem'}}>
            <EditIcon />
        </Fab>
        <Dialog
            open={open}
            onClose={handleClose}
            cluster={clusterNum}
            setClusterNum={setClusterNum}
            polarityScore={polarityScore}
            setPolarityScore={setPolarityScore}
        />
    </React.Fragment>
  );
}