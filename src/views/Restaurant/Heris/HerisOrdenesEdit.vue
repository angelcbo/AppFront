<template>
    <div class="row">
        <SideMenu/>
        <div class="right-column">
        <TopBar/>
        <main class="main-content p-5" role="main">
            <div class="row">
                <div class="col-lg-8 mb-4">
                    <div class="card">
                        <div class="card-header">
                            <div class="row align-items-end">
                                <div class="col-lg-9">
                                    <order-consumo title="Consumo" v-bind:order="order" />
                                </div>
                                <div v-show="order.consumo == 'sucursal'" class="col-lg-3 align-bottom">                                        
                                    <div class="input-group input-group-lg">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroup-sizing-lg">Mesa #</span>
                                        </div>
                                        <input style="width:100%" type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" v-model="item.mesa" @change="onChangeMesa" >
                                    </div>                                
                                </div>
                            </div>
                        </div>
                        <div class="card-body">


                            <div class="row">
                                <div class="col-lg-12">
        <!-- code -->

        <alert v-bind:containerid="alertMesa"/>    

        <div v-show="order.consumo == 'domicilio'" class="row">
            <order-domicilio v-bind:order="order" />
        </div>

        <order-row v-bind:ordenRows="tacosRows" v-bind:alertId="'alert-taco-row'" v-on:addRow="onAddRow" />

        <order-row v-bind:ordenRows="burritosRows" v-bind:alertId="'alert-burrito-row'" v-on:addRow="onAddRow" />

        <order-row v-bind:ordenRows="mgpRows" v-bind:alertId="'alert-mgp-row'" v-on:addRow="onAddRow" />

        <order-platillos v-on:addRow="onAddRow" />

        <order-extras v-bind:order="order" />

        <!-- {{order}} -->

        <!-- {{item}} -->

        <!-- end code -->
                                </div>
                            </div>
                        </div> <!-- end card-body -->
                    </div>
                </div>
                <div class="col-lg-4 mb-3">
                    <div class="row" style="height:60%">
                        <div class="col-lg-12">
                            <div class="card">                                
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <order-list v-bind:order="order" />                                        
                                        </div>
                                    </div>

                                    <div v-show="order.consumo == 'domicilio'" class="row">
                                        <order-repartidor v-bind:order="order" />
                                    </div>

                                    <div class="row">
                                        <div class="col-md-12">
                                            <alert v-bind:containerid="alertId"/>                                        
                                        </div>
                                    </div>                            

                                    <div class="row justify-content-end">                                                                                                                                             
                                        <div class="col-md-6">
                                            <div class="d-flex flex-row-reverse bd-highlight">
                                                <button @click="save" type="button" class="btn btn-secondary waves-effect waves-light" style="margin-left:5px"> Aceptar </button>                                            
                                                <button @click="cancel" type="button" class="btn btn-secondary waves-effect waves-light"> Cancelar </button>                                            
                                            </div>
                                        </div>                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> <!-- end card-body -->
            </div> <!-- End card div  -->
        </main>
        </div>
    </div> <!--end row -->
</template>


<script>
import SideMenu from '@/components/SideMenu.vue';
import TopBar from '@/components/TopBar.vue';

import OrderConsumo from '@/components/Restaurant/Heris/Order/Consumo.vue';
import OrderRow from '@/components/Restaurant/Heris/Order/Row.vue';
import OrderPlatillos from '@/components/Restaurant/Heris/Order/Platillos.vue';
import OrderExtras from '@/components/Restaurant/Heris/Order/Extras.vue';
import OrderRepartidor from '@/components/Restaurant/Heris/Order/Repartidor.vue';
import OrderList from '@/components/Restaurant/Heris/Order/List.vue';

import OrderDomicilio from '@/components/Restaurant/Heris/Order/Domicilio.vue';

import ResOrdenes from '@/modules/restaurant/models/ResOrdenes.js';
import ResPlatos from '@/modules/restaurant/models/ResPlatos.js';
import ResAlimentos from '@/modules/restaurant/models/ResAlimentos.js';
import AlertModal from '@/components/AlertModal.vue'; 
import Alert from '@/components/Alert.vue'; 
// import Faker from 'faker';

const cebollitasId = 23;
const medCebollitasId = 24;
const bebidasId = 18;

