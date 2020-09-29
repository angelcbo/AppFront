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

// views Restaurant
import ResAlimentosEdit from './views/Restaurant/AlimentosEdit'
import ResAlimentosList from './views/Restaurant/AlimentosList'
import ResClientesEdit from './views/Restaurant/ClientesEdit'
import ResClientesList from './views/Restaurant/ClientesList'
import ResDomiciliosEdit from './views/Restaurant/DomiciliosEdit'
import ResDomiciliosList from './views/Restaurant/DomiciliosList'
import ResOrdenesEdit from './views/Restaurant/OrdenesEdit'
import ResHerisOrdenesEdit from './views/Restaurant/Heris/HerisOrdenesEdit'
import ResOrdenesList from './views/Restaurant/OrdenesList'
import ResRepartidoresEdit from './views/Restaurant/RepartidoresEdit'
import ResRepartidoresList from './views/Restaurant/RepartidoresList'
import ResInicio from './views/Restaurant/Inicio.vue';
import ResHerisOrdenesGrid from './views/Restaurant/OrdenesGrid.vue';
import ResCuenta from './views/Restaurant/Cuenta.vue';
import ResCheckout from  './views/Restaurant/Checkout.vue';

// views Restaurant
import CxpCtasBancosProveedoresEdit from './views/Cxp/CtasBancosProveedoresEdit';
import CxpCtasBancosProveedoresList from './views/Cxp/CtasBancosProveedoresList';

// views Woocommerce
import WooOrdersList from './views/Woocommerce/OrdersList';

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
    // {
    //   path: '/ordenes',
    //   name: 'ordenes',
    //   component: Ordenes,
    // },
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
    }, {
      path: '/HistorialApi',
      name: 'HistorialApi',
      component: HistorialAPI,
    },
    {
      path: '/Ordenv2',
      name: 'Orden2',
      component: OrdenV2,
    },
    // Restaurant
    {
      name: 'ResInicio',
      path:'/restaurant/inicio',
      component:ResInicio,
    },
      
    {
      path: '/restaurant/cuenta/:orderId',
      name: 'ResCuenta',
      props: true,
      component:ResCuenta,      
    },
    {
      name: 'ResAlimentosEdit',
      path: '/restaurant/alimento/:alimentoId',
      props: true,
      component: ResAlimentosEdit,
    },
    {
      name: 'ResAlimentosCreate',
      path: '/restaurant/alimento',
      component: ResAlimentosEdit,
    },
    {
      path: '/restaurant/alimentos',
      name: 'ResAlimentosList',
      component: ResAlimentosList,
    },
    {
      path: '/restaurant/cliente',
      name: 'ResClientesEdit',
      component: ResClientesEdit,
    },
    {
      path: '/restaurant/clientes',
      name: 'ResClientesList',
      component: ResClientesList,
    },
    {
      path: '/restaurant/domicilios',
      name: 'ResDomiciliosEdit',
      component: ResDomiciliosEdit,
    },
    {
      path: '/restaurant/domicilios',
      name: 'ResDomiciliosList',
      component: ResDomiciliosList,
    },
    {
      path: '/restaurant/orden/:ordenId',
      name: 'ResOrdenesEdit',
      component: ResOrdenesEdit,
      props: true,
    },
    {
      path: '/restaurant/orden/',
      name: 'ResOrdenesCreate',
      component: ResOrdenesEdit,
    },
    {
      name: 'ResHerisOrdenesGrid',
      path:'/restaurant/heris/ordenes',
      component:ResHerisOrdenesGrid,
    },  
    {
      path: '/restaurant/heris/orden/:ordenId',
      name: 'ResHerisOrdenesEdit',
      component: ResHerisOrdenesEdit,
      props: true,
    },
    {
      path: '/restaurant/heris/orden/',
      name: 'ResHerisOrdenesCreate',
      component: ResHerisOrdenesEdit,
      props: true,
    },
    {
      path: '/restaurant/ordenes',
      name: 'ResOrdenesList',
      component: ResOrdenesList,
    },
    {
      path: '/restaurant/checkout/:ordenId',
      name: 'ResCheckout',
      component: ResCheckout,
      props: true
    },
    {
      path: '/restaurant/repartidor/:repartidorId',
      name: 'ResRepartidoresEdit',
      component: ResRepartidoresEdit,
      props: true,
    },
    {
      path: '/restaurant/repartidor',
      name: 'ResRepartidoresCreate',
      component: ResRepartidoresEdit,
    },
    {
      path: '/restaurant/repartidores',
      name: 'ResRepartidoresList',
      component: ResRepartidoresList,
    },

    {
      path: '/cxp/CtasBancosProveedor/',
      name: 'CtasBancosProveedoresCreate',
      component: CxpCtasBancosProveedoresEdit,
    },
    {
      path: '/cxp/CtasBancosProveedores',
      name: 'CtasBancosProveedoresList',
      component: CxpCtasBancosProveedoresList,
    },
    {
      path: '/cxp/CtasBancosProveedor/:id',
      name: 'CtasBancosProveedoresEdit',
      component: CxpCtasBancosProveedoresEdit,
      props: true,
    },

    {
      path: '/ordenes',
      name: 'WooOrders',
      component: WooOrdersList,
      meta: {
        requiresAuth: true,
      },
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
