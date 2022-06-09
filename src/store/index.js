import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: JSON.parse(localStorage.getItem('projects') || '[]'),
  },
  getters: {
    projects: (state) => state.projects,
  },
  mutations: {
    addProject(state, project) {
      localStorage.removeItem('projects');
      state.projects.push(project);
      localStorage.setItem('projects', JSON.stringify(state.projects));
    },
  },
  actions: {},
  modules: {},
});
