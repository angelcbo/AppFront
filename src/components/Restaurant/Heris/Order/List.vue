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
                        <th>Cantidad</th>
                        <th> Opciones </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(rEspecial, idx) in order.list" v-bind:key="idx" >
                        <th scope="row"> {{idx + 1 }}  </th>
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
                            <button type="button" class="btn btn-secondary btn-lg waves-effect waves-light" @click="removePlato(idx)" > Eliminar </button>
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
        order: Object
    },
    mounted(){
        let _this = this;
        ResAlimentos.list(100, {}, function(res){
            console.log('resalimentos', res);
            _this.lAlimentos = res.data.items;
        });
    },
    methods:{
        removePlato(idx){
            this.order.list.splice(idx,1);
        }
    }
}
</script>