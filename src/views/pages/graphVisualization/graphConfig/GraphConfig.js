import React, { Component } from 'react';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Switch,
} from '@material-ui/core';
import {
    Settings as SettingsIcon,
    BarChart as BarChartIcon,
    Storage as StorageIcon,
    ExpandMore as ExpandMoreIcon,
} from '@material-ui/icons';

const EXPAND_STATUS = {
    DATASET: 'dataset',
    SOURCES: 'sources',
    EXPORTS: 'exports',
    SETTINGS: 'settings',
    STATS: 'stats',
};

class GraphConfig extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expandStatus: {
                dataset: false,
                sources: false,
                exports: false,
                settings: false,
                stats: false,
            },
        };
    }

    togglePanel = (panel) => (event, isExpanded) => {
        this.setState((prevState) => ({
            expandStatus: {
                ...prevState.expandStatus,
                [`${panel}`]: isExpanded,
            },
        }));
    };

    render() {
        const { expandStatus } = this.state;
        const graphs = ['graph1', 'graph2', 'graph3'];
        // console.log("xxx003 ", expandStatus)
        return (
            <div>
                <Accordion
                    expanded={expandStatus.dataset}
                    onChange={this.togglePanel(EXPAND_STATUS.DATASET)}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <ListItem>
                            <ListItemIcon>
                                <StorageIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dataset" />
                        </ListItem>
                    </AccordionSummary>
                    <AccordionDetails style={{ flexDirection: 'column' }}>
                        <Accordion
                            expanded={expandStatus.sources}
                            onChange={this.togglePanel(EXPAND_STATUS.SOURCES)}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                Sources
                            </AccordionSummary>
                            <AccordionDetails>
                                <List component="nav" aria-label="Sources">
                                    {graphs.map((graph, key) => (
                                        <ListItem key={`g_source_${key}`} button>
                                            <ListItemText primary={graph} />
                                        </ListItem>
                                    ))}
                                </List>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            expanded={expandStatus.exports}
                            onChange={this.togglePanel(EXPAND_STATUS.EXPORTS)}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                Exports
                            </AccordionSummary>
                            <AccordionDetails>
                                <List component="nav" aria-label="Exports">
                                    <ListItem button>
                                        <ListItemText primary="Current graph" />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemText primary="All graphs" />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemText primary="Images graph" />
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        </Accordion>
                    </AccordionDetails>
                </Accordion>

                <Accordion
                    expanded={expandStatus.settings}
                    onChange={this.togglePanel(EXPAND_STATUS.SETTINGS)}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <ListItem>
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItem>
                    </AccordionSummary>
                    <AccordionDetails style={{ flexDirection: 'column' }}>
                        <List component="nav" aria-label="Settings">
                            <ListItem>
                                <ListItemText primary="Node labels" />
                                <Switch
                                    checked={true}
                                    onChange={this.handleChange}
                                    name="checkedB"
                                    color="primary"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Highlight neighbors" />
                                <Switch
                                    checked={true}
                                    onChange={this.handleChange}
                                    name="checkedB"
                                    color="primary"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Global stats view" />
                                <Switch
                                    checked={true}
                                    onChange={this.handleChange}
                                    name="checkedB"
                                    color="primary"
                                />
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>

                <Accordion
                    expanded={expandStatus.stats}
                    onChange={this.togglePanel(EXPAND_STATUS.STATS)}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <ListItem>
                            <ListItemIcon>
                                <BarChartIcon />
                            </ListItemIcon>
                            <ListItemText primary="Stats" />
                        </ListItem>
                    </AccordionSummary>
                    <AccordionDetails style={{ flexDirection: 'column' }}>
                        <List component="nav" aria-label="Stats">
                            <ListItem button>
                                <ListItemText primary="Node stats" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Edge stats" />
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
            </div>
        );
    }
}

export default GraphConfig;
