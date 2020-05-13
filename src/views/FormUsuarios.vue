<template>
    <div class="row">
        <SideMenu v-bind:slt="6"/>
        <div class="right-column">
            <TopBar />
            <main class="main-content p-5" role="main">
		        <div class="row">
                    <div class="col-md-12">
                        <h1>Agregar Usuario</h1>
                    </div>
                </div>
                <div class="col">
                    <div class = "col-lg-12">
                        <div class="card">
                            <div class="card-header">
                                Datos del Usuario
                                <p class="task-list-stats">
                                    Ingresa los datos solicitados.
                                </p>
                            </div>
                            <div class="card-body">
                                <div class="col">
                                    <form>
                                        <div class="row" style="justify-content: space-between;">
                                            <div class="col" style="margin: 0;">
                                                <div class="row" style = "margin-bottom: 1rem">
                                                    <label for="nomBre">Nombre</label>
                                                    <input type="text" class="form-control" id="nomBre" placeholder="Nombre" v-model="formNombre">
                                                </div>                                                <div class="row" >
                                                    <label for="passWord">Contraseña</label>
                                                    <input type="password" class="form-control" id="passWord" placeholder="Contraseña" v-model="formPassword">
                                                </div>
                                                <div class="row" style="justify-content: flex-end;">
                                                    <button class="btn btn-primary agregar" style = "margin: 2rem 1.5rem 0 0; width: 50%" type = "button" @click="agregarUsuario">Agregar Usuario</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import SideMenu from '@/components/SideMenu.vue';
import TopBar from '@/components/TopBar.vue';
import FormUserModel from '@/modules/restaurant/models/FormUserModel.js';

export default {
  name: 'formulario',
  data() {
    return {
      formNombre: '',
      formPassword: '',
    };
  },
  components: {
    SideMenu,
    TopBar,
  },
  computed: {
    isValid() { return (this.formNombre.trim() != '' && this.formPassword.trim() != ''); },
  },
  methods: {
    agregarUsuario() {
      if (this.isValid) {
        console.log('platillo', this.formNombre, this.formPassword);
        const params = {
          model: '',
          data: { Username: this.formNombre, formPassword: this.formPassword },
        };
        const _this = this;
        FormUserModel.save(params)
          .then((response) => {
            console.log(response);
            location.reload();
          })
          .catch((error) => {
            console.log(error);
            alert(`No fue posible agregar el usuario \n${error}`);
          });
      } else {
        alert('false');
      }
    },
  },
};
</script>
