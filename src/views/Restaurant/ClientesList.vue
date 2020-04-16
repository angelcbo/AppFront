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
                  <p class="lead">
                    A demo list of all the types of tables included in QuillPro - Whether it's <strong>Basic</strong>, <strong>Fully Responsive</strong> or <strong>Datatables</strong>.
                  </p>
                </div>
                <div class="col-md-6 pb-5">
											<h2>1. Basic Table</h2>
											<p>
												Basic table layout with only <code>.table</code> class.
											</p>
											<table class="table">
												<thead>
													<tr>
														<th>#</th>
														<th> Nombre </th>
														<th> Teléfono </th>
														<th> RFC </th>
														<th> Domicilio </th>
														<th> Opciones </th>
													</tr>
												</thead>
												<tbody>
													<tr v-for="row in items" v-bind:key="row.clienteId" >
								<td>{{row.clienteId}}</td>
								<td>{{row.nombre}}</td>
								<td>{{row.telefono}}</td>
								<td>{{row.rfc}}</td>
								<td> dom </td>
								<td>
									<div class="progress">
										<div class="progress-bar progress-bar-sm bg-gradient" role="progressbar" style="width: 80%;" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
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
import ResClientes from '@/modules/restaurant/models/ResClientes.js';

// import Faker from 'faker';

export default {
  name: 'viewResClientes',
  data() {
	this.loadItems();
    return {
		title: "Clientes",
		items: [],
		debug: true,
	}
  },
  components: {
	  SideMenu,
	  TopBar,
  },
  methods: {
	loadItems(){
		let _this = this;
		ResClientes.list({}, function(res){
			console.log(res);
			_this.items = res.data.items;
		});
	},  
  },
};
</script>
