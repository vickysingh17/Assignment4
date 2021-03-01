import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Details from '../views/Details.vue';
import Create from '../views/Create.vue';
import Edit from '../views/Edit.vue';
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter);

const routes = [
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
  {
    path: '*',
    name: 'Not Found',
    component: NotFound
  }
];

const router = new VueRouter({
  routes,
  // mode: 'history',

});

export default router;
