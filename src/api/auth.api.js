const $http = require('./api').default;

const URL = `${$http.ECLOUD_PREFIX}users/list`;

const getReport = (fn) => $http.get(URL, {});

export {
    getReport
}