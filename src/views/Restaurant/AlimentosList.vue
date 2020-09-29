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
						<div class="col-md-12">
							<div class="row">
								<div class="col-md-4 pb-3">									
									<div class="input-group">
										<div class="input-group-prepend">
											<div class="input-group-text"><i class="fa fa-cutlery" aria-hidden="true"></i></div>
										</div>
										<input type="text" class="form-control" placeholder="Buscar un alimento..." v-model="searchModel">
									</div>																											
								</div>
								<div class="col pb-3">
									<div class="float-right">									
										<div class="btn-group">
											<button type="button" class="btn btn-primary" style="height: 33.84px;" @click="create()">Agregar<i class="fa fa-plus" aria-hidden="true" style="margin-left: 5px"></i></button>
											<button type="button" class="btn btn-primary" @click="loadItems()">Actualizar<i class="fa fa-refresh" aria-hidden="true" style="margin-left: 5px"></i></button>
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
										<th> Precio </th>
										<th> Categoría </th>
										<th> Opciones </th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(row, index) in filteredItems" v-bind:key="row.id" >
										<td>{{index+1}}</td>
										<td>{{row.nombre}}</td>
										<td>{{row.precio}}</td>
										<td>{{row.categoria}}</td>
										<td>
											<div class="btn-group" role="group" aria-label="Basic example">
												<button type="button" class="btn btn-primary waves-effect waves-light" @click="edit(row.id)" >Editar</button>
												<button type="button" class="btn btn-primary waves-effect waves-light" @click="delet(row.id)" >Eliminar</button>
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
import ResAlimentos from '@/modules/restaurant/models/ResAlimentos.js';

// import Faker from 'faker';

export default {
  name: 'viewResAlimentos',
  data() {
	this.loadItems();
    return {
		title: "Alimentos",
		items:[],
		debug: process.env.VUE_APP_DEV,
		searchModel: "",
      };
  },
  components: {
	  SideMenu,
	  TopBar,
  },
  methods: {
	loadItems(){
		let _this = this;
		ResAlimentos.list(100, {}, function(res){
			console.log(res);
			_this.items = res.data.items;
		});
	},
	create(){
		this.$router.push({ name: 'ResAlimentosCreate'});
	},
	edit(id){
		this.$router.push({ name: 'ResAlimentosEdit', params: { alimentoId: id } });
	},
	delet(id){
		let _this = this;
		ResAlimentos.delete(id, function(res){
			toastr.success("Elemento Borrado "+id, "Nota");
			_this.loadItems();
		});
	}
  },
  computed:{
	  filteredItems : function() {
		let _this = this		  
		if(_this.searchModel.length==0){return _this.items}		  
		return _this.items.filter(function (item) {
		  return String(item.nombre).includes(_this.searchModel);
		})
	  }
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
};
</script>
