import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GraphVisualization from './pages/graphVisualization';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={GraphVisualization} />
            {/* <Route path="/search-results" component={SearchResult} />
            <Route path="/hotel-room" component={HotelRoom} />
            <Route component={SignIn} /> */}
        </Switch>
    );
}
