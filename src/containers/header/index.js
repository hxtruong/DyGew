import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavigationHeaderBar from '../NavigationHeaderBar';
import HeaderTop from '../headerTop';
import './index.scss';
import TabMode from '../../utils/TabMode';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currTab: TabMode.HOTEL,
        };
    }

    onNavTabClick = (tabMode) => {
        const { history } = this.props;
        this.setState({ currTab: tabMode });
        history.push(tabMode);
    };

    render() {
        const { currTab } = this.state;
        return (
            <div className="defaultHeader">
                {/* <HeaderTop /> */}
                {/* <NavigationHeaderBar onClick={this.onNavTabClick} currTab={currTab} /> */}
            </div>
        );
    }
}

Header.propTypes = {
    history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withRouter(Header);
