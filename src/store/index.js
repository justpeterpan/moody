import Vue from 'vue';
import Vuex from 'vuex';
import { vuexfireMutations } from 'vuexfire';

import auth from './auth';
import moods from './moods';

Vue.use(Vuex);

export default new Vuex.Store({
  mutations: { ...vuexfireMutations },

  modules: {
    auth,
    moods,
  },
});
