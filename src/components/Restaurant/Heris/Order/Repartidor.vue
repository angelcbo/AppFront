<template>
<div class="col-lg-12">
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">Repartidor</label>
        </div>
        <select class="custom-select" id="inputGroupSelect01" v-model="order.repartidorId" >
            <option selected=""> N/A </option>
            <option v-for="(repartidor) in list" v-bind:value="repartidor.repartidorId" v-bind:key="repartidor.repartidorId" >
                {{repartidor.nombre}}
            </option>
        </select>
    </div>
</div>
</template>

<script>

import ResRepartidores from '@/modules/restaurant/models/ResRepartidores.js';

export default {
    name: 'Repartidor',
    props: {
        order: Object
    },
    mounted(){
        let _this = this;
        ResRepartidores.list( {}, function(res){
            console.log('repartidores', res);
            _this.list = res.data.items;
        });
    },
    data(){
        return {
            list:[]
        }
    }
}
</script>