<template>
  <div class="row">
    <SideMenu />
    <div class="right-column">
      <TopBar />
      <main class="main-content p-5" role="main">
        <h2>Ordenes</h2>
        <div class="card">
          <div class="card-body">
            <div class="container-fluid">
              <div class="row mb-5">
                <div class="col">
                  <h4>Local</h4>
                  <button type="button" class="btn btn-primary waves-effect waves-light">Nueva</button>
                </div>
              </div>
              <div class="flex">
                <div class="box col-md-3 .offset-md-3">
                  <h4>Mesa</h4>
                  <h5>$100</h5>
                </div>
                <div class="box col-md-3 .offset-md-3">
                  <h4>Mesa</h4>
                  <h5>$100</h5>
                </div>
                <div class="box col-md-3 .offset-md-3">
                  <h4>Mesa</h4>
                  <h5>$100</h5>
                </div>
                <div class="box col-md-3 .offset-md-3">
                  <h4>Mesa</h4>
                  <h5>$100</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card card2">
          <div class="card-body">
            <div class="container-fluid">
              <div class="row mb-5">
                <div class="col">
                  <h4>Entrega</h4>
                  <button type="button" class="btn btn-primary waves-effect waves-light">Nueva</button>
                </div>
              </div>
              <div class="flex">
                <div class="box col-md-3 .offset-md-3">
                  <h4 style="margin-bottom: 0">
                    Colonia:Centro
                    <br />Calle:Aquiles Serdan
                  </h4>

                  <h5>$100</h5>
                </div>
                <div class="col-md-3 .offset-md-3 box">
                  <h4>
                    Colonia:Centro
                    <br />Calle:Aquiles Serdan
                  </h4>
                  <h5>$100</h5>
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
import SideMenu from '@/components/SideMenu.vue';
import TopBar from '@/components/TopBar.vue';
import NomEmpleadoM from '@/modules/nomina/models/NomEmpleadoModel.js';

export default {
  name: 'Restaurant_Orden',
  components: {
    SideMenu,
    TopBar,
  },
  methods: {},
};
</script>
