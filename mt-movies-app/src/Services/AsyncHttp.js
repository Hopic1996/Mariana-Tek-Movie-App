import { Url } from './Url';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

export const AsyncHttp = {
    get,
    post,
    patch,
    put,
    delete: async function (sEndPoint, oData, oParam, sBaseURL='') {
        return await new Promise(function (resolve, reject) {
            return axios.delete(Url.makeUrl(sEndPoint, sBaseURL), oParam ? oParam : {}, oData ? oData : {})
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    reject(error.response ? error.response.data : error);
                });
        });
    }
};

async function get(sEndPoint, oData, oHeaders, sBaseURL='') {
    return await new Promise(function (resolve, reject) {
        return axios.get(
            Url.makeUrl(sEndPoint, sBaseURL), 
            oData ? { params: oData, headers: oHeaders ? oHeaders : {} } : {}
        )
        .then(function (response) {
            resolve(response.data);
        })
        .catch(function (error) {
            reject(error.response ? error.response.data : error);
        });
    });
}

async function post(sEndPoint, data, oParam, sBaseURL='') {
    return await new Promise(function (resolve, reject) {
        return axios.post(Url.makeUrl(sEndPoint, sBaseURL), data ? data : {}, oParam ? oParam : {})
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error.response ? error.response.data : error);
            });
    });
}

async function put(sEndPoint, oData, oParam, sBaseURL='') {
    return await new Promise(function (resolve, reject) {
        return axios.put(Url.makeUrl(sEndPoint, sBaseURL), oData ? oData : {}, oParam ? oParam : {})
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error.response ? error.response.data : error);
            });
    });
}

async function patch(sEndPoint, oData, oParam, sBaseURL='') {
    return await new Promise(function (resolve, reject) {
        return axios.patch(Url.makeUrl(sEndPoint, sBaseURL), oData ? oData : {}, oParam ? oParam : {})
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error.response ? error.response.data : error);
            });
    });
}