import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login";
import Register from "./components/Register.vue";
import Cart from './components/cart.vue'
import PageNotFound from './components/PageNotFound.vue'

const routes = [
  {
    name: "Home",
    path: "/home",
    component: Home,
    meta: {
      authRequired: true,
    },
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
    meta: {
      authRequired: false,
    },
  },
  {
    name: "Register",
    path: "/",
    component: Register,
    meta: {
      authRequired: false,
    }
  },
  {
    name:'cart',
    path:'/cart',
    component:Cart,
  },
  {
    name:'PageNotFound',
    path:'/:pathMatch(.*)*',
    component:PageNotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Before each route evaluates...
router.beforeEach((routeTo, routeFrom, next) => {
    const authRequired = routeTo.matched.some((route) => route.meta.authRequired);
    if (!authRequired) return next();
    const registration = localStorage.getItem("registration");
    // Check User is login or not and router is procted or not
    if (authRequired && !registration) {
      next("/login");
    } else {
        next();
      }
    });

export default router;
