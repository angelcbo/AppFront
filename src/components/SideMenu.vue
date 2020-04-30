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
    let NominaMenu = {
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

    let RestaurantMenu = {
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

    let DevMenu = {
      title: 'Tacos Heris',
      logo: '/img/logo.png',
      mainMenu: [
        {
          link: '/',
          slug: 'inicio',
          icono: 'batch-icon-home',
        },
        {
          link: '/restaurant/alimentos',
          slug: 'Alimentos',
          icono: 'batch-icon-folder-add',
        },
        {
          link: '/restaurant/ordenes',
          slug: 'Ordenes',
          icono: 'batch-icon-users',
        },
        {
          link: '/restaurant/repartidores',
          slug: 'Respartidores',
          icono: 'batch-icon-users',
        },
      ],
    }; // end dev menu

    let Ipa = {
      title: 'Cuentas por pagar',
      logo: '/img/logo.png',
      mainMenu: [
        {
          link: '/',
          slug: 'inicio',
          icono: 'batch-icon-home',
        },
        {
          link: '/restaurant/alimentos',
          slug: 'Bancos',
          icono: 'batch-icon-folder-add',
        },
        {
          link: '/restaurant/ordenes',
          slug: 'Proveedores',
          icono: 'batch-icon-users',
        },
        {
          link: '/restaurant/repartidores',
          slug: 'Respartidores',
          icono: 'batch-icon-users',
        },
      ],
    }; // end dev menu

    return Ipa;
  },
};
</script>
