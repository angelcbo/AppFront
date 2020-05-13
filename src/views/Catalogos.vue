<template>
  <div class="row">
    <SideMenu />
    <div class="right-column">
      <TopBar />
      <main class="main-content p-5" role="main">
        <div class="row">


            <div class="col-md-4 mb-5">
				<div class="card">
					<div class="card-header text-center">
						<span>NACIONALIDADES</span>
                        <div class="input-group" style="margin: 10px 0;">
                            <input type="text" class="form-control" placeholder="Nacionalidad" v-model="nuNacionalidad">
                            <div class="input-group-prepend">
                                <a @click="saveNacionalidad" class="input-group-text  btn-primary waves-effect waves-light radio_btn">
                                    <i class="fa fa-plus"></i>
                                </a>
                            </div>
                        </div>
					</div>
                    <ul class="list-group list-group-flush text-left">
                        <li v-for="item in lstNacionalidad" class="list-group-item">
                            <span> {{item.nombre}} </span>
                            <i class="fa fa-trash"></i>
                            <i class="fa fa-edit"></i>
                        </li>
                    </ul>
				</div>
			</div>

			<div class="col-md-4 mb-5">
				<div class="card">
					<div class="card-header text-center">
						<span>DEPARTAMENTOS</span>
					    <div class="input-group" style="margin: 10px 0;">
                            <input type="text" class="form-control" placeholder="Departamento" v-model="nuDepartamento">
                            <div class="input-group-prepend">
                                <a @click="saveDepartamento" class="input-group-text  btn-primary waves-effect waves-light radio_btn">
                                    <i class="fa fa-plus"></i>
                                </a>
                            </div>
                        </div>
					</div>
                    <ul class="list-group list-group-flush text-left">
                        <li v-for="item in lstDepartamento" class="list-group-item">
                            <span> {{item.nombre}} </span>
                            <i class="fa fa-trash"></i>
                            <i class="fa fa-edit"></i>
                        </li>
                    </ul>
				</div>
			</div>

			<div class="col-md-4 mb-5">
				<div class="card">
					<div class="card-header text-center">
						<span>TIPOS DE NOMINA</span>
                        <div class="input-group" style="margin: 10px 0;">
                            <input type="text" class="form-control" placeholder="Tipo de nomina" v-model="nuNomina">
                            <div class="input-group-prepend">
                                <a @click="saveNomina" class="input-group-text  btn-primary waves-effect waves-light radio_btn">
                                    <i class="fa fa-plus"></i>
                                </a>
                            </div>
                        </div>
					</div>
                    <ul class="list-group list-group-flush text-left">
                        <li v-for="item in lstNomina" class="list-group-item">
                            <span> {{item.nombre}} </span>
                            <i class="fa fa-trash"></i>
                            <i class="fa fa-edit"></i>
                        </li>
                    </ul>
				</div>
			</div>

			<div class="offset-md-1 col-md-4 mb-5">
				<div class="card">
					<div class="card-header text-center">
						<span>TIPOS DE SALARIO</span>
					    <div class="input-group" style="margin: 10px 0;">
                            <input type="text" class="form-control" placeholder="Tipo de salario" v-model="nuSalario">
                            <div class="input-group-prepend">
                                <a @click="saveSalario" class="input-group-text  btn-primary waves-effect waves-light radio_btn">
                                    <i class="fa fa-plus"></i>
                                </a>
                            </div>
                        </div>
					</div>
                    <ul class="list-group list-group-flush text-left">
                        <li v-for="item in lstSalario" class="list-group-item">
                            <span> {{item.nombre}} </span>

                            <a @click="delSalario(item.id)" class="radio_btn"><i class="fa fa-trash"></i></a>
                            <a @click="editSalario" class="radio_btn"><i class="fa fa-edit"></i></a>
                        </li>
                    </ul>
				</div>
			</div>

			<div class="col-md-4 mb-5">
				<div class="card">
					<div class="card-header text-center">
						<span>PUESTOS</span>
					    <div class="input-group" style="margin: 10px 0;">
                            <input type="text" class="form-control" placeholder="Puesto" v-model="nuPuesto">
                            <div class="input-group-prepend">
                                <a @click="savePuesto" class="input-group-text  btn-primary waves-effect waves-light radio_btn">
                                    <i class="fa fa-plus"></i>
                                </a>
                            </div>
                        </div>
					</div>
                    <ul class="list-group list-group-flush text-left">
                        <li v-for="item in lstPuesto" class="list-group-item">
                            <span> {{item.nombre}} </span>
                            <i class="fa fa-trash"></i>
                            <i class="fa fa-edit"></i>
                        </li>
                    </ul>
				</div>
			</div>


        </div>

      </main>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import SideMenu from '@/components/SideMenu.vue';
import TopBar from '@/components/TopBar.vue';

import NomCatalogo from '@/modules/nomina/models/NomCatalogoModel.js';

export default {
  name: 'catalogos',
  data() {
    return {
      nuNacionalidad: '',
      nuDepartamento: '',
      nuNomina: '',
      nuSalario: '',
      nuPuesto: '',
      lstNacionalidad: [],
      lstNomina: [],
      lstDepartamento: [],
      lstSalario: [],
      lstPuesto: [],
    };
  },
  mounted() {
    const _this = this;
    console.log('mounted');
    NomCatalogo.loadAll()
      .then((response) => {
        console.log(response);
        _this.lstNacionalidad = response.data.nacionalidad;
        _this.lstNomina = response.data.nomina;
        _this.lstDepartamento = response.data.departamento;
        _this.lstSalario = response.data.salario;
        _this.lstPuesto = response.data.puesto;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  components: {
	  SideMenu,
	  TopBar,
  },
  methods: {
    saveNacionalidad() {
      console.log('nacionalidad', this.nuNacionalidad);
      const params = {
        model: 'nacionalidad',
        data: { nombre: this.nuNacionalidad },
      };
      NomCatalogo.save(params)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    saveDepartamento() {
      console.log('departamento', this.nuDepartamento);
      const params = {
        model: 'departamento',
        data: { nombre: this.nuDepartamento },
      };
      NomCatalogo.save(params)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    saveNomina() {
      console.log('nomina', this.nuNomina);
      const params = {
        model: 'nomina',
        data: { nombre: this.nuNomina },
      };
      NomCatalogo.save(params)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    saveSalario() {
      console.log('salario', this.nuSalario);
      const params = {
        model: 'salario',
        data: { nombre: this.nuSalario },
      };
      NomCatalogo.save(params)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    delSalario(id) {
      console.log('del salario ', id);
      const params = {
        model: 'salario',
        data: { id },
      };
      NomCatalogo.delete(params)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    editSalario() {

    },
    savePuesto() {
      console.log('puesto', this.nuPuesto);
      const params = {
        model: 'puesto',
        data: { nombre: this.nuPuesto },
      };
      NomCatalogo.save(params)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
