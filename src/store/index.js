import Vue from 'vue';
import Vuex from 'vuex';

import Projects from '@/store/modules/projects';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { Projects },
});
