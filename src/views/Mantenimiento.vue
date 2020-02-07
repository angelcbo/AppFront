<template>
  <div class="row">
    <SideMenu />
    <div class="right-column">
      <TopBar />
      <main class="main-content p-5" role="main">
        <div class="row">
          <div class="col-md-12">

            <a
              href="/nuevo_empleado"
              class="btn btn-secondary"
              style="float:right;"
            >Agregar Empleado</a>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Opciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="empleado in empleados" :key="empleado.id">
                  <td>{{empleado.nombre}}</td>
                  <td>
                    <i class="fa fa-edit"></i>
                    <i class="fa fa-trash"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>


<script>
import SideMenu from '@/components/SideMenu.vue';
import TopBar from '@/components/TopBar.vue';

export default {
  name: 'mantenimiento',
  data() {
    return {
      empleados: [
        {
          id: 1,
          nombre: 'Eduardo Berumen',
        },
        {
          id: 2,
          nombre: 'Ernesto Ramos',
        },
        {
          id: 3,
          nombre: 'Alejandro Paredes',
        },
        {
          id: 4,
          nombre: 'Jose Rojas',
        },
        {
          id: 5,
          nombre: 'Maria Alvarez',
        },
      ],
    };
  },
  components: {
    SideMenu,
    TopBar,
  },
  methods: {},
};
</script>
