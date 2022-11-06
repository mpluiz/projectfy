import { defineStore } from 'pinia';

export const useProjectStore = defineStore('project', {
  state: () => ({
    projects: JSON.parse(localStorage.getItem('projects') || '[]'),
  }),
  getters: {
    countProjects: (state) => state.projects.length,
  },
  actions: {
    addProject(project) {
      localStorage.removeItem('projects');
      this.projects.push(project);
      localStorage.setItem('projects', JSON.stringify(this.projects));
    },
  },
});
