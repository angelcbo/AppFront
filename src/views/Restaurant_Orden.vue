<template>
  <div class="row">
    <SideMenu />
    <div class="right-column">
      <TopBar />
      <main class="main-content p-5" role="main">
        <div class="card">
          <div class="card-body">
            <div class="col-lg-12">
              <div class="titulos-subrayados">
                <h2>
                  Orden
                  <code>#</code>
                  de Mesa
                </h2>
              </div>
              <p>Ordenes actuales de todas las mesas.</p>
              <table class="table table-striped">
                <thead class="menu table-bordered" thead-dark>
                  <tr>
                    <th></th>
                    <th>
                      <div class="tacos">
                        <code>Tacos</code>
                      </div>
                      <div class="tipo">
                        <div class="tipo-asada">Asada</div>
                        <div class="tipo-Pastor">Pastor</div>
                        <div class="tipo-Molleja">Molleja</div>
                      </div>
                    </th>
                    <th>
                      <div class="burritos">
                        <code>Burritos</code>
                      </div>
                      <div class="tipo">
                        <div class="tipo-asada">Asada</div>
                        <div class="tipo-Pastor">Pastor</div>
                        <div class="tipo-Molleja">Molleja</div>
                      </div>
                    </th>
                    <th>Bebida</th>
                    <th>Otra</th>
                  </tr>
                </thead>
                <tbody>
                  <tr :key="i" v-for="(item,i) in ordenes">
                    <td>{{i+1}}</td>
                    <td>
                      <!-- <div class="tipo"> -->

                      <div class="container-form">
                        <div class="form-group">
                          <input type="text" class="form-control" id="inTA" v-model="item.TAsada" />
                        </div>
                        <div class="form-group">
                          <input type="text" class="form-control" id="inTA" v-model="item.TPastor" />
                        </div>
                        <div class="form-group">
                          <input type="text" class="form-control" id="inTA" v-model="item.TMolleja" />
                        </div>
                      </div>
                      <!-- <div class="tipo-asada">{{item.TAsada}}</div>
                        <div class="tipo-Pastor">{{item.TPastor}}</div>
                      <div class="tipo-Molleja">{{item.TMolleja}}</div>-->
                      <!-- </div> -->
                    </td>
                    <td>
                      <!-- <div class="tipo">
                        <div class="tipo-asada">{{item.BAsada}}</div>
                        <div class="tipo-Pastor">{{item.BMolleja}}</div>
                        <div class="tipo-Molleja">{{item.BMolleja}}</div>
                      </div>-->
                      <div class="container-form">
                        <div class="form-group">
                          <input type="text" class="form-control" id="inTA" v-model="item.BAsada" />
                        </div>
                        <div class="form-group">
                          <input type="text" class="form-control" id="inTA" v-model="item.BPastor" />
                        </div>
                        <div class="form-group">
                          <input type="text" class="form-control" id="inTA" v-model="item.BMolleja" />
                        </div>
                      </div>
                    </td>

                    <td>{{item.Bebida}}</td>
                    <td>
                      <!-- Aqui poner comboBoxOtra -->
                      {{item.Otra}}
                    </td>
                  </tr>

                  <!-- <tr>
                    <td>
                      <button class="btn btn-primary" @click="agregarOrden()">
                        <i class="fa fa-plus"></i>
                      </button>
                    </td>
                    <td>
                      <div class="container-form">
                        <div class="form-group">
                          <input type="text" class="form-control" id="inTA" placeholder="XX" />
                        </div>
                        <div class="form-group">
                          <input type="text" class="form-control" id="inTP" placeholder="XX" />
                        </div>
                        <div class="form-group">
                          <input type="text" class="form-control" id="inTM" placeholder="XX" />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="container-form">
                        <div class="form-group">
                          <input type="text" class="form-control" id="inBA" placeholder="XX" />
                        </div>
                        <div class="form-group">
                          <input type="text" class="form-control" id="inBP" placeholder="XX" />
                        </div>
                        <div class="form-group">
                          <input type="text" class="form-control" id="inBM" placeholder="XX" />
                        </div>
                      </div>
                    </td>
                    <td>
                      <select class="form-controlc" id="inBeb">
                        <option>Refresco</option>
                        <option>Coca-Cola</option>
                        <option>Fanta</option>
                        <option>Manzanita</option>
                        <option>Modelo</option>
                      </select>
                    </td>
                    <td>

                      <select  class="form-controlc" id="inOtro">
                        <option >otros</option>
                        <option :key="i" v-for="(item,i) in otros">{{item.nombre}}</option>


                      </select>
                    </td>
                  </tr>-->
                  <tr>
                    <td>
                      <button class="btn btn-primary" @click="agregarOrden2()">
                        <i class="fa fa-plus"></i>
                      </button>
                    </td>
                    <td>
                      <div class="container-form">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            id="inTA"
                            placeholder="XX"
                            v-model="TAsada"
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            id="inTP"
                            placeholder="XX"
                            v-model="TPastor"
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            id="inTM"
                            placeholder="XX"
                            v-model="TMolleja"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="container-form">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            id="inBA"
                            placeholder="XX"
                            v-model="BAsada"
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            id="inBP"
                            placeholder="XX"
                            v-model="BPastor"
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            id="inBM"
                            placeholder="XX"
                            v-model="BMolleja"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <select  v-model="Bebidas" class="form-controlc" id="inBeb">
                        <option disabled value="">Bebidas</option>
                        <option>Coca-Cola</option>
                        <option>Fanta</option>
                        <option>Manzanita</option>
                        <option>Modelo</option>
                      </select>
                    </td>
                    <td>
                      <select v-model="Otras" class="form-controlc" id="inOtro">
                        <option disabled value =""> otros</option>
                        <option :key="i" v-for="(item,i) in otros">{{item.nombre}}</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
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
import OrdenesAlimentos from '@/modules/restaurant/models/OrdenesAlimentos.js';

