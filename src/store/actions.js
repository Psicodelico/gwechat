import types from './types';
import {
    getReport
} from '@/api/auth.api';

const actions = {
    async fetchReport({
        commit
    }) {
        try {
            let res = await getReport();
            commit(types.LOADING, false);
            commit(types.FETCH_REPORT, {
                report: res.SearchResult
            });
        } catch (e) {
            commit(types.LOADING, false);
            commit(types.FETCH_REPORT, {
                report: "服务器异常，请稍后重试"
            });
        }
    },
}
export default actions;