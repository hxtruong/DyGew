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
import { connect } from 'react-redux';
import { toggleNodeLabel } from '../../redux/actions';
import { EXPAND_STATUS } from '../../utils/ExpandStatus';

class GraphSetting extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const { settingsStatus, togglePanel, nodeLabelStatus, toggleNodeLabel } = this.props;
        // console.log("xxx003 nodeLabelStatus ", nodeLabelStatus)
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
                                checked={nodeLabelStatus}
                                onChange={toggleNodeLabel}
                                // name="checkedB"
                                color="primary"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Highlight neighbors" />
                            <Switch
                                checked={true}
                                onChange={this.handleChange}
                                // name="checkedB"
                                color="primary"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Global stats view" />
                            <Switch
                                checked={true}
                                onChange={this.handleChange}
                                // name="checkedB"
                                color="primary"
                            />
                        </ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log("xxx101 state: ", state)
    return {
        nodeLabelStatus: state.graphSettings.nodeLabelStatus,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleNodeLabel: (_) => dispatch(toggleNodeLabel()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GraphSetting);
