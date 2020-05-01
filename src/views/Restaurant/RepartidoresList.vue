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

              <div class="row">
                <div class="col-md-12 pb-5">
                  <!-- <p class="lead">
                    A demo list of all the types of tables included in QuillPro - Whether it's <strong>Basic</strong>, <strong>Fully Responsive</strong> or <strong>Datatables</strong>.
                  </p> -->
				  <div class="col-md-2 ">
				  	<button class="btn btn-primary waves-effect waves-light" @click="create" > Agregar </button>
				  </div>
                </div>
				<div class="col-md-12 pb-5">
					<!-- <h2>1. Basic Table</h2>
					<p>
						Basic table layout with only <code>.table</code> class.
					</p> -->
					<table class="table">
						<thead>
							<tr>
								<th>#</th>
								<th> Nombre </th>
								<th> Opciones </th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="row in items" v-bind:key="row.repartidorId" >
							<td>{{row.repartidorId}}</td>
							<td>{{row.nombre}}</td>
							<td>
								<div class="btn-group" role="group" aria-label="Basic example">
									<button type="button" class="btn btn-primary waves-effect waves-light" @click="edit(row.repartidorId)" >Editar</button>
									<button type="button" class="btn btn-primary waves-effect waves-light" @click="delet(row.repartidorId)" >Eliminar</button>
								</div>
							</td>
							</tr>
						</tbody>
					</table>
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
  name: 'viewResRepartidores',
  data() {
	this.loadItems();
    return {
        title: "Repartidores",
		debug: process.env.VUE_APP_DEV,
		items: []
      };
  },
  components: {
	  SideMenu,
	  TopBar,
  },
  methods: {
	loadItems(){
		let _this = this;
		ResRepartidores.list({}, function(res){
			console.log(res);
			_this.items = res.data.items;
		});
	},
	create(){
		this.$router.push({ name: 'ResRepartidoresCreate'});
	},
	edit(id){
		this.$router.push({ name: 'ResRepartidoresEdit', params: { repartidorId: id } });
	},
	delet(id){
		let _this = this;
		ResRepartidores.delete(id, function(res){
			alert('elemento borrado');
			_this.loadItems();
		});
	}
   
  },
};
</script>
