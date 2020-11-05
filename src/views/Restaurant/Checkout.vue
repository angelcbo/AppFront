<template>
  <div class="row">
    <SideMenu />
    <div class="right-column">
      <TopBar />
      <main class="main-content p-5" role="main">
        <div class="row">
          <div class="col-md-12">
            <h1>{{ title }}</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8">

              <div class="card">
              <div class="card-body">
                <div class="row mb-5">
                  <div class="col-lg-12">
                    <div class="row">
                      <div class="col-lg-10">
                    <h2>Cuenta # {{ orden.folioDiario }}</h2>

                      </div>
                    <div class="col-lg-2 d-flex justify-content-end">
                       <div class="col-lg-6" @click="toogleDividirCuenta">
                        <a
                          class="btn btn-primary btn-gradient waves-effect waves-light btn-block btn-lg float-right"
                          title="" data-original-title="Separar Cuenta"
                        >
                          <i class="batch-icon batch-icon-settings"></i>
                        </a>
                      </div>
                        <div class="col-lg-6" @click="unirCuentas">
                        <a
                          class="btn btn-primary btn-gradient waves-effect waves-light btn-block btn-lg float-right"
                          title="" data-original-title="Separar Cuenta"
                        >
                          <i class="batch-icon batch-icon-converge"></i>
                        </a>
                      </div> 

                    </div>
                    </div>
                    <div v-if="dividirCuenta" class="card-table table-responsive">
                      <table
                       
                        v-for="(cuenta, cIdx) in cuentas"
                        v-bind:key="cIdx"
                        class="table table-hover"
                      >
                      <caption id="cap1">Comensal {{cIdx}}</caption>
                        <thead>
                          <tr>
                            <th>Comensal</th>
                            <th>Concepto</th>
                            <th class="text-right">Precio U.</th>
                            <th class="text-center">Cantidad</th>
                            <th class="text-right">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(plato, pIdx) in cuenta" v-bind:key="pIdx">
                            <td>
                              <input
                              v-model="plato.comensal"
                              @keyup="changeComensal(plato)"
                            />
                              <!-- {{ pIdx + 1 }} -->
                            </td>
                            <td>{{ plato.nombre }}</td>
                            <td class="text-right">{{ plato.precio }}</td>
                            <td class="text-center">{{ plato.cantidad }}</td>
                            <td class="text-right">
                              {{ calculaPrecio(plato.precio, plato.cantidad) }}
                            </td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="text-right">Total</td>
                            <td class="table-secondary text-right">
                              <strong>$ {{ aPagar(cIdx) }}</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                     <!-- CUENTA NO DIVIDIDA -->
                    <div v-else class="card-table table-responsive">
                      <table
                        v-for="(cuenta, cIdx) in cuentas"
                        v-bind:key="cIdx"
                        class="table table-hover"
                      >
                      <caption id="cap1">Comensal {{cIdx}}</caption>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Concepto</th>
                            <th class="text-right">Precio U.</th>
                            <th class="text-center">Cantidad</th>
                            <th class="text-right">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(plato, pIdx) in cuenta" v-bind:key="pIdx">
                            <td>
                              <!-- <input
                              v-model="plato.comensal"
                              @keyup="changeComensal(plato)"
                            /> -->
                              {{ pIdx + 1 }}
                            </td>
                            <td>{{ plato.nombre }}</td>
                            <td class="text-right">{{ plato.precio }}</td>
                            <td class="text-center">{{ plato.cantidad }}</td>
                            <td class="text-right">
                              {{ calculaPrecio(plato.precio, plato.cantidad) }}
                            </td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="text-right">Total</td>
                            <td class="table-secondary text-right">
                              <strong>$ {{ aPagar(cIdx) }}</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>  



                  </div>
                </div>
              </div>
              <!-- end card-body -->
            </div>

          </div>
                 
          <div class="col-lg-8 d-none">
            <div class="card">
              <div class="card-body">
                <div class="row mb-5">
                  <div class="col-lg-12">
                    <!-- { code -->

                    <h2>Cuenta # {{ orden.folioDiario }}</h2>
                    <div class="card-table table-responsive">
                      <table
                        v-for="(cuenta, cIdx) in cuentas"
                        v-bind:key="cIdx"
                        class="table table-hover"
                      >
                      <caption id="cap1">Comensal {{cIdx}}</caption>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Concepto</th>
                            <th class="text-right">Precio U.</th>
                            <th class="text-center">Cantidad</th>
                            <th class="text-right">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(plato, pIdx) in cuenta" v-bind:key="pIdx">
                            <td>
                              <!-- <input
                              v-model="plato.comensal"
                              @keyup="changeComensal(plato)"
                            /> -->
                              {{ pIdx + 1 }}
                            </td>
                            <td>{{ plato.nombre }}</td>
                            <td class="text-right">{{ plato.precio }}</td>
                            <td class="text-center">{{ plato.cantidad }}</td>
                            <td class="text-right">
                              {{ calculaPrecio(plato.precio, plato.cantidad) }}
                            </td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="text-right">Total</td>
                            <td class="table-secondary text-right">
                              <strong>$ {{ aPagar(cIdx) }}</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end card-body -->
            </div>
          </div>
          <!--End col-lg-8-->
          <div class="col-lg-4 mb-3">
            <div class="row" style="height: 60%">
              <div class="col-lg-12">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-12">
                        <h2>Resumen</h2>
                      </div>
                    </div>
                    <div class="card-table table-responsive">
                      <table class="table table-hover">
                        <thead>
                          <tr>
                            <!-- <th>#</th> -->
                            <th>Concepto</th>
                            <th class="text-right">Precio U.</th>
                            <th class="text-center">Cantidad</th>
                            <th class="text-right">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="(resumen, pIdx) in pedidoResumido"
                            v-bind:key="pIdx"
                          >
                            <!-- <td> -->
                            <!-- <input
                              v-model="plato.comensal"
                              @keyup="changeComensal(plato)"
                            /> -->

                            <!-- </td> -->
                            <td>{{ pIdx }}</td>
                            <td class="text-right">
                              {{ resumen.precioUnitario }}
                            </td>
                            <td class="text-center">{{ resumen.cantidad }}</td>
                            <td class="text-right">
                              {{ resumen.total }}
                            </td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td class="text-right">Total</td>
                            <td class="table-secondary text-right">
                              <strong>$ {{ aPagarTotal }}</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="row justify-content-center">
                      <div class="col-lg-8 pb-3">
                        <h5>Total</h5>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text">$</span>
                          </div>

                          <input
                            v-model="aPagarTotal"
                            type="text"
                            id="aPagarTotal"
                            class="form-control"
                            aria-label="Amount (to the nearest dollar)"
                          />
                          <div class="input-group-append">
                            <span class="input-group-text">.00</span>
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-8 pb-3">
                        <h5>Recibido</h5>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text">$</span>
                          </div>
                          <input
                            v-model="cantidadEntregada"
                            type="number"
                            class="form-control"
                            aria-label="Amount (to the nearest dollar)"
                          />
                        </div>
                      </div>

                      <div class="col-8 mb-5">
                        <h5>Tipo de pago</h5>

                        <div class="col-lg-12">
                          <div class="form-check form-check-inline">
                            <input
                              v-model="orden.tipoPago"
                              class="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio1"
                              value="efectivo"
                            />
                            <label class="form-check-label" for="inlineRadio1">
                              Efectivo
                            </label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input
                              v-model="orden.tipoPago"
                              class="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio2"
                              value="tarjeta"
                            />
                            <label class="form-check-label" for="inlineRadio2">
                              Tarjeta
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- end row form -->
                    <div class="row">
                      <div class="col-md-12">
                        <alert v-bind:containerid="alertId" />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-12" @click="pagar">
                        <a
                        style="color:#fff!important;"
                          class="btn btn-primary btn-gradient waves-effect waves-light btn-block btn-lg float-right"
                        >
                        <span class="gradient">
                          <i class="batch-icon batch-icon-tag-alt-2"></i>
                          Pagar</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end card-body -->
        </div>
      </main>
    </div>
  </div>
  <!--end row -->
</template>


<script>
import SideMenu from "@/components/SideMenu.vue";
import TopBar from "@/components/TopBar.vue";
import ResOrdenes from "@/modules/restaurant/models/ResOrdenes.js";
import PrintCuenta from "@/modules/printer/models/PrintCuenta.js";
import ResPlatos from "@/modules/restaurant/models/ResPlatos.js";
import ResAlimentos from "@/modules/restaurant/models/ResAlimentos.js";
import AlertModal from "@/components/AlertModal.vue";
import Alert from "@/components/Alert.vue";
// import Printer from "@/modules/printer/Printer.js";
// import Faker from 'faker';

export default {
  name: "ResCheckout",
  props: ["ordenId"],
  mounted() {
    let _this = this;
    console.log("ordenid", this.ordenId);
    ResOrdenes.init(this.ordenId, this.loadOrden);
  },
  data() {
    return {
      title: "Cerrar cuenta",
      debug: process.env.VUE_APP_DEV,
      orden: ResOrdenes.init(),
      aPagarTotal: 0,
      cuentas: {},
      cantidadEntregada: null,
      alertId: "alert-1",
      dividirCuenta: false,

    };
  },
  components: {
    SideMenu,
    TopBar,
    Alert,
  },
  methods: {
    loadOrden(res) {
      const _this = this;
      console.log("resordenes", res);
      _this.orden = res.data.item;
      _this.separarCuentas();
      _this.getOrdenResumida();
    },
    separarCuentas() {
      const t = this;
      t.cuentas = {};
      this.orden.resPlatos.forEach((item, idx) => {
        console.log("item", item);

        let nuItem = {
          idx: idx,
          cantidad: item.cantidad,
          nombre: item.alimento.nombre,
          precio: item.alimento.precio,
          comensal: item.comensal,
        };
        if (t.cuentas[item.comensal]) t.cuentas[item.comensal].push(nuItem);
        else t.cuentas[item.comensal] = [nuItem];
      });
    },
    unirCuentas(){
      // const t = this;
      // t.cuentas = {};
      // this.orden.resPlatos.forEach((item, idx) => {
      
      //   let nuItem = {
      //     idx: idx,
      //     cantidad: item.cantidad,
      //     nombre: item.alimento.nombre,
      //     precio: item.alimento.precio,
      //     comensal: item.comensal,
      //   };
      //   if (t.cuentas[1]) t.cuentas[1].push(nuItem);
      //   else t.cuentas[1] = [nuItem];
        
      // });

      this.orden.resPlatos.forEach((plato) => {
        plato.comensal=1;
      });
      this.separarCuentas();
    },
    calculaPrecio(precio, cantidad) {
      return parseFloat(precio) * parseFloat(cantidad);
    },
    changeComensal(plato) {
      console.log(
        "change plato",
        plato,
        this.orden.resPlatos[plato.idx].comensal
      );
      this.orden.resPlatos[plato.idx].comensal = plato.comensal;
      this.separarCuentas();
    },
    aPagar(cIdx) {

      const t = this;
      let totalComensal = 0;
      let aPagarTotal = 0;
      this.orden.resPlatos.forEach((plato) => {
        aPagarTotal += t.calculaPrecio(plato.alimento.precio, plato.cantidad);
        if (plato.comensal == cIdx)
          totalComensal += t.calculaPrecio(
            plato.alimento.precio,
            plato.cantidad
          );
      });
      this.aPagarTotal = aPagarTotal;
      
      return totalComensal;
    },
    aPagarTotal() {
      const t = this;
      let total = 0;
      this.orden.resPlatos.forEach((plato) => {});
      return total;
    },
    pagar() {
      if (this.cantidadEntregada < this.aPagarTotal) {
        Alert.methods.showAlert(
          this.alertId,
          "Cantidad menor a total! ",
          "alert-danger"
        );
        return;
      }

      if (this.cantidadEntregada == null || this.cantidadEntregada == 0) {
        Alert.methods.showAlert(
          this.alertId,
          "Ingresar dinero recibido! ",
          "alert-danger"
        );
        // Alert.methods.showAlertTimeout(this.alertId, "Agregado");
        return;
      }
      console.log("Cuentas");
      console.log(this.cuentas);
      console.log("Orden");
      console.log(this.orden);

      this.orden["tipoPago"] = "efectivo";


      this.orden["cantidadEntregada"] = this.cantidadEntregada;
      let cambio = this.cantidadEntregada - this.aPagarTotal;
      const ordenId = this.ordenId;

      let date = new Date();

      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let hour = date.getHours();
      let minute = date.getMinutes();
      let dateTime;
      if (month < 10) {
        dateTime = `${day}-0${month}-${year} ${hour}:${minute}`;
      } else {
        dateTime = `${day}-${month}-${year} ${hour}:${minute}`;
      }

      let pedido = this.getDetalleOrden();

      console.log("cuenta");
      console.log(this.cuenta);
      console.log("cuentas");
      console.log(this.cuentas);
      let params = {
        orden: {
          id: ordenId.toString(),
          datetime: dateTime.toString(),
          cliente: this.orden.mesa,
        },
        items: pedido,
        // items: ["1 ORDEN ASADA", "1 ORDEN PASTOR", "1 BURRITO ASADA"],
      };
      let params2 = params;
      params2.aPagarTotal = this.aPagarTotal;
      params2.cantidadEntregada = this.cantidadEntregada;
      params2.cambio = cambio;
      
      // PrintCuenta.pagar(params, (resPDF) => {

      //   let pdfWindow = window.open("");
      //   pdfWindow.document.write(
      //     "<iframe width='100%' height='100%' src='data:application/pdf, " +
      //       escape(resPDF.data) +
      //       "'></iframe>"
      //   );
      //   //window.open("data:application/pdf," + escape(resPDF.data));SI JALA PERO NO SE USA
      // });


      
      ResOrdenes.pagar(this.orden, (res) => {
        // this.$router.push({ name: "ResHerisOrdenesGrid" });
        // window.open("/restaurant/ticket/"+ordenId, '_blank');
        this.$router.push({
          name: "PrintTicket",
          params: { orden: params2, cuentas: this.cuentas },
        });
      });
    },
    getDetalleOrden() {
      let detalleConcepto = [];

      Object.keys(this.cuentas).forEach((current) => {
        this.cuentas[current].map((subCurrent) => {
          let cadena = `   ${
            subCurrent.cantidad
          }   ${subCurrent.nombre.toUpperCase()}   ${subCurrent.precio}`;
          detalleConcepto.push(cadena);
        });
      });
      return detalleConcepto;
    },
    getOrdenResumida() {
      let group = this.orden.resPlatos.reduce((r, a) => {
        //  debugger
        console.log("a", a);
        console.log("r", r);
        r[a.alimento.descripcion] = [...(r[a.alimento.descripcion] || []), a];
        // r[a.alimento.descripcion].cantidad =

        return r;
      }, {});

      console.log("********GROUP*************");
      console.log(group);
      console.log(typeof group);
      // for (let current in group){
      //   let cantidad = current.reduce((total,subCurrent)=>total.cantidad+subCurrent.cantidad)
      // }
      Object.keys(group).forEach((current) => {
        let acum = group[current].reduce((total, subCurrent) => {
          if (typeof total === "number") return total + subCurrent.cantidad;
          else return subCurrent.cantidad;
        }, {});
        group[current].cantidad = acum;
        group[current].precioUnitario = group[current][0].alimento.precio;
        group[current].total =
          group[current][0].alimento.precio * group[current].cantidad;
      });
      console.log("********GROUP22222*************");
      console.log(group);

      // let pedido = Object.keys(group).map((current) => {
      //   return `${group[current].cantidad} ${current.toUpperCase()}`;
      // });
      // console.log(pedido); este es para un ticket resumido

      this.pedidoResumido = group;
    },
    toogleDividirCuenta(){
      
      this.dividirCuenta=!this.dividirCuenta;
    },
  },
};
</script>
<style lang="css" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}


#cap1{
   caption-side: top;
}
</style>