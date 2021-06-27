import axios from "axios";
import {customApiError} from "../utils/helpers/customApiError";

export const GeneralService = {
    async get(url, params = {}) {
        try {
            const config = setConfig(params);
            const resp = await axios.get(url, config);
            return resp.data
        } catch (error) {
            return customApiError(error.errors.code, error.errors.message);
        }
    },
    async post(url, data) {
        try {
            const config = setConfig({});
            const resp = await axios.post(url, data, config);
            return resp.data;
        } catch (error) {
            return customApiError(error.errors.code, error.errors.message);
        }
    },
    async put(url, data) {
        try {
            const config = setConfig({});
            const resp = await axios.put(url, data, config);
            return resp.data;
        } catch (error) {
            return customApiError(error.errors.code, error.errors.message);
        }
    },
    async delete(url) {
        try {
            const config = setConfig({});
            const resp = await axios.delete(url, config);
            return resp.data;
        } catch (error) {
            return customApiError(error.errors.code, error.errors.message);
        }
    },
    async patch(url, data) {
        try {
            const config = setConfig({});
            const resp = await axios.patch(url, data, config);
            return resp.data;
        } catch (error) {
            return customApiError(error.errors.code, error.errors.message);
        }
    }
}

function setConfig(params = {}) {
    const token = localStorage.getItem('token');
    let config = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json; charset=utf-8'
        }
    }

    if(params && typeof params === 'object' && params !== {}) {
        config = {
            ...config,
            params: params
        }
    }

    return config;
}