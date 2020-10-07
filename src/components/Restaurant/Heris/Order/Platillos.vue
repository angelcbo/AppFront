<template>
<div class ="row">
    <div class="col-lg-12">
        <h2> Especiales </h2>
        <alert v-bind:containerid="alertId"/>
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <!-- <th>#</th> -->
                        <th>Especial</th>
                        <th>Cantidad</th>
                        <th width="120px"> Opciones </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(rEspecial, idx) in orden.especiales" v-bind:key="idx" >
                        <!-- <th scope="row"> {{idx + 1 }}  </th> -->
                        <td>
                            <div class="form-group">
                               
                                <select class="form-control" v-model="rEspecial.alimentoId" >
                                  <option v-for="rAlimento in lAlimentos" v-bind:value="rAlimento.alimentoId" v-bind:key="rAlimento.alimentoId" >
                                      {{rAlimento.nombre}}
                                  </option>
                                </select> 
                            </div>
                        </td>
                        <td>
                            <input v-model="rEspecial.cantidad" type="text" class="form-control" placeholder=""  >
                        </td>
                        <td>
                            <button type="button" class="btn btn-secondary btn-sm waves-effect waves-light" @click="removePlato(idx)" style="height:34.32px; margin:0px; width:100%"> Eliminar </button>
                        </td>
                    </tr>
                    <tr>
                        <!-- <th scope="row"></th> -->
                        <td>
                            <div class="form-group">
                               
                                <select class="form-control" v-model="iPlato.alimentoId" style="height: 34px; border-radius: 5px;">
                                  <option v-for="rAlimento in lAlimentos" v-bind:value="rAlimento.alimentoId" v-bind:key="rAlimento.alimentoId">
                                      {{rAlimento.nombre}}
                                  </option>
                                </select> 
                            </div>
                        </td>
                        <td>
                            <input v-model="iPlato.cantidad" type="text" class="form-control" placeholder=""   @keyup.enter="addPlato" >
                        </td>
                        <td>
                            <button type="button" class="btn btn-secondary btn-sm waves-effect waves-light" @click="addPlato" style="height:34.32px; margin:0px; width:100%"> Agregar </button>                            
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
</div>
    
</template>
<script>


import ResPlatos from '@/modules/restaurant/models/ResPlatos.js';
import ResAlimentos from '@/modules/restaurant/models/ResAlimentos.js';
import Alert from '@/components/Alert.vue'; 

export default {
    name: 'Platillos',
    props: {
        order: Object
    },
    components:{
        Alert
    },
    mounted() {
        let _this = this;
        ResAlimentos.especiales( function(res){
            console.log('resalimentos', res);
            _this.lAlimentos = res.data.items;
        });
        if(this.ordenId){
            this.title+=" #"+this.ordenId;

        }
    },
    data(){
        return{
            orden:{
                especiales:[],
            },
            lAlimentos: [],
            iPlato: ResPlatos.init(),
            alertId: 'alert-platillos'
        }
    },
    methods:{
        addPlato(){

            if( parseInt(this.iPlato.cantidad) > 0  ){
                let nuItem = {
                    "cantidad": parseInt(this.iPlato.cantidad),
                    "comensal": 0,
                    "alimentoId": this.iPlato.alimentoId
                }
                console.log(nuItem);
                this.$emit('addRow', nuItem);
                this.iPlato.alimentoId = '';
                Alert.methods.showAlertTimeout(this.alertId, "Agregado");
            }else{
                Alert.methods.showAlertTimeout(this.alertId, "No se puede agregar", 'alert-warning');
            }
            
        }
    }
}
</script>