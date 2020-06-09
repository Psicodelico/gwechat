import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    key: 'nctc',
    storage: window.localStorage
})

export default new Vuex.Store({
    state: {
        info: {
            code: '',
            enterprise: ''
        },
        report: '',
        name: '',
        password: '',
        count: 0,
    },
    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--,
        ...mutations
    },
    actions,
    modules: {
    },
    plugins: [
        vuexLocal.plugin
    ],
})
