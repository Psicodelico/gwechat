import axios from 'axios';

const defaultHeaders = () => ({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "x-requested-with,content-type"
});
// create axios instance
const http = axios.create({
    baseURL: '/',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 30000
});
// 添加响应拦截器
http.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

/**
 * define http method for get/delete/post/put request
 * @param method
 * @param url
 * @param data 
 * @param headers
 * @returns {Promise}
 */
function httpRequest(method, url, params, headers, onUploadProgress) {
    const timeout = onUploadProgress ? 0 : 30000;
    return http({
        method: method,
        url: url,
        data: method === 'POST' || method === 'PUT' ? params : null,
        params: method === 'GET' || method === 'DELETE' ? params : null,
        headers: headers || defaultHeaders(),
        timeout,
        onUploadProgress
    })
}

export default {
    ECLOUD_PREFIX: "",
    get: function (url, params, headers) {
        return httpRequest('GET', url, params, headers)
    },
    post: function (url, params, headers, onUploadProgress) {
        return httpRequest('POST', url, params, headers, onUploadProgress)
    },
    put: function (url, params, headers) {
        return httpRequest('PUT', url, params, headers)
    },
    delete: function (url, params, headers) {
        return httpRequest('DELETE', url, params, headers)
    }
}
