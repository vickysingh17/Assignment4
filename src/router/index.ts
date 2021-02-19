import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Details from '../views/Details.vue';
import Create from '../views/Create.vue';
import Edit from '../views/Edit.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/details/:Pid',
    name: 'Details',
    component: Details,
  },
  {
    path: '/create',
    name: 'Create',
    component: Create,
  },
  {
    path: '/edit/:Pid',
    name: 'Edit',
    component: Edit,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
