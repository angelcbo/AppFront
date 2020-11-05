<template>
  <div class="row">
    <div @click="selectText" id="Ticket">
      <div class="row rowTicket">
        <div class="col ticket">
          <div class="row">
            <div class="col-12">
              <!--    
              <img :src="logo" height="100%" width="100%" :alt="title" style="margin: auto" />
            
             <img :src="logo" :alt="title" style="margin:auto; color:black;"> -->
              <!-- </div>
        </div> -->
              <div
                class="d-flex justify-content-center pic"
                style="margin-top: 20px; margin-bottom: 5px"
              >
                <img :src="logo" width="99" alt="Cerrar cuenta" />
              </div>
              <!-- <img :src="logo" :alt="title" style="margin:auto; color:black;"> -->
            </div>
          </div>
          <div class="row">
            <!-- <div class="col-12 d-flex justify-content-center">
            <h1>TACOS HERIS</h1>
          </div> -->
            <div class="col-12 d-flex justify-content-center">
              <h2>JULIETA ESTEFANIA ARRIETA CASTAÑEDA</h2>
            </div>
            <div class="col-12 d-flex justify-content-center">
              <h3>RFC: AICJ920927E11</h3>
            </div>
            <div class="col-12 d-flex justify-content-center">
              <h3>
                ALBERTO TERRONES BENITEZ NUM 406 SUR ZONA CENTRO DURANGO DURANGO
              </h3>
            </div>
            <div class="col-12 d-flex justify-content-center">
              <h3>TICKET CONSUMO</h3>
            </div>
            <div class="col-12 d-flex justify-content-center">
              <h3>ORDEN:{{ orden.orden.id }}</h3>
            </div>
            <div class="col-12 d-flex justify-content-center">
              <h3>{{ orden.orden.datetime }}</h3>
            </div>
          </div>

          <!-- <table
            v-for="(cuenta, cIdx) in cuentas"
            v-bind:key="cIdx"
            class="detalle mb-5"
          >
            <thead>
              <tr>
                <th style="font-weight: unset !important" class="text-center">
                  Cantidad
                </th>
                <th style="font-weight: unset !important" class="text-center">
                  Concepto
                </th>
                
                <th style="font-weight: unset !important" class="text-right">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(plato, pIdx) in cuenta" v-bind:key="pIdx">
                <td class="text-center">{{ plato.cantidad }}</td>
                <td>{{ plato.nombre }}</td>

                <td class="text-right">
                  {{ calculaPrecio(plato.precio, plato.cantidad) }}.00
                </td>
              </tr>
              <tr>
                <td></td>
                <td class="text-right">Total</td>
                <td class="text-right">
                  <strong> ${{ orden.aPagarTotal }}.00</strong>
                </td>
              </tr>
              <tr>
                <td></td>
                <td class="text-right">Recibido</td>
                <td class="text-right">
                  <strong> ${{ orden.cantidadEntregada }}.00</strong>
                </td>
              </tr>
              <tr>
                <td></td>
                <td class="text-right">Cambio</td>
                <td class="text-right">
                  <strong> ${{ orden.cambio }}.00</strong>
                </td>
              </tr>
            </tbody>
          </table> -->
          <table class="detalle mb-5">
            <thead>
              <tr>
                <th style="font-weight: unset !important" class="text-center">
                  Cantidad
                </th>
                <th style="font-weight: unset !important" class="text-center">
                  Concepto
                </th>

                <th style="font-weight: unset !important" class="text-right">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(plato, pIdx) in cuentas2" v-bind:key="pIdx">
                <td class="text-center">{{ plato.cantidad }}</td>
                <td>{{ plato.nombre }}</td>

                <td class="text-right">
                  {{ calculaPrecio(plato.precio, plato.cantidad) }}.00
                </td>
              </tr>
              <tr>
                <td></td>
                <td class="text-right">Total</td>
                <td class="text-right">
                  <strong> ${{ orden.aPagarTotal }}.00</strong>
                </td>
              </tr>
              <tr>
                <td></td>
                <td class="text-right">Recibido</td>
                <td class="text-right">
                  <strong> ${{ orden.cantidadEntregada }}.00</strong>
                </td>
              </tr>
              <tr>
                <td></td>
                <td class="text-right">Cambio</td>
                <td class="text-right">
                  <strong> ${{ orden.cambio }}.00</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- <span class="mb-3"></span> -->
        </div>
      </div>
    </div>
    <div id="NoTicket" class="col ml-5">
      <button
        @click="home"
        type="button"
        class="btn btn-secondary btn-lg waves-effect waves-light"
      >
        Inicio
      </button>
    </div>
  </div>
</template>

