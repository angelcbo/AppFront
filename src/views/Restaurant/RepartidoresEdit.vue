<template>
  <div class="row">
		<SideMenu/>
			<div class="right-column">
				<TopBar/>
				<main class="main-content p-5" role="main">
					<div class="row">
            <div class="col-md-12">
              <h1> {{title}} </h1>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <!-- <h3>Empleado - Eduardo Berumen</h3> -->

                <div class="row mb-3">
                  <div class="form-group col-md-4">
                    <label>Nombre</label>
                    <input type="text" class="form-control" placeholder="Nombre" v-model="item.nombre">
                  </div>
                  
                </div>

                <div class="row mb-5">
										<div class="col-md-12">
											<button type="button" class="btn btn-primary" @click="save" >Guardar</button>
										</div>
									</div>

                  <div v-if="debug" class="row mb-5">
										<div class="col-md-12">
											<button type="button" class="btn btn-primary" v-if="isNew&&debug" @click="randomFill" >random fill</button>
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
import ResRepartidores from '@/modules/restaurant/models/ResRepartidores.js';

// import Faker from 'faker';

export default {
  name: 'viewResRepartidoresEdit',
  props:[
    'repartidorId'
  ],
  data() {
    return {
        title: 'Repartidor',
        debug: process.env.VUE_APP_DEV,
        item: ResRepartidores.init(this.repartidorId, this.loadItem),
        isNew: this.repartidorId ? false : true
      };
  },
  components: {
	  SideMenu,
	  TopBar,
  },
  methods: {
    loadItem(res){
      this.item = res.data.item;
    },
    randomFill(){
      this.item = ResRepartidores.random();
    },
    save() {
      console.log('save', this.item);
      // NomEmpleadoM.testpost(this.empleado);
      ResRepartidores.save(this.item);
    },
   
  },
};
</script>
