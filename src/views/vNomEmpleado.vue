<template>
  <div class="row">
		<SideMenu/>
			<div class="right-column">
				<TopBar/>
				<main class="main-content p-5" role="main">
					<div class="row">
            <div class="col-md-12">
              <h1>Nuevo Empleado</h1>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <!-- <h3>Empleado - Eduardo Berumen</h3> -->

                <div class="row mb-3">
                  <div class="form-group col-md-4">
                    <label>Nombre</label>
                    <input type="text" class="form-control" placeholder="Nombre" v-model="empleado.nombre">
                  </div>
                  <div class="form-group col-md-4">
                    <label>Apellido Paterno</label>
                    <input type="text" class="form-control" placeholder="Apellido Paterno" v-model="empleado.apellido_paterno">
                  </div>
                  <div class="form-group col-md-4">
                    <label>Apellido Materno</label>
                    <input type="text" class="form-control" placeholder="Apellido Materno" v-model="empleado.apellido_materno">
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="form-group col-md-12">
                    <label>Domicilio</label>
                    <input type="text" class="form-control" placeholder="Domicilio" v-model="empleado.domicilio">
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="form-group col-md-4">
                    <label>CURP</label>
                    <input type="text" class="form-control" placeholder="CURP" v-model="empleado.curp">
                  </div>
                  <div class="form-group col-md-4">
                    <label>RFC</label>
                    <input type="text" class="form-control" placeholder="RFC" v-model="empleado.rfc">
                  </div>
                  <div class="form-group col-md-4">
                    <label>Fecha de Nacimiento</label>
                    <input type="date" class="form-control" placeholder="Fecha de Nacimiento" v-model="empleado.fecha_nacimiento">
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="form-group col-md-4">
                    <label>Nacionalidad</label>
                    <input type="text" class="form-control" placeholder="Nacionalidad" v-model="empleado.nacionalidad">
                  </div>
                  <div class="form-group col-md-4">
                    <label>Infonavit</label>
                    <input type="text" class="form-control" placeholder="Infonavit" v-model="empleado.infonavit">
                  </div>
                  <div class="form-group col-md-4">
                    <label>No. de IMSS</label>
                    <input type="text" class="form-control" placeholder="No. de IMSS" v-model="empleado.no_imss">
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="form-group col-md-3">
                    <label>Sexo</label>
                    <select name="sexo" class="form-control" v-model="empleado.sexo">
                      <option value="" selected disabled>Selecciona Sexo</option>
                      <option value="m">Masculino</option>
                      <option value="f">Femenino</option>
                    </select>
                  </div>
                  <div class="form-group col-md-3">
                    <label>Departamento</label>
                    <input type="text" class="form-control" placeholder="Departamento" v-model="empleado.departamento">
                  </div>
                  <div class="form-group col-md-3">
                    <label>Tipo de Nómina</label>
                    <input type="text" class="form-control" placeholder="Tipo de Nómina" v-model="empleado.tipo_nomina">
                  </div>
                  <div class="form-group col-md-3">
                    <label>Tipo de Salario</label>
                    <input type="text" class="form-control" placeholder="Tipo de Salario" v-model="empleado.tipo_salario">
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="form-group col-md-4">
                    <label>Horas Jornada</label>
                    <input type="text" class="form-control" placeholder="Horas Jornada" v-model="empleado.horas_jornada">
                  </div>
                  <div class="form-group col-md-4">
                    <label>Empelado</label>
                    <input type="text" class="form-control" placeholder="Empelado" v-model="empleado.empleado">
                  </div>
                  <div class="form-group col-md-4">
                    <label>Puesto Base</label>
                    <input type="text" class="form-control" placeholder="Puesto Base" v-model="empleado.puesto_base">
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="form-group col-md-3">
                    <label>Estatus</label>
                    <input type="text" class="form-control" placeholder="Estatus" v-model="empleado.estatus">
                  </div>
                  <div class="form-group col-md-3">
                    <label>Salario Diario</label>
                    <input type="text" class="form-control" placeholder="Salario Diario" v-model="empleado.salario_diario">
                  </div>
                  <div class="form-group col-md-3">
                    <label>Bonos</label>
                    <input type="text" class="form-control" placeholder="Bonos" v-model="empleado.bonos">
                  </div>
                  <div class="form-group col-md-3">
                    <label>Cta.Contable</label>
                    <input type="text" class="form-control" placeholder="Cta.Contable" v-model="empleado.cuenta_contable">
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="form-group col-md-4">
                    <label>Tarjeta</label>
                    <input type="text" class="form-control" placeholder="Tarjeta" v-model="empleado.tarjeta">
                  </div>
                  <div class="form-group col-md-4">
                    <label>Tarjeta Caja</label>
                    <input type="text" class="form-control" placeholder="Tarjeta Caja" v-model="empleado.tarjeta_caja">
                  </div>
                  <div class="form-group col-md-4">
                    <label>Correo Electrónico</label>
                    <input type="text" class="form-control" placeholder="Correo Electrónico" v-model="empleado.correo_electronico">
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="form-group col-md-6">
                    <label>Teléfono</label>
                    <input type="text" class="form-control" placeholder="Teléfono" v-model="telefono">
                  </div>
                  <div class="col-md-1">
                    <button class="btn btn-secondary" @click="agregarTelefono" style="margin-top: 20px;padding: 10px 15px;">
                      <i class="fa fa-plus"></i>
                    </button>
                  </div>
                  <div class="col-md-12" v-if="empleado.telefonos.length > 0">
                    <label><b>Telefonos Agregados</b></label>
                    <div v-for="(tel, index) in empleado.telefonos" :key="tel.id">
                      <p @click="eliminarTelefono(index)" style="cursor:pointer;">{{tel}}</p>
                    </div>
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="form-group col-md-6">
                    <label>Cuenta</label>
                    <input type="text" class="form-control" placeholder="Cuenta" v-model="cuenta">
                  </div>
                  <div class="col-md-1">
                    <button class="btn btn-secondary" @click="agregarCuenta" style="margin-top: 20px;padding: 10px 15px;">
                      <i class="fa fa-plus"></i>
                    </button>
                  </div>
                  <div class="col-md-12" v-if="empleado.cuentas.length > 0">
                    <label><b>Cuentas Agregadas</b></label>
                    <div v-for="(cta, index) in empleado.cuentas" :key="cta">
                      <p @click="eliminarCuenta(index)" style="cursor:pointer;">{{cta}}</p>
                    </div>
                  </div>
                </div>


                <div class="row mb-5">
										<div class="col-md-12">
											<button type="button" class="btn btn-primary" @click="save" >Guardar</button>
										</div>
									</div>

                  <div v-if="debug" class="row mb-5">
										<div class="col-md-12">
											<button type="button" class="btn btn-primary" @click="randomFill" >random fill</button>
										</div>
									</div>


            </div>
          </div>
					<!-- <div class="row mb-4">
						<div class="col-md-12">
							<footer>
								Powered by - <a href="http://base5builder.com/?click_source=quillpro_footer_link" target="_blank" style="font-weight:300;color:#ffffff;background:#1d1d1d;padding:0 3px;">Base<span style="color:#ffa733;font-weight:bold">5</span>Builder</a>
							</footer>
						</div>
					</div> -->
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
  name: 'new_empleado',
  data() {
    return {
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
    randomFill(){
      this.empleado = NomEmpleadoM.random();
    },
    save() {
      console.log('save', this.empleado);
      NomEmpleadoM.testpost(this.empleado);
    },
    agregarTelefono() {
      this.empleado.telefonos.push(this.telefono);
      this.telefono = '';
    },
    eliminarTelefono(index) {
      this.empleado.telefonos.splice(index, 1);
    },
    agregarCuenta() {
      this.empleado.cuentas.push(this.cuenta);
      this.cuenta = '';
    },
    eliminarCuenta(index) {
      this.empleado.cuentas.splice(index, 1);
    },
  },
};
</script>
