<template>
 <nav id="sidebar" class="px-0 sidebar">
	<ul class="nav nav-pills flex-column">
		<li class="logo-nav-item">
			<div class="d-flex justify-content-center" style="padding-top:10px">
        <img :src="logo" width="99" alt="logo">
      </div>
		</li>
		<li>
			<h6 class="nav-header">Modulos</h6>
		</li>
		<li class="nav-item" v-for="(item) in mainMenu" :key="item.id">
			<a class="nav-link" :class="{ active: isPath(item) }" :href="item.link">
				<i class="batch-icon" :class="item.icono"></i> {{item.slug}}
			</a>
		</li>
	</ul>
</nav>
</template>

<script>

const PROJECT = process.env.VUE_APP_PROJECT;

export default {
  name: 'SideMenu',

  props: {
    msg: String,
  },
  data() {
    const NominaMenu = {
      title: 'Industrial Pinos Altos',
      logo: '/img/logo_ipa.png',
      mainMenu: [
        {
          link: '/',
          slug: 'inicio',
          icono: 'batch-icon-home',
        },
        {
          link: '/catalogos',
          slug: 'catalogos',
          icono: 'batch-icon-folder-add',
        },
        {
          link: '/empleados',
          slug: 'Empleados',
          icono: 'batch-icon-user',
        },
        {
          link: '/ordinarias',
          slug: 'Ordinarias',
          icono: 'batch-icon-browser-alt',
        },
        {
          link: '/especiales',
          slug: 'Especiales',
          icono: 'batch-icon-star',
        },
        {
          link: '/utilerias',
          slug: 'Utilerías',
          icono: 'batch-icon-intersect',
        },
        {
          link: '/reportes',
          slug: 'Reportes',
          icono: 'batch-icon-mail',
        },
        {
          link: '/caja',
          slug: 'Caja',
          icono: 'batch-icon-transfer',
        },
        {
          link: '/soporte',
          slug: 'Soporte',
          icono: 'batch-icon-settings-alt-2',
        },
        {
          link: '/terceros',
          slug: 'Terceros',
          icono: 'batch-icon-users',
        },
      ],
    }; // end nomina menu

    const RestaurantMenu = {
      title: 'Tacos Heris',
      logo: '/img/LogoB.png',
      mainMenu: [
        {
          link: '/',
          slug: 'inicio',
          icono: 'batch-icon-home',
        },
        {
          link: '/catalogos',
          slug: 'catalogos',
          icono: 'batch-icon-folder-add',
        },
        {
          link: '/ordenes',
          slug: 'Ordenes',
          icono: 'batch-icon-users',
        },
        {
          link: '/usuarios',
          slug: 'Usuarios',
          icono: 'batch-icon-users',
        },
      ],
    }; // end restaurant menu

    const Ipa = {
      title: 'Cuentas por pagar',
      logo: '/img/logo.png',
      mainMenu: [
        {
          link: '/',
          slug: 'inicio',
          icono: 'batch-icon-home',
        },
        {
          link: '/cxp/CtasBancosProveedores',
          slug: 'Cuentas Bancos Proveedores',
          icono: 'batch-icon-folder-add',
        },
      ],
    }; // end dev menu

    let DevMenu = {
      title: 'Tacos Heris',
      logo: '/img/LogoW.svg',
      mainMenu: [
        {
          link: '/',
          slug: 'Inicio',
          icono: 'batch-icon-home',
        },
        {
          link: '/restaurant/heris/orden',
          slug: 'Nueva Orden',
          icono: 'batch-icon-notes',
        },
        {
          link: '/restaurant/heris/ordenes',
          slug: 'Ordenes',
          icono: 'batch-icon-notes',
        },
        {
          link: '/restaurant/inicio',
          slug: 'Estadisticas',
          icono: 'batch-icon-tilde',
        },
        {
          link: '/restaurant/alimentos',
          slug: 'Alimentos',
          icono: 'batch-icon-tag-alt-2',
        },

        // {
        //   link: '/restaurant/DashboardOrdenes',
        //   slug: 'Pendientes',
        //   icono: 'batch-icon-paper-roll',
        // },
        {
          link: '/restaurant/repartidores',
          slug: 'Repartidores',
          icono: 'batch-icon-users',
        },
      ],
    }; // end dev menu


 
    return DevMenu;

    
  },
  methods:{
    isPath(item){
      // console.log('ispath', item.link, this.$route);
      return item.link == this.$route.path;
    }
  }
};
</script>

<style>
.nav-link.active{  
  background: #e52d27;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #b31217, #e52d27);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #b31217, #e52d27); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.sidebar{
  background: #232b2b;
}
</style>