<template>
  <div class="row">
		<SideMenu/>
			<div class="right-column">
				<TopBar/>
				<main class="main-content p-5" role="main">
					<div class="row">
            <div class="col-md-12">
              <h1>Cuenta de Banco Proveedor</h1>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
                <div class="row" >
                    <h3> Proveedor </h3>
                      <p>
                        <!-- Basic table layout with only <code>.table</code> class. -->
                      </p>
                </div>
                <div class="row mb-3">

                  <div class="form-group col-md-6">
                    <label>Rfc</label>
                    <input type="text" :disabled="!isNew" class="cep form-control" autocomplete="off" placeholder="" v-model="item.rfc" @keyup="showProvModal" @click="showProvModal" @focus="showProvModal">
                  </div>

                  <div class="form-group col-md-6">
                    <label>Nombre del proveedor</label>
                    <input type="text" :disabled="!isNew" class="cep form-control" autocomplete="off" placeholder="" v-model="item.nombre" @keyup="showProvModal" @click="showProvModal" @focus="showProvModal" >
                  </div>
                  <proveedor-modal v-on:change="changeProveedor" ></proveedor-modal>

                  <div class="form-group col-md-4">
                    <label for="itemBanco"> Tipo Persona Fiscal </label>
                    <select class="form-control" id="itemBanco" v-model="item.tipoPersonaFiscal">
                      <option v-for="rTPF in lstTipoPersonaFiscal" v-bind:value="rTPF.tipoPersonaFiscal" >
                          {{rTPF.tipoPersonaFiscal}}
                      </option>
                    </select>
                  </div>

                  <div class="form-group col-md-4">
                    <label for="itemBanco"> Importe Máximo Pago </label>
                    <input type="text" class="maskClabe form-control" autocomplete="off" placeholder="######" v-model="item.importeMaximoPago"/>
                  </div>


                  <div class="form-group col-md-4">
                    <label for="itemBanco"> Frecuencia de pago </label>
                    <select class="form-control" id="itemBanco" v-model="item.periodoMaximoPago">
                      <option v-for="rPP in lstPeriodoPago" v-bind:value="rPP.periodoMaximoPago" >
                          {{rPP.periodoMaximoPago}}
                      </option>
                    </select>
                  </div>


                </div>

                <div class="row">


<div class="col-md-12 pb-5">
  <h3> Bancos </h3>
  <p>
    <!-- Basic table layout with only <code>.table</code> class. -->
  </p>
    <table class="table">
      <thead>
        <tr>
          <th> Banco </th>
          <th> Clabe </th>
          <th> Activo </th>
          <th> Opciones </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> <input v-model="nuBanco.nombreCorto" type="text" class="cep form-control" autocomplete="off" placeholder=""  @keyup="showBancoModal" @click="showBancoModal" @focus="showBancoModal" >
                <banco-modal v-on:change="changeBanco" ></banco-modal> </td>
          <td> <input type="text" class="cep form-control" autocomplete="off" placeholder="##################" v-model="nuBanco.clabe"/> </td>
          <td>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="true" id="itemEstaActiva" v-model="nuBanco.estaActiva">
              <label class="form-check-label" for="itemEstaActiva">
                Activa
              </label>
            </div>

          </td>
          <td>
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-primary waves-effect waves-light" @click="addBanco" > Agregar </button>
            </div>
          </td>
        </tr>

        <tr v-for="rBanco, rIdx in cuentasBanco" >
          <td> <input disabled type="text" class=" form-control" autocomplete="off" v-model="rBanco.nombreCorto"/>  </td>
          <td> <input type="text" class=" form-control" autocomplete="off" v-model="rBanco.clabe"/> </td>
          <td>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="true" id="itemEstaActiva" v-model="rBanco.estaActiva">
                <label class="form-check-label" for="itemEstaActiva">
                  Activa
                </label>
              </div>
          </td>
          <td>
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-primary waves-effect waves-light" @click="deleteRowItem(rIdx)" > Eliminar </button>
            </div>
          </td>
        </tr>

      </tbody>

    </table>
</div>
                </div>


                <div class="row mb-5">
										<div class="col-md-12">
											<button type="button" class="btn btn-primary" @click="save" >Guardar</button>
										</div>
									</div>

                  <div v-if="debug" class="row mb-5">
										<div class="col-md-12">
											<button type="button" class="btn btn-primary" v-if="isNew&&debug" @click="randomFill" >random fill</button>
										</div>
									</div>


            </div>
          </div>

				</main>
			</div>
      <alert-modal v-bind:msg="alertMsg" v-bind:tipo="alertTipo"></alert-modal>
		</div>
</template>


<script>

import { required, minLength, between } from 'vuelidate/lib/validators'

import SideMenu from '@/components/SideMenu.vue';
import TopBar from '@/components/TopBar.vue';

import AlertModal from '@/components/AlertModal.vue';
import BancoModal from '@/views/Cxp/Modals/BancoModal.vue';
import ProveedorModal from '@/views/Cxp/Modals/ProveedorModal.vue';

import CxpCtasBancoProveedor from '@/modules/cxp/models/CxpCtasBancoProveedorModel.js';
import CxpProveedoresConfig from '@/modules/cxp/models/CxpProveedoresConfigModel.js';

import DatosFis from '@/modules/cxp/models/DatosFisModel.js';
import VPersonaEmpresa from '@/modules/cxp/models/VPersonaEmpresaModel.js';
import CxpBanco from '@/modules/cxp/models/CxpBancoModel.js';

