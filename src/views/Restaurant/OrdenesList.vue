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
											<div class="input-group-text"><i class="fa fa-shopping-basket" aria-hidden="true"></i></div>
										</div>
										<input type="text" class="form-control" placeholder="Buscar una orden..." v-model="searchModel">
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
										<th> Mesa </th>
										<th> Status </th>
										<th>Tipo Pago</th>
										<th> Opciones </th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="row in items" v-bind:key="row.ordenId" >
									<td>{{row.ordenId}}</td>
									<td>{{row.mesa}}</td>
									<td>{{row.status}}</td>
									<td>{{row.tipoPago}}</td>
									<td>
										<div class="btn-group" role="group" aria-label="Basic example">
											<button type="button" class="btn btn-primary waves-effect waves-light" @click="edit(row.ordenId)" >Editar</button>
											<button type="button" class="btn btn-primary waves-effect waves-light" @click="delet(row.ordenId)" >Eliminar</button>
											<button type="button" class="btn btn-primary waves-effect waves-light" @click="pagar(row.ordenId)" >Pagar</button>
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
import ResOrdenes from '@/modules/restaurant/models/ResOrdenes.js';

// import Faker from 'faker';

export default {
  name: 'viewResOrdenes',
  data() {
	this.loadItems();
    return {
        title: "Ordenes",
		debug: true,
		items: [],
      };
  },
  components: {
	  SideMenu,
	  TopBar,
  },
  methods: {
	loadItems(){
		let _this = this;
		ResOrdenes.list({}, function(res){
			console.log(res);
			_this.items = res.data.items;
		});
	},
	create(){
		this.$router.push({ name: 'ResOrdenesCreate'});
	},
	edit(id){
		this.$router.push({ name: 'ResOrdenesEdit', params: { ordenId: id } });
	},
	pagar(id){
		this.$router.push({ name: 'ResCheckout', params: { ordenId: id } });
	},
	delet(id){
		let _this = this;
		ResOrdenes.delete(id, function(res){
			toastr.success("Elemento "+res+" ha sido borrado", "Borrado");
			_this.loadItems();
		});
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
