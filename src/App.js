import React from 'react';
import { StylesProvider, ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import './App.scss';

import Views from './views';

const theme = createMuiTheme({
    typography: {
        fontFamily: ['Montserrat', 'sans-serif'].join(','),
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <StylesProvider injectFirst>
                <div className="App">
                    <Views />
                </div>
            </StylesProvider>
        </ThemeProvider>
    );
}

export default App;
