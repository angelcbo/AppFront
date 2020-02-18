import Vue from 'vue';
import Router from 'vue-router';
import store from './store.js';
import Home from './views/Home.vue';
import Demo from './views/Demo.vue';
import About from './views/About.vue';

import Catalogos from './views/Catalogos.vue';
import Empleados from './views/Empleados.vue';
import Mantenimiento from './views/Mantenimiento.vue';
import Folios from './views/Folios.vue';
import vNomEmpleado from './views/vNomEmpleado.vue';
import FormUsuario from './views/FormUsuarios.vue';
import Reportes from './views/Reportes.vue';
import Ordenes from './views/Ordenes.vue';
import Login from './components/Login.vue';
import Secure from './components/Secure.vue';
import Register from './components/Register.vue';
import Usuarios from './views/Usuarios.vue';

import RCURP from './views/ReporteCURP.vue';
import RO from './views/Restaurant_Orden.vue';
import RO2 from './views/Restaurant_Orden2.vue';
import HistorialAPI from './views/HistorialApi.vue';
import OrdenV2 from './views/OrdenV2.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/',
      name: 'demo',
      component: Demo,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/secure',
      name: 'secure',
      component: Secure,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/catalogos',
      name: 'catalogos',
      component: Catalogos,
    },
    {
      path: '/empleados',
      name: 'empleados',
      component: Empleados,
    },
    {
      path: '/mantenimiento',
      name: 'mantenimiento',
      component: Mantenimiento,
    },
    {
      path: '/folios',
      name: 'folios',
      component: Folios,
    },
    {
      path: '/nuevo_empleado',
      name: 'vNomEmpleado',
      component: vNomEmpleado,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/reportes',
      name: 'reportes',
      component: Reportes,
    },
    {
      path: '/ordenes',
      name: 'ordenes',
      component: Ordenes,
    },
    {
      path: '/formusuario',
      name: 'formusuario',
      component: FormUsuario,
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: Usuarios,
    },
    {
      path: '/ReporteCURP',
      name: 'ReporteCURP',
      component: RCURP,
    },
    {
      path: '/RestaurantOrden',
      name: 'Restaurant_Orden',
      component: RO,
    },
    {
      path: '/RestaurantOrden2',
      name: 'Restaurant_Orden2',
      component: RO2,
    },{
      path:'/HistorialApi',
      name: 'HistorialApi',
      component: HistorialAPI,
    },
    {
      path:'/Ordenv2',
      name:'Orden2',
      component:OrdenV2,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // console.log("isloogetin", store.getters.isLoggedIn)
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next('/login');
  } else {
    next();
  }
});

export default router;
