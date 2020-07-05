import React, { Component } from 'react';
import Graph from 'react-graph-vis';
import './network.css';

class ForceGraph extends Component {
    // TODO: Show tooltip
    constructor(props) {
        super(props);
        this.state = {
            options: {
                layout: {
                    // hierarchical: true,
                },
                edges: {
                    color: '#000000',
                },
                nodes: {
                    color: '#888f99',
                },
                physics: {
                    enabled: true,
                },
                interaction: {
                    multiselect: true,
                    dragView: true,
                    hover: true,
                },
            },
            graph: {
                nodes: [
                    { id: 1, label: 'Node 1' },
                    { id: 2, label: 'Node 2' },
                    { id: 3, label: 'Node 3' },
                    { id: 4, label: 'Node 4' },
                    { id: 5, label: 'Node 5' },
                ],
                edges: [
                    { from: 1, to: 2 },
                    { from: 2, to: 1 },
                    { from: 1, to: 3 },
                    { from: 2, to: 4 },
                    { from: 2, to: 5 },
                ],
            },
        };
    }

    componentDidMount() {
        document.addEventListener('mousedown', (e) => {});
        document.addEventListener('mousemove', (e) => {});
    }

    events = {
        dragStart: (event) => {},
        dragEnd: (event) => {},
        select: function(event) {
            // var { nodes, edges } = event;
        },
    };

    render() {
        return (
            <div id="graph" style={{ height: '100vh' }}>
                <Graph
                    graph={this.state.graph}
                    options={this.state.options}
                    events={this.state.events}
                    getNetwork={(network) => {
                        //  if you want access to vis.js network api you can set the state in a parent component using this property
                        console.log('network: ', network);
                    }}
                />
            </div>
        );
    }
}

export default ForceGraph;
