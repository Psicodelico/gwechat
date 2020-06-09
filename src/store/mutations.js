import types from './types';

const mutations = {
    [types.LOADING](state, bool) {
        state.loading = bool;
    },
    [types.FETCH_REPORT](state, payload) {
        state.report = payload.report;
    },
}
export default mutations;