import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import MoodSelect from '@/views/MoodSelect.vue';
import Overview from '@/views/Overview.vue';
import firebase from '@/firebase';

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
    meta: {
      auth: true,
    },
  },
  {
    path: '/overview',
    name: 'Overview',
    component: Overview,
    meta: {
      auth: true,
    },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        next();
      } else {
        next({ path: '/' });
      }
    });
  } else {
    next();
  }
});

export default router;
