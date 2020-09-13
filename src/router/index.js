import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import MoodSelect from '../views/MoodSelect.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/select',
    name: 'Select',
    component: MoodSelect,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
