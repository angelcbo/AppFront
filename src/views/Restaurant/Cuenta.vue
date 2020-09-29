<template>
    <div class="row">
        <SideMenu v-bind:slt="6"/>
        <div class="right-column">
            <TopBar />
            <main class="main-content p-5" role="main">
		        <div class="row">
                    <div class="col-md-12">
                        <h1>Cuenta #{{ orderId }}</h1>
                    </div>
                </div>
                <div class="col">
                    <div class = "col-lg-12">
                        <div class="card">
                            <div class="card-header">
                                Pagar la Cuenta
                                <p class="task-list-stats">
                                    <span class="task-list-total">Total a pagar:  </span> pesos.
                                </p>
                            </div>
                            <div class="card-body" style="margin: 0 15%"> 
                                <div class="row">                             
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col" width="15%">Persona</th>
                                                <th scope="col" width="18%">3</th>
                                                <th scope="col" width="18%">2</th>
                                                <th scope="col" width="18%">1</th>
                                                <th scope="col" class="text-right" width="31%">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(persona, index) in personas" :key="index"> 
                                                <th scope="row">{{index+1}}</th>
                                                <td>{{persona.totalBurritos}}</td>
                                                <td>{{persona.totalTacos}}</td>
                                                <td>{{persona.totalBebidas}}</td>
                                                <td class="text-right">${{persona.totalTotal}}</td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <td colspan="4" class="text-right"><strong>SubTotal</strong></td>
                                                <td class="table-secondary text-right"><strong>$1500</strong></td>
                                            </tr>
                                            <tr>
                                                <td colspan="4" class="text-right"><strong>Propina</strong></td>
                                                <td class="table-secondary text-right"><strong>$500</strong></td>
                                            </tr>
                                            <tr>
                                                <td colspan="4" class="text-right"><strong>Iva</strong></td>
                                                <td class="table-secondary text-right"><strong>16%</strong></td>
                                            </tr>
                                            <tr>
                                                <td colspan="4" class="text-right"><strong>Total</strong></td>
                                                <td class="table-secondary text-right"><strong>${{total}}</strong></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="col" style="padding: 0">
                                        <div class="row">
                                            <div class="col grid-cont">
                                                <div class="align-center">
                                                    <div class="custom-control custom-radio">
                                                        <input type="radio" class="custom-control-input" id="customControlValidation2a" name="radio-stacked">
                                                        <label class="custom-control-label" for="customControlValidation2a">Efectivo</label>
                                                    </div>
                                                </div>
                                                <div class="align-center">
                                                    <div class="custom-control custom-radio">
                                                        <input type="radio" class="custom-control-input" id="customControlValidation3a" name="radio-stacked">
                                                        <label class="custom-control-label" for="customControlValidation3a">Tarjeta</label>
                                                    </div>
                                                </div>
                                                <div></div>
                                                <div>
                                                    <button type="button" class="btn btn-secondary btn-lg" style="float: right; width: 100%;">Pagar</button>
                                                </div>
                                            </div>                                        
                                        </div>
                                    </div>      
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


export default {
    components:{
        SideMenu,
        TopBar,
    },
    props:[
        'orderId'
    ],
    data() {
        return {
            personas:[
                {
                    idPersona: 1,
                    totalBurritos: 2,
                    totalTacos: 3,
                    totalBebidas: 4,
                    totalTotal: 1500,
                }
            ],
            total: 1200.6,
        }
    },
}
</script>

<style scoped>
    .grid-cont{
        display: grid;
        grid-template-columns: 100px 100px 1fr 31%;
    }

    .align-center{
        display: flex;
        align-items: center;
    }
</style>