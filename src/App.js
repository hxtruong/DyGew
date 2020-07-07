import React from 'react';
import { StylesProvider, ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
// import { Provider } from 'react-redux'
// import store from './redux/store'

import './App.scss';

import Views from './views';

const theme = createMuiTheme({
    typography: {
        fontFamily: ['Montserrat', 'sans-serif'].join(','),
    },
});

function App() {
    return (
        // <Provider store={store}>
        <ThemeProvider theme={theme}>
            <StylesProvider injectFirst>
                <div className="App">
                    <Views />
                </div>
            </StylesProvider>
        </ThemeProvider>
        // </Provider>
    );
}

export default App;
