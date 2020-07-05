import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from '../services/history';
import './index.scss';

const View = function() {
    return (
        <Router history={history}>
            {/* <Row className="header-row">
                <Col sm="12">
                    <Header />
                </Col>
            </Row> */}
            {/* <Row className="body-row">
                    <Container> */}
            <Routes />
            {/* </Container>
            </Row> */}

            {/* <Row className="footer-row">
                <Col sm="12">
                    <Footer />
                </Col>
            </Row> */}
        </Router>
    );
};

export default View;
