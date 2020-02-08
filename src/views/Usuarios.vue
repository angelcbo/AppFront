<template>
  <div class="row">
    <SideMenu />
    <div class="right-column">
      <TopBar />
      <main class="main-content p-5" role="main">
        <div class="card">
          <div class="card-header">
            <div class="row">
              <div class="col">
                <div>
                  Usuarios
                  <p class="task-list-stats">
                    <span class="task-list-total">{{0}}</span> usuario(s).
                  </p>
                </div>
              </div>
              <div class="col" style="display: flex; flex-flow: column wrap;">
                <a
                  href="/formusuario"
                  class="btn btn-secondary"
                  style="align-self: flex-end"
                >Agregar Usuario</a>
              </div>
            </div>
          </div>
          <div class="card-body">
            <table class="table">
              <thead class="table table-bordered">
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Contraseña</th>
                  <th scope="col">Opciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="empleado in empleados" :key="empleado.id">
                  <td>{{empleado.username}}</td>
                  <td></td>
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
import FormUserModel from '@/modules/restaurant/models/FormUserModel.js';

export default {
  name: 'mantenimiento',
  data() {
    return {
      empleados: [],
    };
  },
  components: {
    SideMenu,
    TopBar,
  },
  methods: {},
  mounted() {
        let _this = this;
        // console.log('mounted');
        FormUserModel.loadAll(function (response) {
            console.log(response);
            _this.empleados = response.data;
        });
  },
};
</script>