import React from 'react';
import {
    Grid,
    Paper,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Drawer,
    IconButton,
} from '@material-ui/core';
import {
    Link as LinkIcon,
    Group as GroupIcon,
    PermDataSetting as PermDataSettingIcon,
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
        <div className="gvis">
            <React.Fragment>
                <IconButton
                    color="primary"
                    aria-label="Graph Configuration"
                    className="gvis__toggleDrawerBtn"
                    onClick={toggleDrawer(true)}
                >
                    <PermDataSettingIcon fontSize="large" />
                </IconButton>
                <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
                    <GraphConfig />
                </Drawer>
            </React.Fragment>
            <Grid
                spacing={1}
                container
                direction="row"
                alignItems="stretch"
                justify="space-between"
            >
                <Grid item xs>
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
        </div>
    );
}
