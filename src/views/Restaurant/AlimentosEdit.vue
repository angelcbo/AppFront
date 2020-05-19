<template>
  <div class="row">
		<SideMenu/>
			<div class="right-column">
				<TopBar/>
				<main class="main-content p-5" role="main">
					<div class="row">
            <div class="col-md-12" v-if="isNew">
              <h1>Nuevo Alimento</h1>
            </div>
            <div class="col-md-12" v-else>
              <h1>Editar Alimento</h1>
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
                  <div class="form-group col-md-4">
                    <label>Precio</label>
                    <input type="text" class="form-control" placeholder="Precio" v-model="item.precio">
                  </div>
                  <div class="form-group col-md-4">
                    <label> Categoria </label>
                    <input type="text" class="form-control" placeholder=" Categoria " v-model="item.categoria">
                  </div>
                  <div class="form-group col-md-4">
                    <label> Descripcion </label>
                    <input type="text" class="form-control" placeholder=" Descripcion " v-model="item.descripcion">
                  </div>                
                </div>

                <div class="row mb-5">
										<div class="col-md-12">
											<button type="button" class="btn btn-primary" @click="save">Guardar</button>
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
import ResAlimentos from '@/modules/restaurant/models/ResAlimentos.js';

// import Faker from 'faker';

export default {
  name: 'viewResAlimentosEdit',
  props:[
    'alimentoId'
  ],
  data() {
    // console.log("alimentoId ",this.alimentoId)
    return {
        debug: process.env.VUE_APP_DEV,
        item: ResAlimentos.init(this.alimentoId, this.loadItem),
        isNew: this.alimentoId ? false : true
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
      this.item = ResAlimentos.random();
    },
    save() {
      console.log('save', this.item);
      // NomEmpleadoM.testpost(this.empleado);
      let _this = this;   
      ResAlimentos.save(this.item, function(){
        if(_this.isNew){
          toastr.success("Se ha guardado el alimento", "Guardado");
        }else{
          toastr.success("Se han relizado los cambios", "Cambios realizados");
        }
      });
    },
    mounted() {
	    toastr.options = {
        "closeButton": true,
        "debug": false,
        "positionClass": "toast-bottom-right",
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }
    }
  },
};
</script>
