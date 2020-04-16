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
								<th> Precio </th>
								<th> Categoría </th>
								<th> Opciones </th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="row in items" v-bind:key="row.alimentoId" >
								<td>{{row.alimentoId}}</td>
								<td>{{row.nombre}}</td>
								<td>{{row.precio}}</td>
								<td>{{row.categoria}}</td>
								<td>
									<div class="btn-group" role="group" aria-label="Basic example">
										<button type="button" class="btn btn-primary waves-effect waves-light" @click="edit(row.alimentoId)" >Editar</button>
										<button type="button" class="btn btn-primary waves-effect waves-light" @click="delet(row.alimentoId)" >Eliminar</button>
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
      };
  },
  components: {
	  SideMenu,
	  TopBar,
  },
  methods: {
	loadItems(){
		let _this = this;
		ResAlimentos.list({}, function(res){
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
		ResAlimentos.delete(id);
	}
  },
};
</script>
