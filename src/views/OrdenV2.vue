<template>
  <div class="row">
    <SideMenu />
    <div class="right-column">
      <TopBar />
      <main class="main-content p-5" role="main">
        <div class="row mb-5">
          <div class="col-lg-8 mb-5">
            <!-- <div class="navegacion">
              <div class="navegacion-mesa">
                <h3><a href="">2</a></h3>
              </div>
            </div> -->
            <div transition-group class="card menu">
              <div class="card-header menu-header">{{OpcionTitulo[OpcionMenu]}}</div>
              <div v-if="OpcionMenu===0" class="card-body menu-content first-menu">
                <div v-bind:title="message" @click="actualizarMenu(1)" id="tacos" class="tacos">
                  <a id="tacos" href>TACOS</a>
                </div>
                <div @click="actualizarMenu(2)" class="burritos">
                  <a id="burritos" href>BURRITOS</a>
                </div>
                <div @click="actualizarMenu(3)" class="bebidas">
                  <a id="bebidas" href>BEBIDAS</a>
                </div>
                <div @click="actualizarMenu(4)" class="otras">
                  <a id="otras" href>OTRAS</a>
                </div>
              </div>
              <!--cierre body  -->
              <!-- SubMenu Tacos -->
              <div v-else-if="OpcionMenu===1" class="card-body menu-content">
                <div
                  :id="position"
                  class="menu-wrapper"
                  v-for="(tacos, position) in Tacos"
                  :key="position"
                >
                  <div class="SubMenu-Content">
                    <a href @click="mostrarAgregar(Tacos,position)">{{tacos.nombre}}</a>
                  </div>

                  <div v-if="tacos.agregar===1" class="agregar">
                    <div class="agregar-cant">Cantidad</div>

                    <!-- <div @mousedown="sumarCantidad(Tacos[position])" class="agregar-add"> -->
                    <div
                      @click="sumarCantidad(Tacos[position])"
                      @mousedown="sumarCantidadPresionado(Tacos[position])"
                      @mouseleave="detenerSumar()"
                      @mouseup="detenerSumar()"
                      @touchstart="sumarCantidadPresionado(Tacos[position])"
                      @touchend="detenerSumar()"
                      @touchcancel="detenerSumar()"
                      class="agregar-add"
                    >
                      <i class="batch-icon batch-icon-add"></i>
                    </div>
                    <div class="agregar-input">
                      <input
                        v-model="Tacos[position].cantidad"
                        v-on:keyup.enter="agregarOrden(Tacos[position])"
                        class="cantidad"
                        type="number"
                        min="1"
                      />
                    </div>
                    <div
                      @click="restarCantidad(Tacos[position])"
                      @mousedown="restarCantidadPresionado(Tacos[position])"
                      @mouseleave="detenerRestar()"
                      @mouseup="detenerRestar()"
                      @touchstart="restarCantidadPresionado(Tacos[position])"
                      @touchend="detenerRestar()"
                      @touchcancel="detenerRestar()"
                      class="agregar-remove"
                    >
                      <i class="batch-icon batch-icon-remove"></i>
                    </div>
                    <div class="agregar-agregar">
                      <a @click="agregarOrden(Tacos[position])" class="btn btn-primary">Agregar</a>
                    </div>
                  </div>
                </div>
              </div>

              <div v-if="OpcionMenu===1" class="card-footer">
                <div class="back">
                  <a href @click="regresar(Tacos)">Regresar</a>
                </div>
              </div>
              <!-- SubMenuBurritos -->
              <div v-else-if="OpcionMenu===2" class="card-body menu-content">
                <div
                  :id="position"
                  class="menu-wrapper"
                  v-for="(burritos, position) in Burritos"
                  :key="position"
                >
                  <div class="SubMenu-Content">
                    <a href @click="mostrarAgregar(Burritos,position)">{{burritos.nombre}}</a>
                  </div>

                  <div v-if="burritos.agregar===1" class="agregar">
                    <div class="agregar-cant">Cantidad</div>

                    <!-- <div @mousedown="sumarCantidad(Tacos[position])" class="agregar-add"> -->
                    <div
                      @click="sumarCantidad(Burritos[position])"
                      @mousedown="sumarCantidadPresionado(Burritos[position])"
                      @mouseleave="detenerSumar()"
                      @mouseup="detenerSumar()"
                      @touchstart="sumarCantidadPresionado(Burritos[position])"
                      @touchend="detenerSumar()"
                      @touchcancel="detenerSumar()"
                      class="agregar-add"
                    >
                      <i class="batch-icon batch-icon-add"></i>
                    </div>
                    <div class="agregar-input">
                      <input
                        v-model="Burritos[position].cantidad"
                        v-on:keyup.enter="agregarOrden(Burritos[position])"
                        class="cantidad"
                        type="number"
                        min="1"
                      />
                    </div>
                    <div
                      @click="restarCantidad(Burritos[position])"
                      @mousedown="restarCantidadPresionado(Burritos[position])"
                      @mouseleave="detenerRestar()"
                      @mouseup="detenerRestar()"
                      @touchstart="restarCantidadPresionado(Burritos[position])"
                      @touchend="detenerRestar()"
                      @touchcancel="detenerRestar()"
                      class="agregar-remove"
                    >
                      <i class="batch-icon batch-icon-remove"></i>
                    </div>
                    <div class="agregar-agregar">
                      <a @click="agregarOrden(Burritos[position])" class="btn btn-primary">Agregar</a>
                    </div>
                  </div>
                </div>
              </div>

              <div v-if="OpcionMenu===2" class="card-footer">
                <div class="back">
                  <a href @click="regresar(Burritos)">Regresar</a>
                </div>
              </div>
              <!-- fin burritos -->
              <!-- SubMenuBebidas -->
              <div v-else-if="OpcionMenu===3" class="card-body menu-content">
                <div
                  :id="position"
                  class="menu-wrapper"
                  v-for="(bebidas, position) in Bebidas"
                  :key="position"
                >
                  <div class="SubMenu-Content">
                    <a href @click="mostrarAgregar(Bebidas,position)">{{bebidas.nombre}}</a>
                  </div>

                  <div v-if="bebidas.agregar===1" class="agregar">
                    <div class="agregar-cant">Cantidad</div>

                    <!-- <div @mousedown="sumarCantidad(Tacos[position])" class="agregar-add"> -->
                    <div
                      @click="sumarCantidad(Bebidas[position])"
                      @mousedown="sumarCantidadPresionado(Bebidas[position])"
                      @mouseleave="detenerSumar()"
                      @mouseup="detenerSumar()"
                      @touchstart="sumarCantidadPresionado(Bebidas[position])"
                      @touchend="detenerSumar()"
                      @touchcancel="detenerSumar()"
                      class="agregar-add"
                    >
                      <i class="batch-icon batch-icon-add"></i>
                    </div>
                    <div class="agregar-input">
                      <input
                        v-model="Bebidas[position].cantidad"
                        v-on:keyup.enter="agregarOrden(Bebidas[position])"
                        class="cantidad"
                        type="number"
                        min="1"
                      />
                    </div>
                    <div
                      @click="restarCantidad(Bebidas[position])"
                      @mousedown="restarCantidadPresionado(Bebidas[position])"
                      @mouseleave="detenerRestar()"
                      @mouseup="detenerRestar()"
                      @touchstart="restarCantidadPresionado(Bebidas[position])"
                      @touchend="detenerRestar()"
                      @touchcancel="detenerRestar()"
                      class="agregar-remove"
                    >
                      <i class="batch-icon batch-icon-remove"></i>
                    </div>
                    <div class="agregar-agregar">
                      <a @click="agregarOrden(Bebidas[position])" class="btn btn-primary">Agregar</a>
                    </div>
                  </div>
                </div>
              </div>

              <div v-if="OpcionMenu===3" class="card-footer">
                <div class="back">
                  <a href @click="regresar(Bebidas)">Regresar</a>
                </div>
              </div>
              <!-- Fin Bebidas -->
              <!-- SubMenuOtras -->
              <!-- Fin Otras -->
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card">
              <div class="card-header orden-header">
                <div class="orden-header-tittle">Orden</div>
                <p>Mesa: {{mesa}}</p>
                <p>Mesero: {{mesero}}</p>
              </div>
              <div class="card-body">
                <div class="table-wrapper">
                  <table class="table">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="orden in pedido" :key="orden.id">
                        <td>{{orden.Cantidad}}</td>
                        <td>{{orden.Descripcion}}</td>
                        <td>$ {{orden.Total}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu.vue";
import TopBar from "@/components/TopBar.vue";
export default {
  name: "Orden2",
  data() {
    return {
      message:"Haz click para abrir un submenu",
      OpcionMenu: 0,
      OpcionTitulo: ["Menu", "Tacos", "Burritos", "Bebidas", "Otras"],
      id: "1",
      mesa: 4,
      mesero: "David",
      pedido: [
        {
          Cantidad: 4,
          Descripcion: "Taco Asada",
          Total: 45
        },
        {
          Cantidad: 8,
          Descripcion: "Taco Pastor",
          Total: 45
        }
      ],
      Tacos: [
        {
          nombre: "Taco Asada",
          agregar: 0,
          cantidad: 1,
          precio: 15
        },
        {
          nombre: "Taco Pastor",
          agregar: 0,
          cantidad: 1,
          precio: 15
        },
        {
          nombre: "Taco Molleja",
          agregar: 0,
          cantidad: 1,
          precio: 16
        }
      ],
      Burritos: [],
      Bebidas: [
        {
          nombre: "Coca Cola",
          agregar: 0,
          cantidad: 1,
          precio: 18
        },
        {
          nombre: "Fanta de Naranja",
          agregar: 0,
          cantidad: 1,
          precio: 15
        },
        {
          nombre: "Fanta de Naranja",
          agregar: 0,
          cantidad: 1,
          precio: 15
        },
        {
          nombre: "Fanta de Naranja",
          agregar: 0,
          cantidad: 1,
          precio: 15
        },
        {
          nombre: "Fanta de Naranja",
          agregar: 0,
          cantidad: 1,
          precio: 15
        },
        {
          nombre: "Fanta de Naranja",
          agregar: 0,
          cantidad: 1,
          precio: 15
        },
        {
          nombre: "Fanta de Naranja",
          agregar: 0,
          cantidad: 1,
          precio: 15
        },
        {
          nombre: "Fanta de Naranja",
          agregar: 0,
          cantidad: 1,
          precio: 15
        },
        {
          nombre: "Fanta de Naranja",
          agregar: 0,
          cantidad: 1,
          precio: 15
        }
      ],
      Otras: [],
      isPressed: false
    };
  },
  mounted() {},
  components: {
    SideMenu,
    TopBar
  },
  methods: {
    actualizarMenu(op) {
      this.OpcionMenu = op;
      event.preventDefault();
    },
    mostrarAgregar(array, position) {
      const MENU_WRAPPER = document.getElementById(position);
      if (array[position].agregar === 0) {
        array[position].agregar = 1;
        MENU_WRAPPER.classList.add("menu-wrapper-agregar");
      } else {
        array[position].agregar = 0;
        MENU_WRAPPER.classList.remove("menu-wrapper-agregar");
      }
      event.preventDefault();
    },
    regresar(array) {
      this.actualizarMenu(0);
      this.quitarAgregar(array);
      event.preventDefault();
    },
    quitarAgregar(array) {
      array.forEach(element => {
        element.agregar = 0;
        element.cantidad = 1;
      });
    },
    sumarCantidad(array) {
      array.cantidad++;
    },
    sumarCantidadPresionado(array) {
      if (!this.isPressed) {
        this.isPressed = setInterval(() => array.cantidad++, 120); //array.cantidad+=1;
      }
    },
    detenerSumar() {
      clearInterval(this.isPressed);
      this.isPressed = false;
    },
    restarCantidad(array) {
      if (!(array.cantidad === 1)) {
        array.cantidad -= 1;
      }
    },
    restarCantidadPresionado(array) {
      if (!(array.cantidad === 1)) {
        if (!this.isPressed) {
          this.isPressed = setInterval(() => (array.cantidad -= 1), 120); //array.cantidad+=1;
        }
      }
    },
    detenerRestar() {
      clearInterval(this.isPressed);
      this.isPressed = false;
    },
    agregarOrden(array) {
      // agrega orden a la tabla
      this.pedido.push({
        Cantidad: array.cantidad,
        Descripcion: array.nombre,
        Total: array.cantidad * array.precio
      });
      // array.agregar = 0;
      array.cantidad = 1;
    }
  }
};
</script>

<style scoped>
.contenedor {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
}
.menu {
  /* width: 50vw; */
  height: auto;
}
.first-menu{
  height: 500px !important;
}
.menu-header {
  text-align: center;
}
.menu-content {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  grid-auto-rows: 1fr;
}
.menu-content div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.bebidas,
.otras {
  border-top: 1px solid lightgrey;
}
.tacos,
.bebidas {
  border-right: 1px solid lightgrey;
}
.tacos:hover,
.burritos:hover,
.bebidas:hover,
.otras:hover {
  background: rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
.card-body div a:hover {
  color: white;
}
.orden {
  width: 25%;
  height: 70vh;
}
.orden-header-tittle {
  text-align: center;
}
.orden-header p {
  margin: 0;
  font-size: 1rem;
}
.back {
  text-align: end;
  /* border: 1px solid lightgray; */
}
.SubMenu-Content {
  font-size: 18px;
}
.menu-wrapper-agregar {
  flex-direction: column !important;
}
.agregar {
  padding-top: 10px;
  margin-top: 15px;
  text-align: initial;
  justify-content: initial;
  align-items: initial;
  height: 100px;
  width: 100px;
  display: grid !important;
  grid-template-columns: 10px 65px 10px;
  grid-template-rows: 25% 25% 25%;
  grid-template-areas:
    "tittle tittle tittle"
    "add in rem"
    "agregar agregar agregar";
  /* position: absolute; */
  border: 1px solid lightgray;
  border-radius: 15px;
}
.agregar-cant {
  grid-area: tittle;
  font-weight: bold;
}
.agregar-add {
  grid-area: add;
}
.agregar-input {
  grid-area: in;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
.agregar-remove {
  grid-area: rem;
}
.agregar-agregar {
  grid-area: agregar;
  padding-top: 10px;
}
.table-wrapper{
  overflow: scroll;
  height: 500px
}
</style>