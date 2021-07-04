import axios from "axios";
import baseURL from "../config/api.config";
import {getToken} from "../utils/helpers/authUtils";
import {omit} from "lodash";

const accessToken = getToken();

const instance = axios.create({
    baseURL: baseURL,
    headers: {
        'Authorization': `Bearer ${accessToken}`,
    }
});

instance.interceptors.request.use(requestConfig => {
    let configOverride = requestConfig;
    if (requestConfig.url === '/login/*') {
        configOverride = omit(requestConfig, 'headers.Authorization');
    } else if (requestConfig.url === '/404') {
        configOverride = omit(requestConfig, 'headers.Authorization');
    } else if (requestConfig.url === '/500') {
        configOverride = omit(requestConfig, 'headers.Authorization');
    }

    return configOverride;
});

instance.interceptors.response.use(response => {
        return Promise.resolve(response);
    },
    error => {
        return Promise.reject(error);
    }
);

export default instance;
