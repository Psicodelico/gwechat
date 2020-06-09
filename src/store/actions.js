import types from './types';
import { getReport } from '@/api/auth.api';

const actions = {
    async fetchReport({ commit }) {
        try{
            let res = await getReport();
            commit(types.LOADING, false);
            commit(types.FETCH_REPORT, {
                report: res.data
            });
        }catch(e){
            commit(types.LOADING, false);
            commit(types.FETCH_REPORT, {
                report: "没有数据"
            });
        }
        
    },
}
export default actions;