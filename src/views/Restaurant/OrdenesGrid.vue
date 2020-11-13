<template>
  <div class="row">
    <SideMenu v-bind:slt="10" />
    <div class="right-column">
      <TopBar />
      <main class="main-content p-5" role="main">
        <div class="row">
          <div class="col-md-12">
            <h1>Ordenes</h1>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-header">
              <div class="row">
                <div class="col-lg-10">
                  {{ order.consumo }}
                  <OrderConsumo title="Local" v-bind:order="order" />
                  <p
                    v-show="order.consumo == 'sucursal'"
                    class="task-list-stats"
                  >
                    <span class="task-list-total">Mesas Activas: </span>
                    {{ this.pendientesLocal }}
                  </p>
                  <p
                    v-show="order.consumo == 'domicilio'"
                    class="task-list-stats"
                  >
                    <span class="task-list-total">Entregas pendientes: </span>
                    {{ this.pendientesEntrega }}
                  </p>
                  <p
                    v-show="order.consumo == 'llevar'"
                    class="task-list-stats"
                  >
                    <span class="task-list-total">Para llevar pendientes: </span>
                    {{ this.pendientesLlevar }}
                  </p>
                  <p
                    v-show="order.consumo == 'recoger'"
                    class="task-list-stats"
                  >
                    <span class="task-list-total">Para recoger pendientes: </span>
                    {{ this.pendientesRecoger }}
                  </p>
                </div>
                <div class="col d-flex " style="align-items:center;justify-content:center">
                  <button
                    v-show="order.consumo == 'sucursal'"
                    class="btn btn-secondary agregar"
                    type="button"
                    @click="agregarMesa"
                  >
                    Agregar
                  </button>
                </div>
              </div>
            </div>
            <div v-show="order.consumo == 'sucursal'" class="row">
              <div class="card-body">
                <div class="container">
                  <transition-group name="ordenes" tag="div" class="row">
                    <OrderBoxLocal
                      :key="ordenes.ordenId"
                      v-for="(ordenes, index) in localFaltantes"
                      v-model="localFaltantes[index]"
                    />
                  </transition-group>
                </div>
              </div>
            </div>
            <div v-show="order.consumo == 'domicilio'" class="row">
              <div class="card-body">
                <transition-group name="ordenes" tag="div" class="order-flex">
                  <OrderBoxEntrega
                    :key="index"
                    v-for="(ordenes, index) in entregasFaltantes"
                    v-model="entregasFaltantes[index]"
                  />
                </transition-group>
              </div>
            </div>
            <div v-show="order.consumo == 'llevar'" class="row">
              <div class="card-body">
                <transition-group name="ordenes" tag="div" class="order-flex">
                  <OrderBoxLlevar
                    :key="index"
                    v-for="(ordenes, index) in llevarFaltantes"
                    v-model="llevarFaltantes[index]"
                  />
                </transition-group>
              </div>
            </div>
            <div v-show="order.consumo == 'recoger'" class="row">
              <div class="card-body">
                <transition-group name="ordenes" tag="div" class="order-flex">
                  <OrderBoxRecoger
                    :key="index"
                    v-for="(ordenes, index) in recogerFaltantes"
                    v-model="recogerFaltantes[index]"
                  />
                </transition-group>
              </div>
            </div>
          </div>
          <!-- End Card div-->
          
            <!-- <div class="card" style="margin-top: 45px">
              <div class="card-header">
                <div class="row">
                  <div class="col">
                    Entrega
                    <p class="task-list-stats">
                      <span class="task-list-total">Entregas Pendientes: </span>
                      {{ this.pendientesEntrega }}.
                    </p>
                  </div>
                  <div class="col" style="align-items: center">
                    <button
                      class="btn btn-primary agregar"
                      type="button"
                      @click="agregarEntrega"
                    >
                      Agregar
                    </button>
                  </div>
                </div>
              </div>
            </div> -->
          
        </div>
      </main>
    </div>
  </div>
</template>

<script>
/*imports*/

import SideMenu from "@/components/SideMenu.vue";
import TopBar from "@/components/TopBar.vue";
import OrderConsumo from "@/components/Restaurant/Heris/Order/ConsumoCheck.vue";
import OrderBoxLocal from "@/components/OrderBoxLocal.vue";
import OrderBoxEntrega from "@/components/OrderBoxEntrega.vue";
import OrderBoxLlevar from "@/components/OrderBoxLlevar.vue";
import OrderBoxRecoger from "@/components/OrderBoxRecoger.vue";

