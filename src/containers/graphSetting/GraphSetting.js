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
import { Settings as SettingsIcon, ExpandMore as ExpandMoreIcon } from '@material-ui/icons';

import { EXPAND_STATUS } from '../../utils/ExpandStatus';

class GraphSetting extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { settingsStatus, togglePanel } = this.props;
        return (
            <Accordion expanded={settingsStatus} onChange={togglePanel(EXPAND_STATUS.SETTINGS)}>
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
        );
    }
}

export default GraphSetting;
