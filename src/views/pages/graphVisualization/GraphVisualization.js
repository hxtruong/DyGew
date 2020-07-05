import React from 'react';
import Graph from 'react-graph-vis';
import { Grid, Paper } from '@material-ui/core';
import './network.css';

export default function GraphVisualization(props) {
    console.log('xxx100  GVis: ', window.innerHeight);

    const graph = {
        nodes: [
            { id: 1, label: 'Node 1', title: 'node 1 tootip text' },
            { id: 2, label: 'Node 2', title: 'node 2 tootip text' },
            { id: 3, label: 'Node 3', title: 'node 3 tootip text' },
            { id: 4, label: 'Node 4', title: 'node 4 tootip text' },
            { id: 5, label: 'Node 5', title: 'node 5 tootip text' },
        ],
        edges: [
            { from: 1, to: 2 },
            { from: 1, to: 3 },
            { from: 2, to: 4 },
            { from: 2, to: 5 },
        ],
    };

    const options = {
        layout: {
            hierarchical: true,
        },
        edges: {
            color: '#000000',
        },
        autoResize: true,
        height: `${window.innerHeight}px`,
        width: '100%',
    };

    const events = {
        select: function(event) {
            // var { nodes, edges } = event;
        },
    };

    return (
        <Grid className="gvis" container spacing={1} alignItems="stretch">
            <Grid item xs={10}>
                <Paper>
                    <Graph
                        graph={graph}
                        options={options}
                        events={events}
                        getNetwork={(network) => {
                            //  if you want access to vis.js network api you can set the state in a parent component using this property
                        }}
                    />
                </Paper>
            </Grid>
            <Grid item xs={2}>
                <Paper>Functions</Paper>
            </Grid>
        </Grid>
    );
}
