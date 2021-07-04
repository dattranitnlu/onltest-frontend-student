import React from 'react';
import ReactDOM from 'react-dom';
import {CookiesProvider} from "react-cookie";
import {Provider} from 'react-redux';
import App from './views/App';

import './assets/css/main.css';
import configStore from "./redux/configStore";

const store = configStore();

ReactDOM.render(
    <CookiesProvider>
        <Provider store={store}>
            <App/>
        </Provider>
    </CookiesProvider>,
    document.getElementById('root')
);