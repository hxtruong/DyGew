import React from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import { FaHotel, FaPlane } from 'react-icons/fa';
import PropTypes from 'prop-types';

import './NavigationHeaderBar.scss';
import TabMode from '../../utils/TabMode';

const NavigationHeaderBar = ({ currTab, onClick }) => {
    console.log('Curr tab: ', currTab);
    return (
        <Navbar className="navHeaderBar" color="light" light expand="md">
            <Nav className="mr-auto navHeaderBar__items" navbar>
                <NavItem
                    className={currTab === TabMode.HOTEL ? 'navItemSelected' : ''}
                    onClick={() => onClick(TabMode.HOTEL)}
                >
                    <NavLink>
                        <FaHotel /> Khách sạn
                    </NavLink>
                </NavItem>
                <NavItem
                    className={currTab === TabMode.PLAN ? 'navItemSelected' : ''}
                    onClick={() => onClick(TabMode.PLAN)}
                >
                    <NavLink>
                        <FaPlane /> Chuyến bay
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

NavigationHeaderBar.propTypes = {
    onClick: PropTypes.func.isRequired,
    currTab: PropTypes.string.isRequired,
};

export default NavigationHeaderBar;