export default {
  data() {
    return {
      ordenes: [

      ],
      otros: [

      ],
      TAsada: '',
      TPastor: '',
      TMolleja: '',
      BAsada: '',
      BPastor: '',
      BMolleja: '',
      Bebidas: '',
      Otras: '',


    };
  },
  mounted() {
    console.log('Entraaa aquí!!!!');
    const _this = this;
    console.log('mounted');
    OrdenesAlimentos.loadAll()
      .then((response) => {
        console.log(response);
        _this.otros = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  name: 'Restaurant_Orden',
  components: {
    SideMenu,
    TopBar,
  },
  methods: {
    agregarOrden() {
      if (this.validarOpcion()) {
        const TA = document.getElementById('inTA').value;
        const TP = document.getElementById('inTP').value;
        const TM = document.getElementById('inTM').value;

        const BA = document.getElementById('inBA').value;
        const BP = document.getElementById('inBP').value;
        const BM = document.getElementById('inBM').value;
        const beb = document.getElementById('inBeb').value;
        const otra = document.getElementById('inOtro').value;
        this.ordenes.push({
          TAsada: TA,
          TPastor: TP,
          TMolleja: TM,
          BAsada: BA,
          BPastor: BP,
          BMolleja: BM,
          Bebida: beb,
          Otra: otra,
        });

        document.getElementById('inTA').value = '';
        document.getElementById('inTP').value = '';
        document.getElementById('inTM').value = '';

        document.getElementById('inBA').value = '';
        document.getElementById('inBP').value = '';
        document.getElementById('inBM').value = '';
        document.getElementById('inBeb').value;
        document.getElementById('inOtro').value;
      }
    },
    agregarOrden2() {
      if (this.validarOpcion()) {
        this.enviarOrden();
        this.ordenes.push({
          TAsada: this.TAsada,
          TPastor: this.TPastor,
          TMolleja: this.TMolleja,
          BAsada: this.BAsada,
          BPastor: this.BPastor,
          BMolleja: this.BMolleja,
          Bebida: this.Bebidas,
          Otra: this.Otras,


        });


        this.TAsada = '';
        this.TPastor = '';
        this.TMolleja = '';
        this.BAsada = '';
        this.BPastor = '';
        this.BMolleja = '';
        this.Bebidas = '';
        this.Otras = '';
      }
    },
    validarOpcion() {
      console.log('hhhh');

      const bebida = document.getElementById('inBeb').value;
      console.log(bebida);
      const otra = document.getElementById('inOtro').value;
      console.log(otra);


      if (bebida.localeCompare('') === 0) {
        if (otra.localeCompare('') === 0) {
          alert('Elija una bebida y un platillo valido');
        } else {
          alert('Elija una bebida valida');
        }
        return false;
      }

      if (otra.localeCompare('otros') == 0) {
        alert('Elija un platillo valido');
        return false;
      }
      return true;
    },
    enviarOrden() {
      const params = {
        Mesa: '55',
        Status: 'Activo',
        ResAlimentoOrdenes: [
          {
            AlimentoId: 1,
            Cantidad: 10,
            Comensal: 1,
          },
          {
            AlimentoId: 2,
            Cantidad: 3,
            Comensal: 1,
          }, {
            AlimentoId: 3,
            Cantidad: 3,
            Comensal: 1,
          }, {
            AlimentoId: 4,
            Cantidad: 5,
            Comensal: 1,
          },

        ],
      };
      console.log('params');
      console.log(params);
      //    {
      // "Mesa":"150",
      // "Status":"Activo",
      // "ResAlimentoOrdenes":[
      //   {"AlimentoId":1,
      //   "Cantidad":this.TTacos,
      //   "Comensal":2
      //   },
      //   {"AlimentoId":2,
      //   "Cantiddad":this.TPastor,
      //   "Comensal":2
      //   },
      //   {"AlimentoId":3,
      //   "Cantidad":this.TMolleja,
      //   "Comensal":2
      //   },
      // {"AlimentoId":4,
      // "Cantidad":this.BAsada,
      // "Comensal":2
      // },
      // {"AlimentoId":5,
      // "Cantidad":this.BPastor,
      // "Comensal":2
      // },
      // {"AlimentoId":6,
      // "Cantidad":this.BMolleja,
      // "Comensal":2
      // }
      // ]

      // };


      OrdenesAlimentos.save(params).then((response) => {
        console.log(response);
      })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>>

{
  "Mesa":"1",
  "Status":"Activo",
  "ResAlimentoOrdenes":[
    {"AlimentoId":1,
    "Cantidad":10,
    "Comensal":1},
    {
      "AlimentoId":2,
    "Cantidad":3,
    "Comensal":1
    },
    "AlimentoId":3,
    "Cantidad":3,
    "Comensal":1

  ]
}
