import types from './types';

const mutations = {
    [types.LOADING](state, bool) {
        state.loading = bool;
    },
    [types.FETCH_REPORT](state, payload) {
        state.report = payload.report;
    },
    [types.UPDATE_NAME](state, value) {
        state.name = value;
    },
    [types.UPDATE_PASSWORD](state, value) {
        state.password = value;
    },
}
export default mutations;