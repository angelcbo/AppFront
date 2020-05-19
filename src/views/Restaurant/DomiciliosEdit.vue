<template>
  <div class="row">
		<SideMenu/>
			<div class="right-column">
				<TopBar/>
				<main class="main-content p-5" role="main">
					<div class="row">
            <div class="col-md-12">
              <h1>Nuevo Alimento</h1>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <!-- <h3>Empleado - Eduardo Berumen</h3> -->

                <div class="row mb-3">
                  <div class="form-group col-md-4">
                    <label>Nombre</label>
                    <input type="text" class="form-control" placeholder="Nombre" v-model="empleado.nombre">
                  </div>
                  <div class="form-group col-md-4">
                    <label>Apellido Paterno</label>
                    <input type="text" class="form-control" placeholder="Apellido Paterno" v-model="empleado.apellido_paterno">
                  </div>
                  <div class="form-group col-md-4">
                    <label>Apellido Materno</label>
                    <input type="text" class="form-control" placeholder="Apellido Materno" v-model="empleado.apellido_materno">
                  </div>
                </div>

                <div class="row mb-5">
										<div class="col-md-12">
											<button type="button" class="btn btn-primary" @click="save" >Guardar</button>
										</div>
									</div>

                  <div v-if="debug" class="row mb-5">
										<div class="col-md-12">
											<button type="button" class="btn btn-primary" @click="randomFill" >random fill</button>
										</div>
									</div>


            </div>
          </div>
					
				</main>
			</div>
		</div>
</template>


<script>
import SideMenu from '@/components/SideMenu.vue';
import TopBar from '@/components/TopBar.vue';
import NomEmpleadoM from '@/modules/nomina/models/NomEmpleadoModel.js';

// import Faker from 'faker';

export default {
  name: 'viewResDomiciliosEdit',
  data() {
    return {
        debug: true,
        empleado: NomEmpleadoM.init(),
        telefono: '',
        cuenta: '',
      };
  },
  components: {
	  SideMenu,
	  TopBar,
  },
  methods: {
    randomFill(){
      this.empleado = NomEmpleadoM.random();
    },
    save() {
      console.log('save', this.empleado);
      // NomEmpleadoM.testpost(this.empleado);
      NomEmpleadoM.test(this.empleado);
    },
   
  },
};
</script>
