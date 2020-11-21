<template>
<div class ="row">
    <div class="col-lg-12">
        <h2> Pedido </h2>
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Platillo</th>
                        <th width="75px">Cantidad</th>
                        <th width="35px">Editar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(rEspecial, idx) in order.list" v-bind:key="idx" >
                        <th scope="row"> {{idx + 1 }}  </th>
                        <td>
                            <div class="form-group">                                                        
                                <select class="form-control" v-model="rEspecial.alimentoId" style="height: 34px; border-radius: 5px;">
                                  <option v-for="rAlimento in lAlimentos" v-bind:value="rAlimento.alimentoId" v-bind:key="rAlimento.alimentoId" >
                                      {{rAlimento.nombre}}
                                  </option>
                                </select>
                            </div>
                        </td>
                        <td>
                            <input v-model="rEspecial.cantidad" type="text" class="form-control" placeholder=""  style="width:100%">
                        </td>
                        <td>
                            <button type="button" class="btn btn-secondary btn-sm waves-effect waves-light" style="height:34.32px; margin:0px; width:100%" @click="removePlato(idx)" > <i class="fa fa-trash"/> </button>
                        </td>
                    </tr>
                    

                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script>

import ResAlimentos from '@/modules/restaurant/models/ResAlimentos.js';

export default {
    name: 'Lista',
    props: {
        order: Object,        
    },
    mounted(){
        let _this = this;
        ResAlimentos.list(150, {}, function(res){
            console.log('resalimentos', res);
            _this.lAlimentos = res.data.items;
        });
    },
    data() {
        return {
            lAlimentos: []
        }
    },
    methods:{
        removePlato(idx){
            this.order.list.splice(idx,1);
        },
        getName(id){
            this.lAlimentos.forEach(element => {
                if(element.alimentoId == id){
                    console.log(element.nombre)
                    return element.nombre;
                }
            });
        }
    }
}
</script>