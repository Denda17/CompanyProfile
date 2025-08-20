import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../pages/Home.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../pages/About.vue"),
    },
    {
      path: "/products",
      name: "products",
      component: () => import("../pages/Products.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../pages/Contact.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../pages/Login.vue"),
      meta: { hideNavbar: true },
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../pages/Register.vue"),
      meta: { hideNavbar: true },
    },
  ],
});

export default router;
