import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Mostrar from "./views/MostrarProductos.vue";
import Producto from "./views/Productos.vue";

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
      path: "/listarProducto",
      name: "productos",
      component: Mostrar
    },
    {
      path: "/nuevoProducto",
      name: "Nuevo",
      component: Producto
    },
    {
      path: "/modificarProducto",
      name: "Modificar",
      component: Producto
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
