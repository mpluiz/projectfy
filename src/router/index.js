import Vue from 'vue';
import VueRouter from 'vue-router';
import ProjectRegistrationView from '@/views/ProjectRegistrationView.vue';
import ListProjectsView from '@/views/ListProjectsView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/project-registration',
    name: 'project-registration',
    component: ProjectRegistrationView,
  },
  {
    path: '/list-projects',
    name: 'list-projects',
    component: ListProjectsView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
