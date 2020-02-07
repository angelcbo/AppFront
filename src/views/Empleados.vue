<template>
  <div class="row">
    <SideMenu />
    <div class="right-column">
      <TopBar />
      <main class="main-content p-5" role="main">
        <div class="row">
            <div class="col-md-3">
                <div class="card_menu p-4">
                    <a href="/mantenimiento">
                        <div class="row">
                            <div class="col-md-3">
                                <i class="batch-icon batch-icon-settings-alt-2"></i>
                            </div>
                            <div class="col-md-9 text-right p-0 mt-2 pr-1">
                                <p>Mantenimiento</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card_menu p-4">
                    <a href="/folios">
                        <div class="row">
                            <div class="col-md-3">
                                <i class="batch-icon batch-icon-key-alt"></i>
                            </div>
                            <div class="col-md-9 text-right p-0 mt-2 pr-1">
                                <p>Folios de Nómina</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card_menu p-4">
                    <a href="">
                        <div class="row">
                            <div class="col-md-3">
                                <i class="batch-icon batch-icon-tag-alt-2"></i>
                            </div>
                            <div class="col-md-9 text-right p-0 mt-2 pr-1">
                                <p>Métodos Pago x Empleado</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card_menu p-4">
                    <a href="">
                        <div class="row">
                            <div class="col-md-3">
                                <i class="batch-icon batch-icon-credit-card"></i>
                            </div>
                            <div class="col-md-9 text-right p-0 mt-2 pr-1">
                                <p>Tarjetas de Percepciones</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card_menu p-4">
                    <a href="">
                        <div class="row">
                            <div class="col-md-3">
                                <i class="batch-icon batch-icon-rulers"></i>
                            </div>
                            <div class="col-md-9 text-right p-0 mt-2 pr-1">
                                <p>Calculo Automático de S.D.I</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card_menu p-4">
                    <a href="">
                        <div class="row">
                            <div class="col-md-3">
                                <i class="batch-icon batch-icon-compose-alt-3"></i>
                            </div>
                            <div class="col-md-9 text-right p-0 mt-2 pr-1">
                                <p>Reporte de Datos de Empleados</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card_menu p-4">
                    <a href="">
                        <div class="row">
                            <div class="col-md-3">
                                <i class="batch-icon batch-icon-home"></i>
                            </div>
                            <div class="col-md-9 text-right p-0 mt-2 pr-1">
                                <p>Empleados Crédito INFONAVIT</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card_menu p-4">
                    <a href="">
                        <div class="row">
                            <div class="col-md-3">
                                <i class="batch-icon batch-icon-wiggle"></i>
                            </div>
                            <div class="col-md-9 text-right p-0 mt-2 pr-1">
                                <p>Fechas Alta/Baja y Sal. Integ</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card_menu p-4">
                    <a href="">
                        <div class="row">
                            <div class="col-md-3">
                                <i class="batch-icon batch-icon-swap"></i>
                            </div>
                            <div class="col-md-9 text-right p-0 mt-2 pr-1">
                                <p>Percepciones/Deducciones Fijas</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card_menu p-4">
                    <a href="">
                        <div class="row">
                            <div class="col-md-3">
                                <i class="batch-icon batch-icon-transfer"></i>
                            </div>
                            <div class="col-md-9 text-right p-0 mt-2 pr-1">
                                <p>Percepciones/Deducciones Sin Ajuste Retroactivo</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card_menu p-4">
                    <a href="">
                        <div class="row">
                            <div class="col-md-3">
                                <i class="batch-icon batch-icon-reply"></i>
                            </div>
                            <div class="col-md-9 text-right p-0 mt-2 pr-1">
                                <p>I.S.T.P a Compensar</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card_menu p-4">
                    <a href="">
                        <div class="row">
                            <div class="col-md-3">
                                <i class="batch-icon batch-icon-revert"></i>
                            </div>
                            <div class="col-md-9 text-right p-0 mt-2 pr-1">
                                <p>Días Gratificación Premio</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card_menu p-4">
                    <a href="">
                        <div class="row">
                            <div class="col-md-3">
                                <i class="batch-icon batch-icon-star"></i>
                            </div>
                            <div class="col-md-9 text-right p-0 mt-2 pr-1">
                                <p>Casos Especiales</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card_menu p-4">
                    <a href="">
                        <div class="row">
                            <div class="col-md-3">
                                <i class="batch-icon batch-icon-address-book"></i>
                            </div>
                            <div class="col-md-9 text-right p-0 mt-2 pr-1">
                                <p>Reporte CURP's</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card_menu p-4">
                    <a href="">
                        <div class="row">
                            <div class="col-md-3">
                                <i class="batch-icon batch-icon-book-lines"></i>
                            </div>
                            <div class="col-md-9 text-right p-0 mt-2 pr-1">
                                <p>Reporte Fonacot/Infonavit Acumulado</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card_menu p-4">
                    <a href="">
                        <div class="row">
                            <div class="col-md-3">
                                <i class="batch-icon batch-icon-contract-alt"></i>
                            </div>
                            <div class="col-md-9 text-right p-0 mt-2 pr-1">
                                <p>Retención Laboral de Impuestos</p>
                            </div>
                        </div>
                    </a>
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
  name: 'empleados',
  components: {
    SideMenu,
    TopBar,
  },
  methods: {},
};
</script>
