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
            <div class="card-header">
              Información del Alimento
              <p class="task-list-stats">
                <span class="task-list-total">Recuerda ingresar todos los datos.</span>
              </p>
            </div>
            <div class="card-body">
              <!-- <h3>Empleado - Eduardo Berumen</h3> -->
                <div class="row">
                  <div class="col-md-4">
                    <div class="d-flex justify-content-center">
                      <div class="d-flex flex-column">
                        <div class="img-cont">
                          <div class="img-display">                          
                          </div>
                        </div>
                        <div class="btn-group">
                          <button class="btn btn-danger col-md-6">
                            Borrar Imagen
                          </button>
                          <button class="btn btn-secondary col-md-6">
                            Subir Imagen
                          </button>                        
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <form>
                      <div class="form-group">
                        <label>Nombre</label>
                        <input type="text" class="form-control" placeholder="Nombre" v-model="item.nombre" @keyup="copyNameDesc">
                      </div>
                      <div class="form-group">
                        <label>Precio</label>
                        <input type="text" class="form-control" placeholder="Precio" v-model="item.precio">
                      </div>
                      <div class="form-group" style="padding-right: 16px;">
                        <label> Categoria </label>
                        <!-- <input type="text" class="form-control" placeholder=" Categoria " v-model="item.categoria"> -->
                        <select class="form-control" style="height:34.1667px;" v-model="item.categoria" >
                          <option v-for="(cat, idx) in categorias" v-bind:value="cat" v-bind:key="idx">
                              {{cat}}
                          </option>
                        </select> 
                      </div>
                      <div class="form-group">
                        <label> Descripción </label>
                        <input type="text" class="form-control" placeholder=" Descripcion " v-model="item.descripcion">
                      </div>                
                    </form>
                  </div>
                </div>                                                  

            </div>

            <div class="card-footer">
              <div class="row">
                <div class="col-md-12">
                  <div class="btn-toolbar justify-content-end" role="toolbar" aria-label="Toolbar with button groups">
                    <div class="btn-group mr-2" role="group" aria-label="First group">
                      <button type="button" class="btn btn-danger" @click="save">Cancelar</button>                      
                    </div>
                    <div class="btn-group mr-2" role="group" aria-label="Second Group">
                      <button type="button" class="btn btn-secondary" @click="save">Guardar</button>
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" class="btn btn-primary" v-if="isNew&&debug" @click="randomFill" >random fill</button>                              
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

const categorias = [
  'tacos',
  'burritos',
  'bebidas',
  'cebollitas',
  'especiales',
  'otros',
  'servicios'
]

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
        categorias: categorias,
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
      console.log(item);
    },
    randomFill(){
      this.item = ResAlimentos.random();
    },
    copyNameDesc(){
      this.item.descripcion = this.item.nombre;
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

<style>
.img-cont{  
  background: url("http://localhost:5000/api/ResAlimentos/ImageAlimento?id=1&alimento=taco%20de%20asada");
  background-size: cover;
  background-repeat: no-repeat;
}

.img-display{
    position: relative;
    width: 100%;
    overflow: hidden;
    background: transparent;   
}

.img-display::after{
  content: "";
  display: block;
  padding-top: 100%;
}

</style>