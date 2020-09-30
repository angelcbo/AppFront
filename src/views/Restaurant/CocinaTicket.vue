<template>
    <div class="ticket">
            <!-- <img src="./logo.png" alt="Logo"> -->
            <p class="centered">RECEIPT EXAMPLE
                <br>Address line 1
                <br>Address line 2</p>
            <table>
                <thead>
                    <tr>
                        <th class="quantity">Cant</th>
                        <th class="description">Desc</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for=" item in items "  >
                        <td class="quantity"> {{item.cantidad}} </td>
                        <td class="description"> {{item.alimento.nombre}} </td>
                    </tr>
                    
                </tbody>
            </table>



        </div>
        
</template>
<script>

import ResOrdenes from '@/modules/restaurant/models/ResOrdenes.js';
import ResPlatos from '@/modules/restaurant/models/ResPlatos.js';
import ResAlimentos from '@/modules/restaurant/models/ResAlimentos.js';

export default {
    name: 'ResCocinaTicket',
    props:[
        'ordenId'
    ],
    mounted() {
        let _this = this;
        console.log('ordenid', this.ordenId);
            ResOrdenes.init(this.ordenId, this.loadOrden);
    },
    data() {
        return {
            title: 'Cocina Ticket',
            debug: process.env.VUE_APP_DEV,
            orden: ResOrdenes.init(),
            items: [],
            aPagarTotal: 0
        };
    },
    methods:{
        loadOrden(res){
          const _this = this;
            console.log('resordenes', res);
            _this.orden = res.data.item;
            _this.items = _this.orden.resPlatos;
           _this.aPagar();
      }
    }
}
</script>
<style>



/* 
* {
    font-size: 12px;
    font-family: 'Times New Roman';
}

td,
th,
tr,
table {
    border-top: 1px solid black;
    border-collapse: collapse;
}

td.description,
th.description {
    width: 75px;
    max-width: 75px;
}

td.quantity,
th.quantity {
    width: 40px;
    max-width: 40px;
    word-break: break-all;
}

td.price,
th.price {
    width: 40px;
    max-width: 40px;
    word-break: break-all;
}

.centered {
    text-align: center;
    align-content: center;
}

.ticket {
    width: 155px;
    max-width: 155px;
}

img {
    max-width: inherit;
    width: inherit;
}

@media print {
    .hidden-print,
    .hidden-print * {
        display: none !important;
    }
} */
</style>