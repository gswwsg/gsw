import { createStore } from 'vuex';

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';

const store = createStore ({
    modules: {
        userAuth: userAuthModule
    },

    state () {
        return {};
    },
    mutations : rootMutations,
    actions: rootActions,
    getters: rootGetters
})