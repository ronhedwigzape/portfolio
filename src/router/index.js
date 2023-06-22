import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Projects from '../views/Projects.vue';
import Contact from '../views/Contact.vue';
import PageNotFound from '../views/PageNotFound.vue';
import { useHomeStore } from "@/stores/store-home";
import { useProjectStore } from "@/stores/store-projects";
import { useContactStore } from "@/stores/store-contact";

function createDynamicRoutes() {
  const home = useHomeStore();
  const project = useProjectStore();
  const contact = useContactStore();

  return [
    {
      path: `/${home.slug}`,
      name: `${home.slug}`,
      component: Home,
    },
    {
      path: `/${project.slug}`,
      name: `${project.slug}`,
      component: Projects,
    },
    {
      path: `/${contact.slug}`,
      name: `${contact.slug}`,
      component: Contact,
    },
    // Show 404 Not Found if route didn't exist
    { path: '/:pathMatch(.*)*', name: 'not-found', component: PageNotFound },
  ];
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [],
});

router.beforeEach(async (to, from, next) => {
  if (router.getRoutes().length < 2) {
    const dynamicRoutes = createDynamicRoutes();
    dynamicRoutes.forEach(route => router.addRoute(route));

    // Trigger a new navigation to the current route
    await router.push(to.path);
  }
  next();
});

export default router;
