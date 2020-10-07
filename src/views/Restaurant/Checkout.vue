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
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-12">
                <!-- { code -->

                <div class="col-lg-12 pb-5">
                  <h2>Cuenta # {{ orden.folioDiario }}</h2>
                  <!-- <p>
        Add <code>.table-responsive</code> the container holding the <code>.table</code> to make them scroll horizontally on small devices. Resize your window to see it in action.
    </p>
    <p>
        You can take responsiveness to a new level by using breakpoint specific classes. Use <code>.table-responsive{-sm|-md|-lg|-xl}</code>, instead of just <code>.table-responsive</code>, as needed to create responsive tables up to a particular breakpoint. From that breakpoint and up, the table will behave normally and not scroll horizontally.
    </p> -->
                  <div class="table-responsive">
                    <table
                      v-for="(cuenta, cIdx) in cuentas"
                      v-bind:key="cIdx"
                      class="table"
                    >
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Concepto</th>
                          <th>Precio U.</th>
                          <th>Cantidad</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(plato, pIdx) in cuenta" v-bind:key="pIdx">
                          <td>
                            <input
                              v-model="plato.comensal"
                              @keyup="changeComensal(plato)"
                            />
                          </td>
                          <td>{{ plato.nombre }}</td>
                          <td>{{ plato.precio }}</td>
                          <td>{{ plato.cantidad }}</td>
                          <td>
                            {{ calculaPrecio(plato.precio, plato.cantidad) }}
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>{{ aPagar(cIdx) }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div class="col-lg-12 pb-5">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">$</span>
                    </div>
                    <input
                      v-model="aPagarTotal"
                      type="text"
                      class="form-control"
                      aria-label="Amount (to the nearest dollar)"
                    />
                    <div class="input-group-append">
                      <span class="input-group-text">.00</span>
                    </div>
                  </div>
                </div>

                <div class="col-lg-12 pb-5">
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

                <div class="row">
                  <div class="col-lg-12">
                    <h2>Tipo de pago</h2>
                  </div>
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

                <div class="row">
                  <div class="row mb-5">
                    <div class="col-md-12">
                      <button
                        @click="pagar"
                        type="button"
                        class="btn btn-secondary btn-lg waves-effect waves-light"
                      >
                        Pagar
                      </button>
                      <br />
                    </div>
                  </div>
                </div>

                <!-- } code -->
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
import Alert from '@/components/Alert.vue';
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
      title: "Checkout",
      debug: process.env.VUE_APP_DEV,
      orden: ResOrdenes.init(),
      aPagarTotal: 0,
      cuentas: {},
      cantidadEntregada: null,
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
      if (this.cantidadEntregada == null || this.cantidadEntregada == 0) {
        // Alert.methods.showAlertTimeout(this.alertId, "Agregado");
        return;
      }
      console.log("Cuentas");
      console.log(this.cuentas);
      console.log("Orden");
      console.log(this.orden);

      this.orden["tipoPago"] = "efectivo";
      this.orden["cantidadEntregada"] = 100;
      const ordenId = this.ordenId;
      //   ResOrdenes.pagar(this.orden, res => {
      //     this.$router.push({ name: 'ResHerisOrdenesGrid'});

      //         window.open("/restaurant/ticket/"+ordenId, '_blank');
      //   });
      let date = new Date();

      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let hour = date.getHours();
      let minute = date.getMinutes();
      let dateTime
      if (month < 10) {
        dateTime=`${day}-0${month}-${year} ${hour}:${minute}`;
      } else {
        dateTime=`${day}-${month}-${year} ${hour}:${minute}`;
      }
      let group = this.orden.resPlatos.reduce((r, a) => {
          console.log("a", a);
          console.log('r', r);
          r[a.alimento.descripcion] = [r[a.alimento.descripcion] || [], a];
           return r;
          }, {});
          console.log(group)
      let params = {
        orden: {
          id: ordenId.toString(),
          datetime: dateTime.toString(),
          cliente: this.orden.mesa,
        },
        items: ["1 ORDEN ASADA", "1 ORDEN PASTOR", "1 BURRITO ASADA"],
      };

      PrintCuenta.pagar(params, (resPDF) => {
        // this.$router.push({ name: "ResHerisOrdenesGrid" });
        //window.open("/restaurant/ticket/"+ordenId, '_blank');

        let pdfWindow = window.open("");
        pdfWindow.document.write(
          "<iframe width='100%' height='100%' src='data:application/pdf, " +
            escape(resPDF.data) +
            "'></iframe>"
        );
        //window.open("data:application/pdf," + escape(resPDF.data));SIIIIII
      });
    },
  },
};
</script>
