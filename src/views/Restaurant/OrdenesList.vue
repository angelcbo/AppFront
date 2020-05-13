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
                  <p class="lead">
                    <!-- A demo list of all the types of tables included in QuillPro - Whether it's <strong>Basic</strong>, <strong>Fully Responsive</strong> or <strong>Datatables</strong>. -->
                  </p>
                </div>
				<div class="col-md-12 pb-5">
					<!-- <h2>1. Basic Table</h2>
					<p>
						Basic table layout with only <code>.table</code> class.
					</p> -->
					<div class="col-md-2 ">
						<button class="btn btn-primary waves-effect waves-light" @click="create" > Agregar </button>
					</div>
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
import ResOrdenes from '@/modules/restaurant/models/ResOrdenes.js';

// import Faker from 'faker';

export default {
  name: 'viewResOrdenes',
  data() {
    this.loadItems();
    return {
      title: 'Ordenes',
      debug: true,
      items: [],
    };
  },
  components: {
	  SideMenu,
	  TopBar,
  },
  methods: {
    loadItems() {
      const _this = this;
      ResOrdenes.list({}, (res) => {
        console.log(res);
        _this.items = res.data.items;
      });
    },
    create() {
      this.$router.push({ name: 'ResOrdenesCreate' });
    },
    edit(id) {
      this.$router.push({ name: 'ResOrdenesEdit', params: { ordenId: id } });
    },
    delet(id) {
      const _this = this;
      ResOrdenes.delete(id, (res) => {
        alert('elemento borrado');
        _this.loadItems();
      });
    },

  },
};
</script>
