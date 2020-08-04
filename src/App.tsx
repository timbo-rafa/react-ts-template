import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';
import SideMenu from './sidemenu/SideMenu';
import useStyles from './useStyles';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import AppRoutes from './AppRoutes';

const store = createStore(rootReducer);

function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Provider store={store}>
                <Router>
                    <SideMenu />
                    <main className={classes.content}>
                        <div className={classes.appBarSpacer} />
                        <AppRoutes />
                    </main>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
