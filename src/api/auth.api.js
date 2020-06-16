// const $http = require('./api').default;
import {

    Get
} from './api.js'

const AUTH_PREFIX = "";

/**
 * 查询接口
    功能： 公众号从 质检云提取查询结果信息
    访问地址： http: //{访问地址}/api/pageBuild/SearchReport 
    回数据： JSON 格式数据， 格式例如： JSONResult = {
        SearchResult: 您查询的报告结果为真 / 不存在此报告号或该报告为假
    }，
 */
const URL = `${AUTH_PREFIX}api/pageBuild/SearchReport`;

const getReport = (fn) => Get(URL, {});

export {
    getReport
}