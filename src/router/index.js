import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Projects from '../views/Projects.vue';
import Contact from '../views/Contact.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  // Catch-all route for non-existing paths:
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
