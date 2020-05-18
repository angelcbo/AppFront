<template>
<div class="row">
  <SideMenu></SideMenu>
  <div class="right-column">
    <TopBar></TopBar>
    <main class="main-content p-5" role="main">
      <div class="row">
        <div class="col-md-12">
          <h1> {{title}} </h1>
        </div>
      </div> <!-- row -->
      <div class="card">
        <div class="card-body">

<div class="row">
    <div class="col-sm-12 col-md-6">
    <div class="dataTables_length" id="datatable-1_length">
      <button class="btn btn-primary waves-effect waves-light" @click="create" > Agregar </button>
    <!-- <label>Show <select name="datatable-1_length" aria-controls="datatable-1" class="form-control form-control-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label> -->
    </div>
    </div> <!-- col-sm-12 col-md-6 -->
    <div class="col-sm-12 col-md-6">
      <div id="datatable-1_filter" class="dataTables_filter">
        <label>Buscar:<input type="search" class="form-control form-control-sm" placeholder="Buscar por nombre..." aria-controls="datatable-1" v-model="filterValue" @keyup="search"  ></label>
      </div>
    </div> <!-- col-sm-12 col-md-6 -->
</div>
<!-- row -->
              <div class="row">
               
                <div class="col-md-12 pb-5">
					<!-- <h2>1. Basic Table</h2>
					<p>
						Basic table layout with only <code>.table</code> class.
					</p> -->
					<table class="table">
						<thead>
							<tr>
								<th> Rfc </th>
                <th> Nombre </th>
								<th> P. Fiscal </th>
								<th> Imp. Max </th>
                <th> Per. Max </th>
                <th> Opciones </th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="row in items" v-bind:key="row.alimentoId" >
								<td>{{row.rfc}}</td>
                <td>{{row.nombre}}</td>
								<td>{{row.tipoPersonaFiscal}}</td>
								<td>{{row.importeMaximoPago}}</td>
                <td>{{row.periodoMaximoPago}}</td>
								<td>
									<div class="btn-group" role="group" aria-label="Basic example">
										<button type="button" class="btn btn-primary waves-effect waves-light" @click="edit(row.idProveedorConfig)" >Editar</button>
										<button type="button" class="btn btn-primary waves-effect waves-light" @click="delet(row.idProveedorConfig)" >Eliminar</button>
									</div>
								</td>
							</tr>

						</tbody>
					</table>
				</div> <!--  col-md-12 pb-5 --> 
      </div> <!-- row -->
      <paginador :page="paginador.page" :size="paginador.size" :count="paginador.count" :countItems="paginador.countItems" v-on:change="changePage" ></paginador>

       


            </div>
          </div>

				</main> <!-- main -->
  </div> <!-- right-column -->
</div> <!-- row -->
</template>


<script>
import SideMenu from '@/components/SideMenu.vue';
import TopBar from '@/components/TopBar.vue';
import Paginador from '@/components/Paginador.vue';

import CxpProveedoresConfig from '@/modules/cxp/models/CxpProveedoresConfigModel.js';

// import Faker from 'faker';

export default {
  name: 'viewBancosProveedoresList',
  data() {
    this.loadItems();
    return {
      title: 'Cuentas Bancos Proveedores',
      filterValue: '',
      items: [],
      debug: process.env.VUE_APP_DEV,
      paginador:{
        page: 1,
        size: 20,
        count: 0,
        countItems: 0,
      }
    };
  },
  components: {
	  SideMenu,
    TopBar,
    Paginador,
  },
  methods: {
    loadItems() {
      const _this = this;
      CxpProveedoresConfig.list({}, (res) => {
        console.log(res);
        _this.items = res.data.items;
        _this.paginador.count = res.data.count;
        _this.paginador.page = res.data.page;
        _this.paginador.size = res.data.size;
        _this.paginador.countItems = _this.items.length;
      });
    },
    search(){
        const _this = this;
        CxpProveedoresConfig.list({search: _this.filterValue}, (res) => {
          console.log(res);
          _this.items = res.data.items;
          _this.paginador.count = res.data.count;
        _this.paginador.page = res.data.page;
        _this.paginador.size = res.data.size;
        _this.paginador.countItems = _this.items.length;
        });
    },
    changePage(nuPage){
        const _this = this;
        CxpProveedoresConfig.listPage(nuPage, {search: _this.filterValue}, (res) => {
          console.log(res);
          _this.items = res.data.items;
          _this.paginador.count = res.data.count;
        _this.paginador.page = res.data.page;
        _this.paginador.size = res.data.size;
        _this.paginador.countItems = _this.items.length;
        });
    },
    create() {
      this.$router.push({ name: 'CtasBancosProveedoresCreate' });
    },
    edit(id) {
      this.$router.push({ name: 'CtasBancosProveedoresEdit', params: { id: id } });
    },
    delet(id) {
      const _this = this;
      let isdeleted = false;
      if(true){
          CxpProveedoresConfig.delete(id, (res) => {
            alert('elemento borrado');
            _this.loadItems();
          });
      }
      
    },
  },
};
</script>
