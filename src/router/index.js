import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from "../views/About";
import History from "../views/History";
import Map from "../views/Map";

Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/map',
      name: 'map',
      component: Map
    },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
