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
														<th>First Name</th>
														<th>Last Name</th>
														<th>Progress</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>1</td>
														<td>Jonas</td>
														<td>Quinn</td>
														<td>
															<div class="progress">
																<div class="progress-bar progress-bar-sm bg-gradient" role="progressbar" style="width: 80%;" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
															</div>
														</td>
													</tr>
													<tr>
														<td>2</td>
														<td>Mark</td>
														<td>Otto</td>
														<td>
															<div class="progress">
																<div class="progress-bar progress-bar-sm bg-gradient" role="progressbar" style="width: 60%;" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
															</div>
														</td>
													</tr>
													<tr>
														<td>3</td>
														<td>Jacob</td>
														<td>Thornton</td>
														<td>
															<div class="progress">
																<div class="progress-bar progress-bar-sm bg-gradient" role="progressbar" style="width: 40%;" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
															</div>
														</td>
													</tr>
													<tr>
														<td>4</td>
														<td>Larry</td>
														<td>the Bird</td>
														<td>
															<div class="progress">
																<div class="progress-bar progress-bar-sm bg-gradient" role="progressbar" style="width: 20%;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
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
import NomEmpleadoM from '@/modules/nomina/models/NomEmpleadoModel.js';

// import Faker from 'faker';

export default {
  name: 'viewResDomicilios',
  data() {
    this.loadItems();
    return {
      title: 'Domicilios',
      debug: true,
      empleado: NomEmpleadoM.init(),
      telefono: '',
      cuenta: '',
    };
  },
  components: {
	  SideMenu,
	  TopBar,
  },
  methods: {
    loadItems() {

    },
    randomFill() {
      this.empleado = NomEmpleadoM.random();
    },
    save() {
      console.log('save', this.empleado);
      // NomEmpleadoM.testpost(this.empleado);
      NomEmpleadoM.test(this.empleado);
    },

  },
};
</script>