<script>
import Alert from "@/components/Alert.vue";
import PrintCuenta from "@/modules/printer/models/PrintCuenta.js";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default {
  name: "PrintTicket",

  props: ["orden", "cuentas"],
  mounted() {
    let _this = this;
    // console.log("orden", this.orden);
    // this.cuentas = cuentas;
    console.log("cuentas", this.cuentas);
    // ResOrdenes.init(this.ordenId, this.loadOrden);
    this.unirCuentas();
    setTimeout(()=>{
      window.print()
    },500);
    
    // this.home();
  },
  data() {
    return {
      title: "Cerrar cuenta",
      logo: "/img/LogoB.svg",
      cuentas2: [],
    };
  },
  components: {
    // SideMenu,
    // TopBar,
    Alert,
  },
  methods: {
    unirCuentas() {
      const t = this;
      t.cuentas2 = [];
      Object.keys(this.cuentas).forEach((current) => {
        this.cuentas[current].map((subCurrent) => {
          t.cuentas2.push(subCurrent);
        });
      });
      console.log("cuentas222");
      console.log(t.cuentas2);
    },
    printSection() {
      this.$htmlToPaper("printSection");
    },
    calculaPrecio(precio, cantidad) {
      return parseFloat(precio) * parseFloat(cantidad);
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
    home() {
      this.$router.push({ name: "ResHerisOrdenesGrid" });
    },
    print() {
      this.selectText();
      let selection = window.getSelection();
      console.log(selection.toString());

      setTimeout(function () {
        window.print();
      }, 2000);
    },
    selectText() {
      let id = "Ticket";
      var sel, range;
      var el = document.getElementById(id); //get element id
      if (window.getSelection && document.createRange) {
        //Browser compatibility
        sel = window.getSelection();
        if (sel.toString() == "") {
          //no text selection
          window.setTimeout(function () {
            range = document.createRange(); //range object
            range.selectNodeContents(el); //sets Range
            sel.removeAllRanges(); //remove all ranges from selection
            sel.addRange(range); //add Range to a Selection.
          }, 1);
        }
      } else if (document.selection) {
        //older ie
        sel = document.selection.createRange();
        if (sel.text == "") {
          //no text selection
          range = document.body.createTextRange(); //Creates TextRange object
          range.moveToElementText(el); //sets Range
          range.select(); //make selection.
        }
      }
    },
    guardar() {
      // var ePosDev = new epson.ePOSDevice();
      // console.log(ePosDev);
      // this.$htmlToPaper('printMe');

      // html2canvas(document.body).then(function (canvas) {
      //   var imgData = canvas.toDataURL("image/jpeg", 1.0);
      //   var pdf = new jsPDF("p", "mm", [400, 480]);
      //   pdf.addImage(imgData, "JPEG", 0, 0, 400, 480);
      //   pdf.save("screen-3.pdf");
      // });

      // var pdf = new jsPDF("p", "mm", "a4");
      // pdf.html(document.getElementById("Ticket"), {
      //   callback: function (pdf) {
      //     pdf.save("a4.pdf");
      //   },
      // });

      // const doc = new jsPDF();
      // const contentHtml = this.$refs.content.innerHTML;
      // doc.fromHTML(contentHtml, 15, 15, {
      //   width: 170,
      // });
      // doc.save("sample.pdf");

      // ***************************************************************************************
      let prtHtml = document.querySelector("#Ticket").innerHTML;
      let stylesHtml = "";
      for (const node of [
        ...document.querySelectorAll('link[rel="stylesheet"], style'),
      ]) {
        stylesHtml += node.outerHTML;
      }

      const WinPrint = window.open(
        "",
        "",
        "left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0"
      );

      WinPrint.document.write(`<!DOCTYPE html>
         <html>
         <head>
            <link rel="stylesheet" href="http://localhost:8080/css/boostrap.min.css/">
            <link rel="stylesheet" href="http://localhost:8080/css/hamburguesa.css/">
            <link rel="stylesheet" href="http://localhost:8080/css/style.css/">
            <link rel="stylesheet" href="http://localhost:8080/css/my_style.css/">
        <style>
        * {
            background: white !important;
            color: black !important;
          }
        </style>
        </head>
        
        <body>
        ${prtHtml}
        </body>
        </html>`);

      WinPrint.document.close();
      WinPrint.focus();
      // setTimeout(function(){
      // WinPrint.print();
      // WinPrint.close(); }, 2000);

      // WinPrint.print();
      // WinPrint.close();
      let bodyFormData = new FormData();
      bodyFormData.append("html", WinPrint);

      let params = {
        html: bodyFormData,
      };
      console.log("BodyFormData");
      console.log(bodyFormData);
      PrintCuenta.pagarV2(bodyFormData, (resPDF) => {
        let pdfWindow = window.open("");
        pdfWindow.document.write(
          "<iframe width='100%' height='100%' src='data:application/pdf, " +
            escape(resPDF.data) +
            "'></iframe>"
        );
      });
    },
  },
};
</script>

<style scoped>
* {
  background: white !important;
  color: black !important;
  font-weight: bold;
}
.rowTicket {
  padding-left: 10px;
}
/* .ticket {
  width: 80mm;
  border: 1px solid black;
  padding-left: 15px;
  margin-left: 16px;
} */

h1,
h2,
h3 {
  margin: 0;
}

h1 {
  font-size: 20px;
  font-family: "Times New Roman", Times, serif;
}
h2,
h3,
h4,
.detalle,
table,
th,
td {
  font-size: 12px !important;
  font-family: "Courier New", Courier, monospace;
  text-transform: uppercase;
}
.detalle {
  /* padding: 0!important; */
  margin: 0 auto;
}

@media print {
  * {
    background: white !important;
    color: black !important;
    font-weight: bold;
    /* font-size: 14px; */
  }

  #NoTicket {
    display: none;
  }
  #Ticket {
    background-color: white;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 18px;
    font-size: 22px;
    line-height: 18px;
  }
  .pic
  {
    margin-top: 20px; 
    margin-bottom: 5px;
  }
  .pic img {
    width: 35%;
  }
  .rowTicket {
    /* padding-left: 10px; */
    padding: 0;
    /* height: 100%; */
  }
  .ticket {
    /* width: 80mm; */
    /* border: 1px solid black; */
    /* border:  none; */
    /* padding-left: 15px;
    margin-left: 16px; */
  }

  h1,
  h2,
  h3 {
    margin: 0;
  }

  h1 {
    font-size: 20px;
    font-family: "Times New Roman", Times, serif;
  }
  h2,
  h3,
  h4,
  .detalle,
  table,
  th,
  td {
    font-size: 18px !important;
    font-family: "Courier New", Courier, monospace;
    text-transform: uppercase;
    font-weight: bold!important;
  }
  .detalle {
    /* padding: 0!important; */
    margin: 0 auto;
  }
}
</style>