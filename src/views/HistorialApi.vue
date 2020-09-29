<template >
  <div class="row" @click="toogles()">
    <SideMenu />
    <div class="right-column">
      <TopBar />
      <main class="main-content p-5" role="main">
        <div class="row">
          <div class="titulo">
            <h1>Historial Api</h1>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <div class="row row-header">
              <div id="wrapper" class="form-wrapper">
                <div class="form-wrapper2">
                  <i
                    id="i-left"
                    class="batch-icon batch-icon-search toogle-buscar"
                    @click="expandirBuscar()"
                  ></i>
                  <input
                    id="searcher"
                    class="buscar toogle-buscar"
                    type="text"
                    placeholder="Buscar"
                    @click="expandirBuscar()"
                  />
                  <i id="i-right" class="hide batch-icon batch-icon-search toogle-buscar"></i>
                </div>
              </div>

              <form
                v-for="check in checkboxInfo"
                :key="check.id"
                class="form-filtro"
                @click="toogles()"
              >
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" :id="check.id" value="option1" />
                  <label class="form-check-label" :for="check.id">{{check.text}}</label>
                </div>
              </form>

              <div class="col offset-md-4 col-filtro" @click="toggleExpandir()">
                <div class="Filtro-container" @click="showOpciones()">
                  Filtrar
                  <i class="fa fa-angle-down"></i>
                  <div id="Opciones" class="Filtrar-Opciones hide">
                    <ul>
                      <li>Ascendente</li>
                      <li>Descendente</li>
                    </ul>
                  </div>
                </div>
                <!-- <div class="dropdown">
                  <a
                    class="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >Dropdown link</a>

                  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
          <div class="card-body">
            <table class="table" @click="toggleExpandir()">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Nombre de Usuario</th>
                  <th scope="col">Direccion del Request</th>
                  <th scope="col">Tipo de Request</th>
                  <th scope="col">Fecha</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="request in requests" :key="request.id">
                  <td>{{request.userId}}</td>
                  <td>{{request.requestPath}}</td>
                  <td>{{request.requestMethod}}</td>
                  <td>{{request.created}}</td>
                  <!-- <td>
                    <i class="fa fa-edit"></i>
                    <i class="fa fa-trash"></i>
                  </td>-->
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>


<script>
import SideMenu from '@/components/SideMenu.vue';
import TopBar from '@/components/TopBar.vue';
import ModelHistorialApi from '@/modules/core/HistorialApi.js';

export default {
  name: 'HistorialApi',
  data() {
    return {
      requests: [],
      checkboxInfo: [
        {
          id: 'username',
          text: 'Nombre de usuario',
        },
        {
          id: 'path',
          text: 'Direccion',
        },
        {
          id: 'type',
          text: 'Tipo',
        },
        {
          id: 'date',
          text: 'Fecha',
        },
      ],
      isFiltrar: false,
    };
  },
  mounted() {
    const _this = this;
    ModelHistorialApi.loadAll()
      .then((response) => {
        _this.requests = response.data;
        // _this.requests.userId = response.date.userId;
        // _this.requests.requestPath = response.data.requestPath;
        // _this.requests.requestMethod = response.data.requestMethod;
        // _this.requests.fecha = response.data.created;
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
    expandirBuscar() {
      const Icon_Left = document.getElementById('i-left');
      const Icon_Right = document.getElementById('i-right');
      const DivWrapper = document.getElementById('wrapper');
      const Searcher = document.getElementById('searcher');
      Icon_Left.classList.add('hide');
      Icon_Right.classList.remove('hide');
      DivWrapper.classList.add('expand');
      Searcher.select();
    },
    toggleExpandir() {
      const DivWrapper = document.getElementById('wrapper');
      const Icon_Left = document.getElementById('i-left');
      const Icon_Right = document.getElementById('i-right');
      if (DivWrapper.classList.contains('expand')) {
        DivWrapper.classList.remove('expand');
        Icon_Left.classList.remove('hide');
        Icon_Right.classList.add('hide');
      }
    },
    showOpciones() {
      const opcionesFiltro = document.getElementById('Opciones');
      if (this.isFiltroDesplayed(opcionesFiltro)) {
        opcionesFiltro.classList.add('hide');
      } else {
        opcionesFiltro.classList.remove('hide');
      }
    },
    isFiltroDesplayed(opcionesFiltro) {
      if (opcionesFiltro.classList.contains('hide')) {
        return false;
      }
      return true;
    },
    toogleExpandirFiltro() {
      const opcionesFiltro = document.getElementById('Opciones');
      if (this.isFiltroDesplayed) {
        opcionesFiltro.classList.add('hide');
      }
    },
    toogles() {
      const { target } = event;

      if (!target.classList.contains('toogle-buscar')) {
        this.toggleExpandir();
      }
      if (!target.classList.contains('Filtro-container')) {
        this.toogleExpandirFiltro();
      }
    },
  },
};
</script>

<style scoped>
.form-wrapper {
  background: black;
}
.form-wrapper2 {
  background: rgba(255, 255, 255, 0.7);
}
.form-wrapper {
  width: 250px;
}
.buscar {
  border: none;
  box-shadow: none;
  background: none;
  padding: 5px;
  /* width:150px; */
}
.hide {
  display: none;
}
.expand {
  width: 350px;
}
.form-filtro {
  margin-left: 2.5rem;
}
.row-header {
  margin: 0;
}
.col-filtro {
  justify-content: flex-end;
}
.Filtro-container {
  position: relative;
}
.Filtro-container:hover {
  cursor: pointer;
  background: lightgray;
}
.Filtrar-Opciones {
  padding: 0;
  width: 150px;
  /* background-color: rgba(0, 0, 0, .1); */
  background-color: white;
  border: 1px solid lightgray;
  font-size: 1.2rem;
  font-weight: none;
  text-transform: none;
  position: absolute;
  /* z-index: 10; */
  right: 0;
}
.Filtrar-Opciones ul {
  padding: 0;
  list-style-type: none;
}

.Filtrar-Opciones ul li:hover {
  cursor: pointer;
  background-color: lightgray;
}
</style>
