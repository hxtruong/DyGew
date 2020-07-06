import React from 'react';
import { Grid, Paper, List, ListItem, ListItemText, ListItemIcon, Drawer } from '@material-ui/core';
import {
    Link as LinkIcon,
    Group as GroupIcon,
    Settings as SettingsIcon,
    BarChart as BarChartIcon,
    Storage as StorageIcon,
} from '@material-ui/icons';

import GraphConfig from './graphConfig';
import ForceGraph from './forceGraph';

export default function GraphVisualization(props) {
    const [state, setState] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState(open);
    };

    return (
        <Grid
            className="gvis"
            spacing={1}
            container
            alignItems="stretch"
            direction="row"
            justify="space-evenly"
        >
            <Grid item>
                <Paper>
                    <React.Fragment>
                        <List component="nav" aria-label="Settings" onClick={toggleDrawer(true)}>
                            <ListItem button>
                                <ListItemIcon>
                                    <StorageIcon />
                                </ListItemIcon>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <SettingsIcon />
                                </ListItemIcon>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <BarChartIcon />
                                </ListItemIcon>
                            </ListItem>
                        </List>
                        <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
                            <GraphConfig />
                        </Drawer>
                    </React.Fragment>
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <Paper>
                    <ForceGraph />
                </Paper>
            </Grid>
            <Grid item xs={2}>
                <Paper>
                    <List component="nav" aria-label="Functions">
                        <ListItem button>
                            <ListItemIcon>
                                <LinkIcon />
                            </ListItemIcon>
                            <ListItemText primary="Link prediction" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <GroupIcon />
                            </ListItemIcon>
                            <ListItemText primary="Node clustering" />
                        </ListItem>
                    </List>
                </Paper>
            </Grid>
        </Grid>
    );
}