export default {
  name: 'herisResOrdenesEdit',
  props:[
    'ordenId'
  ],
  components: {
	  SideMenu,
      TopBar,
      OrderConsumo,
      AlertModal,
      Alert,
      OrderDomicilio,
      OrderRow,
      OrderPlatillos,
      OrderExtras,
      OrderRepartidor,
      OrderList,
      ResOrdenes
  },
  mounted() {
      let _this = this;
        if(this.ordenId){
            this.title+=" #"+this.ordenId;
        }else{
            
        }
        ResOrdenes.listMesas(function(res){
                // console.log('res', res);
                _this.mesasOcupadas = res.data.items.map(a => a.mesa);
                console.log('mesas', _this.mesasOcupadas);
            });
  },
  data() {
    return {
        title: "Orden",
        mesasOcupadas:[],
        order:{
            consumo: "sucursal",
            domicilio: {
                calle: "",
                colonia: "",
                numExt:"",
                numInt:"",
                entreCalles:"",
                referencia:""
            },
            cebollitas:null,
            medCebollitas:null,
            bebidas:null,
            repartidor: '',
            list: [],
            cebollitas: 0,
            medCebollitas: 0,
            bebidas: 0,
            repartidorId: 0

        },
        tacosRows:{
            title: 'Tacos',
            tags:["Asada", "Pastor", "Molleja"],
            alimentoIds:[[1,2],[3,4],[5,6]],
            cqueso : true,
            rows: []
        },
        burritosRows:{
            title: 'Burritos',
            tags:["Asada", "Pastor", "Molleja", "Deshebrada", "Combinado"],
            alimentoIds:[[1,2],[3,4],[5,6]],
            cqueso : true,
            rows: []
        },
        mgpRows:{
            title: 'Mexicana - Gringa - Pocha',
            tags:["Mexicana", "Gringa", "Pocha"],
            alimentoIds:[[1,2],[3,4],[5,6]],
            cqueso : false,
            rows: []
        },
        item: ResOrdenes.init(this.ordenId, this.loadItem),
        alertId: 'alert-1',
        alertMesa: 'alert-mesa'
      };
  },
  
  methods: {
      onChangeMesa(){
          if(this.mesasOcupadas.indexOf( this.item.mesa ) > 0){
              Alert.methods.showAlertTimeout(this.alertMesa, "Mesa ocupada", 'alert-warning');
          }
      },
      onConsumoChange(consumo){
          this.item.consumo = consumo;
      },
      onAddRow(item){
          console.log('add item', item);
          this.order.list.push(item);
      },
      loadItem(){
        if( res.data.item.status == 'abierta' ){
            this.item = res.data.item;
            console.log('load item ', this.item);
            this.iPlato.ordenId = this.item.ordenId;
            this.orden.consumo = this.item.consumo;
            this.orden.mesa = this.item.mesa;
        }else{
            this.alertMsg="La orden no se encuentra abierta";
            this.alertTipo="alert-danger";
            AlertModal.methods.showModal();
        }
      },
      setExtras(){
        // console.log('orden', this.orden);

        for( let i = 0 ; i < parseInt(this.order.cebollitas); i++ )
            this.item.resPlatos.push( Object.assign({}, {alimentoId: cebollitasId, cantidad: 1, comensal:0 }) );

        for( let i = 0; i < parseInt(this.order.medCebollitas); i++ )
            this.item.resPlatos.push( Object.assign({}, {alimentoId: medCebollitasId, cantidad: 1, comensal:0 }) );

        for( let i = 0; i < parseInt(this.order.bebidas); i++ )
            this.item.resPlatos.push( Object.assign({}, {alimentoId: bebidasId, cantidad: 1, comensal:0 }) );
    },
      save(){
            const _this = this;
            this.item.resPlatos = this.order.list;
            this.setExtras();
            this.item.consumo = this.order.consumo;
            if(this.order.mesa)
                this.item.mesa = this.order.mesa;
            else
            this.item.mesa = 0;
            // this.item.status = '';
            this.item.tipoPago = ''
            // this.item.consumo = '';
            this.item.repartidorId = 0;
            // ordenId: 0,
        
            // console.log('save', this.item);
            // NomEmpleadoM.testpost(this.empleado);
            
            if( this.item.resPlatos.length < 1 ){
                Alert.methods.showAlertTimeout(this.alertId, "No se han agregado productos", 'alert-warning');
            }else{
                Alert.methods.showAlert(this.alertId, "Guardando");
                ResOrdenes.save(this.item, function(res){
                    console.log('res', res);
                    if( res.data.success == true )
                        _this.$router.push({ name: 'ResHerisOrdenesGrid'});
                });
            }
                
      },
      cancel(){
          this.$router.push({ name: 'ResAlimentosCreate'});
      }
  },
};
</script>
