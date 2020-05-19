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
						<div class="col-md-12 pb-3">
							<div class="row">
								<div class="col-md-4">
									<div class="input-group">
										<div class="input-group-prepend">
											<div class="input-group-text"><i class="fa fa-motorcycle" aria-hidden="true"></i></div>
										</div>
										<input type="text" class="form-control" placeholder="Buscar un repartidor...">
									</div>																		
								</div>
								<div class="col-md-4 offset-md-4">	
									<div class="float-right">									
										<div class="btn-group">
											<button type="button" class="btn btn-primary" style="height: 33.84px;" @click="create()">Agregar<i class="fa fa-plus" aria-hidden="true" style="margin-left: 5px"></i></button>
											<button type="button" class="btn btn-primary">Actualizar<i class="fa fa-refresh" aria-hidden="true" style="margin-left: 5px"></i></button>
											<button type="button" class="btn btn-primary"><i class="fa fa-sliders" aria-hidden="true"></i></button>										
										</div>		
									</div>								
								</div>
							</div>
						</div>						
						<div class="col-md-12">					
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