import ResOrdenes from "@/modules/restaurant/models/ResOrdenes.js";

export default {
  name: "catalogos",
  mounted() {
    let _this = this;
    ResOrdenes.listAbiertas({}, function (res) {
      console.log(res);
      _this.items = res.data.items;
      _this.loadOrdenesLocal();
      _this.loadOrdenesEntrega();
      _this.loadOrdenesLlevar();
      _this.loadOrdenesRecoger();
    });
  },
  data() {
    return {
      order: {
        consumo: "sucursal",
      },
      items: [],
      ordenesLocal: [],
      ordenesEntrega: [
        {
          id: 3,
          colonia: "Jardines",
          calle: "Blvd. de las Rosas",
          total: 6000,
          atendido: false,
        },
      ],
      ordenesLlevar:[],
      ordenesRecoger:[],
      pendientesLocal: 0,
      pendientesEntrega: 0,
      pendientesLlevar: 0,
      pendientesRecoger: 0,
    };
  },
  components: {
    SideMenu,
    TopBar,
    OrderConsumo,
    OrderBoxLocal,
    OrderBoxEntrega,
    OrderBoxLlevar,
    OrderBoxRecoger,
  },
  computed: {
    localFaltantes() {
      let c = this.ordenesLocal.filter((exp) => !exp.atendido);
      this.pendientesLocal = c.length;
      return c;
    },
    entregasFaltantes() {
      let c = this.ordenesEntrega.filter((exp) => !exp.atendido);
      this.pendientesEntrega = c.length;
      return c;
    },
    llevarFaltantes() {
      let c = this.ordenesLlevar.filter((exp) => !exp.atendido);
      this.pendientesLlevar = c.length;
      return c;
    },
    recogerFaltantes() {
      let c = this.ordenesRecoger.filter((exp) => !exp.atendido);
      this.pendientesRecoger = c.length;
      return c;
    },
  },
  methods: {
    loadOrdenesLocal() {
      let _this = this;
      _this.ordenesLocal = [];
      _this.items.forEach((item) => {
        if (item.consumo==='sucursal') {
          _this.ordenesLocal.push({
            ordenId: item.ordenId,
            mesa: item.mesa,
            total: item.total,
            atendido: false,
          });
        }
      });
    },
    loadOrdenesEntrega() {
      let _this = this;
      _this.ordenesEntrega = [];
      _this.items.forEach((item) => {
        if (item.consumo==='domicilio') {
          _this.ordenesEntrega.push({
            ordenId: item.ordenId,
            mesa: item.mesa,
            total: item.total,
            atendido: false,
            calle:item.calle,
            colonia:item.colonia
          });
        }
      });
    },
    loadOrdenesLlevar() {
      let _this = this;
      _this.ordenesLlevar = [];
      _this.items.forEach((item) => {
        if (item.consumo==='llevar') {
          _this.ordenesLlevar.push({
            ordenId: item.ordenId,
            mesa: item.mesa,
            total: item.total,
            atendido: false,
          });
        }
      });
    },
    loadOrdenesRecoger() {
      let _this = this;
      _this.ordenesRecoger = [];
      _this.items.forEach((item) => {
        if (item.consumo==='recoger') {
          _this.ordenesRecoger.push({
            ordenId: item.ordenId,
            mesa: item.mesa,
            total: item.total,
            atendido: false,
          });
        }
      });
    },
    agregarMesa() {
      //   this.ordenesLocal.push({ mesa: Math.floor(Math.random()*100), total: 2500, atendido: false});
      this.$router.push({ name: "ResHerisOrdenesEdit" });
    },
    agregarEntrega() {
      this.ordenesEntrega.push({
        id: Math.floor(Math.random() * 100),
        colonia: "Centro",
        calle: "20 de Noviembre",
        total: 2500,
        atendido: false,
      });
    },
  },
};
</script>

<style scoped>
.ordenes-move {
  transition: transform 1s;
}

.ordenes-leave-active {
  position: relative;
}

.ordenes-enter-active {
  animation: fade 1s;
}

.ordenes-leave-to {
  opacity: 0;
}

.ordenes-active {
  position: relative;
}

@keyframes fade {
  from {
    opacity: 0%;
  }
  to {
    opacity: 100%;
  }
}

.order-flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 15px;
}

.agregar {
  min-width: 150px;
}
</style>