import DominioPeriodoPagoCxp from '@/modules/cxp/models/DominioPeriodoPagoCxPModel.js';
import DominioTipoPersonaFiscal from '@/modules/cxp/models/DominioTipoPersonaFiscalModel.js';

// import Faker from 'faker';

let lstDatosFis = [];
let lstBancos = [];

let debug = false;

export default {
  name: 'viewBancosProveedoresList',
  props: [
    'id',
  ],
  mounted() {
      this.loadLists();
      // jQuery('.maskClabe').mask('000000000000000000');
      // this.$Jquery('#itemBanco').selectpicker();
      // console.log("alimentoId ",this.alimentoId)
      console.log( 'VUE_APP_DEV', process.env.VUE_APP_DEV  )
      if (debug) { // debug
        VPersonaEmpresa.listPageSize(1, 100,{}, (res) => {
          lstDatosFis = res.data.items;
        });
        CxpBanco.list({}, (res) => {
          lstBancos = res.data.items;
        });
      }
    
  },
  data() {
    return {
      debug: debug,
      deleted:[],
      item: CxpProveedoresConfig.init(this.id, this.loadItem),
      cuentasBanco: [],
      nuBanco: CxpCtasBancoProveedor.init(),
      lstCxpBanco: [],
      lstDatosFis: [],
      lstPeriodoPago: [],
      lstTipoPersonaFiscal: [],
      isNew: !this.id,
      showProv: false,
      alertMsg: 'error en algo',
      alertTipo: 'alert-warning',
    };
  },
  validations: {
    item: {
      rfc: {
        required,
      },
      tipoPersonaFiscal: {
        required,
      },
      importeMaximoPago: {
        required,
      },
      periodoMaximoPago: {
        required,
      }
    },
    nuBanco: {
      idBanco: {
        required,
      },
      clabe: {
        required,
      },
    },
      cuentasBanco: {
          $each: {
              idBanco: {
                required,
              },
              clabe: {
                required,
              },
          }
      }
  },
  components: {
    AlertModal,
	  SideMenu,
    TopBar,
    BancoModal,
    ProveedorModal,
  },
  methods: {
    loadLists() {
      const _this = this;
      DominioPeriodoPagoCxp.list({}, (res) => {
        _this.lstPeriodoPago = res.data.items;
      });
      DominioTipoPersonaFiscal.list({}, (res) => {
        _this.lstTipoPersonaFiscal = res.data.items;
      });
    },
    addBanco() {
      this.$v.nuBanco.$touch();
      console.log('nubank', this.nuBanco);
      console.log('nubank invalid ', this.$v.nuBanco.$invalid);
      if (this.$v.nuBanco.$invalid) {
        console.log('invalido');
      } else {
        this.cuentasBanco.push(Object.assign({}, this.nuBanco));
        this.nuBanco = CxpCtasBancoProveedor.init();
      }
    },
    changeBanco(banco) {
      this.nuBanco.idBanco = banco.idBanco;
      this.nuBanco.nombreCorto = banco.nombreCorto;
      this.nuBanco.clave = banco.clave;
      this.nuBanco.nombre = banco.nombre;
      console.log('changebanco ', banco);
    },
    showProvModal() {
      ProveedorModal.methods.showModal();
    },
    showBancoModal() {
      BancoModal.methods.showModal();
    },
    changeProveedor(prov) {
      this.item.rfc = prov.rfc;
      this.item.nombre = prov.nombre;
      console.log('changeprov ', prov);
    },
    loadItem(res) {
      const t = this;
      t.item = res.data.item;
      CxpCtasBancoProveedor.list({rfc: t.item.rfc}, function(res){
          t.cuentasBanco = res.data.items;
      })
    },
    randomFill() {
      this.item = CxpProveedoresConfig.random(lstDatosFis, this.lstTipoPersonaFiscal, this.lstPeriodoPago);
      this.cuentasBanco = CxpCtasBancoProveedor.arrRandom(this.item.rfc, lstBancos);
    },
    save() {
      const t = this;
      console.log('save', t.item);
      this.$v.$touch();
      console.log('is invalid', t.$v.item.$invalid);
      if (t.$v.item.$invalid) {
        t.alertMsg="Formulario no válido";
        t.alertTipo="alert-danger";
        AlertModal.methods.showModal();
      } else {
        // NomEmpleadoM.testpost(this.empleado);
        const saveItem = Object.assign({}, t.item);
        saveItem.periodoMaximoPago = saveItem.periodoMaximoPago.trim();
        saveItem.tipoPersonaFiscal = saveItem.tipoPersonaFiscal.trim();
        saveItem.cuentasBanco = t.cuentasBanco;
        if(!t.isNew)
            saveItem.deleted = t.deleted;
        CxpProveedoresConfig.save(saveItem, function(res){
            if( res.data.success ){
                t.alertMsg = "Registro guardado";
                t.alertTipo = "alert-success";
                AlertModal.methods.showModal();
                if(t.isNew){
                    t.item = CxpProveedoresConfig.init();
                    t.cuentasBanco = [];
                    t.nuBanco = CxpCtasBancoProveedor.init();
                }
            }else{
                
                t.alertMsg = "Ha ocurrido un error: "+res.data.msg;
                t.alertTipo = "alert-danger";
                AlertModal.methods.showModal();
            }
            
        });
        
      }
    }, // save
    deleteRowItem(rIdx) {
        console.log('row index', rIdx);
        this.deleted.push( this.cuentasBanco[rIdx].idCuentaBancaria );
        this.cuentasBanco.splice(rIdx, 1);
    }

  },
};
</script>
