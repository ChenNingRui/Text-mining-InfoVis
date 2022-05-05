import * as React from 'react';
import PropTypes from 'prop-types';
import {
    Dialog,
    FormControl, 
    InputLabel, 
    Select, 
    Button,
    Slider,
    DialogContent,
    MenuItem } from "@mui/material";

export default function ControlDialog(props) {
    const { onClose, open, polarityScore, setPolarityScore, clusterNum, setClusterNum } = props;

    const [clusters, setClusters] = React.useState(3);
    const [score, setScore] = React.useState(polarityScore);

    const handleSelectChange = (event) => {
        setClusters(event.target.value);
    };

    const handleSliderChange = (event) => {
        setScore(event.target.value);
    }

    const handleButtonClick = () => {
        setPolarityScore(score);
        setClusterNum(clusters);
        onClose();
    };

    const handleClose = () => {
        onClose();
    };

    return (
        <>
            <Dialog onClose={handleClose} open={open} >
            <DialogContent>
                    <FormControl variant="standard" sx={{ m: 2, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">Clusters</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={clusterNum}
                            defaultValue={3}
                            onChange={handleSelectChange}
                            label="Clusters"
                        >
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                        </Select>
                    </FormControl>
                    <Slider
                        size="small"
                        min={0} max={0.1}
                        value={score}
                        step={0.01}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        onChange={handleSliderChange}
                        marks={[{value:0, label:0}, {value: 0.05, label: 0.05}, {value: 0.1, label: 0.1}]}
                    />
                 </DialogContent>
                <Button sx={{m:2}} variant="contained" onClick={handleButtonClick}>{"Update"}</Button>
            </Dialog>
        </>
    );
}

ControlDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};