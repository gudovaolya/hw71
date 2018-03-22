import React from 'react';
import { AppRegistry } from 'react-native';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import reducer from './src/store/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,  composeEnhancers(applyMiddleware(thunk)));

const Application = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

AppRegistry.registerComponent('hw71', () => Application);
