import types from './types';
import {
    getReport
} from '@/api/auth.api';

const actions = {
    async fetchReport({
        commit,
        state
    }) {
        try {
            let res = await getReport({
                frealtaskid: state.info.code,
                fusername: state.info.enterprise
            });
            commit(types.LOADING, false);
            /* {
                “frealtaskid”: “A20200101”，
                “fusername”: “XX有限公司”,
                “fproductname”: “XX产品”
            } */
            commit(types.FETCH_REPORT, {
                report: {
                    data: res.fproductname,
                    error: res.SearchResult
                }
            });
        } catch (e) {
            commit(types.LOADING, false);
            commit(types.FETCH_REPORT, {
                report: {
                    data: "",
                    error: "服务器异常，请稍后重试"
                }
            });
        }
    },
}
export default actions;