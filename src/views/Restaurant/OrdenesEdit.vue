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
                    <label>Mesa</label>
                    <input type="text" class="form-control" placeholder="1" v-model="item.mesa">
                  </div>
                  <div class="form-group col-md-4">
                    <label> status </label>
                    <input type="text" class="form-control" placeholder="" v-model="item.status">
                  </div>
                  <div class="form-group col-md-4">
                    <label> tipo pago </label>
                    <input type="text" class="form-control" placeholder="" v-model="item.tipoPago">
                  </div>
                  <div class="form-group col-md-4">
                    <label> consumo </label>
                    <input type="text" class="form-control" placeholder="" v-model="item.consumo">
                  </div>
                </div>
                
                <div class="col-md-6 pb-5">
											<h2> Platos </h2>
											<p>
												Basic table layout with only <code>.table</code> class.
											</p>
                        <table class="table">
                          <thead>
                          <tr>
                            <th>#</th>
                            <th> Comensal </th>
                            <th> Alimento </th>
                            <th> cantidad </th>
                            <th> Opciones </th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td> </td>
                            <td> <input type="text" v-model="iPlato.comensal"  /> </td>
                            <td> <input type="text" v-model="iPlato.alimentoId"  /> </td>
                            <td> <input type="text" v-model="iPlato.cantidad"  /> </td>
                            <td> 
                              <div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-primary waves-effect waves-light" @click="addPlato" > Agregar </button>
                              </div>
                            </td>
                            </tr>
                          <tr v-for="row in item.resPlatos" v-bind:key="item.platoId" >
                          <td></td>
                          <td> <input type="text" v-model="row.comensal"  /> </td>
                            <td> <input type="text" v-model="row.alimentoId"  /> </td>
                            <td> <input type="text" v-model="row.cantidad"  /> </td>

                          <td>
                              <div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-primary waves-effect waves-light" @click="deletePlato(row.platoId)" >Eliminar</button>
                              </div>

                          </td>
                          </tr>
                          </tbody>
                        </table>
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
import ResOrdenes from '@/modules/restaurant/models/ResOrdenes.js';
import ResPlatos from '@/modules/restaurant/models/ResPlatos.js';
// import Faker from 'faker';

export default {
  name: 'viewResOrdenesEdit',
  props:[
    'ordenId'
  ],
  data() {
    return {
        title: 'Orden',
        debug: process.env.VUE_APP_DEV,
        isNew: this.alimentoId ? false : true,
        item: ResOrdenes.init(this.ordenId, this.loadItem),
        iPlato:{
          platoId: 0,
          alimentoId: 0,
          comensal: 1,
          cantidad: 0,
        }
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
      this.item = ResOrdenes.random();
    },
    save() {
      console.log('save', this.item);
      // NomEmpleadoM.testpost(this.empleado);
      ResOrdenes.save(this.item);
    },
    addPlato(){
      let plato = this.iPlato;
      this.item.resPlatos.push( Object.assign({}, plato) );
    },
    deletePlato(id){

    }
  },
};
</script>
