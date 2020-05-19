<template>
 <nav id="sidebar" class="px-0 bg-dark bg-gradient sidebar">
	<ul class="nav nav-pills flex-column">
		<li class="logo-nav-item">
			<a class="navbar-brand" href="#">
				<img :src="logo" width="34" height="68" :alt="title">
			</a>
		</li>
		<li>
			<h6 class="nav-header">Modulos</h6>
		</li>
		<li class="nav-item" v-for="(item, key) in mainMenu" :key="item.id">
			<a class="nav-link" :class="{ active: key == 0 }" :href="item.link">
				<i class="batch-icon" :class="item.icono"></i> {{item.slug}}
			</a>
		</li>
	</ul>
</nav>
</template>

<script>
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
      logo: '/img/logo.png',
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

    // const DevMenu = {
    //   title: 'Tacos Heris',
    //   logo: '/img/logo.png',
    //   mainMenu: [
    //     {
    //       link: '/',
    //       slug: 'inicio',
    //       icono: 'batch-icon-home',
    //     },
    //     {
    //       link: '/restaurant/alimentos',
    //       slug: 'Alimentos',
    //       icono: 'batch-icon-folder-add',
    //     },
    //     {
    //       link: '/restaurant/ordenes',
    //       slug: 'Ordenes',
    //       icono: 'batch-icon-users',
    //     },
    //     {
    //       link: '/restaurant/repartidores',
    //       slug: 'Respartidores',
    //       icono: 'batch-icon-users',
    //     },
    //   ],
    // }; // end dev menu

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
      logo: '/img/logo.png',
      mainMenu: [
        {
          link: '/',
          slug: 'Inicio',
          icono: 'batch-icon-home',
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
        {
          link: '/restaurant/ordenes',
          slug: 'Ordenes',
          icono: 'batch-icon-notes',
        },
        {
          link: '/restaurant/DashboardOrdenes',
          slug: 'Pendientes',
          icono: 'batch-icon-paper-roll',
        },
        {
          link: '/restaurant/repartidores',
          slug: 'Repartidores',
          icono: 'batch-icon-users',
        },
      ],
    }; // end dev menu

    return DevMenu;
  },
};
</script>
