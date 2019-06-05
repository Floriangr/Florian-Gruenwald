import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import CV from "./views/CV.vue";
import Login from "./views/Login.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/cv",
      name: "CV",
      component: CV
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/contact",
      name: "contact",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Contact.vue")
    }
  ]
});
