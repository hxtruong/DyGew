import React from 'react';
import { StylesProvider } from '@material-ui/styles';

import './App.scss';

import Views from './views';

function App() {
    return (
        <StylesProvider injectFirst>
            <div className="App">
                <Views />
            </div>
        </StylesProvider>
    );
}

export default App;
