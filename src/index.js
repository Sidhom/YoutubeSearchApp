import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddelware from 'redux-saga'
import reducer from './store/reducers/reducer'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {watchVideos} from './store/sagas/index'
const sagaMiddelware = createSagaMiddelware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(
    applyMiddleware(sagaMiddelware)
));
sagaMiddelware.run(watchVideos);
const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
