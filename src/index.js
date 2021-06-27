import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./redux/reducers";

import './assets/css/main.css';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);