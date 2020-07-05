import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import ForceGraph from './forceGraph';

export default function GraphVisualization(props) {
    return (
        <Grid className="gvis" container spacing={1} alignItems="stretch">
            <Grid item xs={10}>
                <Paper>
                    <ForceGraph />
                </Paper>
            </Grid>
            <Grid item xs={2}>
                <Paper>Functions</Paper>
            </Grid>
        </Grid>
    );
}
