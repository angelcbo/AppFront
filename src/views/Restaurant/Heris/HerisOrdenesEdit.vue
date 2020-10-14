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
                            {{title}}
                            <button class="float-right" @click="openOpciones()">Prueba Opciones</button>
                            
                        </div>
                        <div class="card-body">


                            <div class="row">
                                <div class="col-lg-12">
        <!-- code -->

                     

        <div class="btn-group btn-group-toggle pb-3" data-toggle="buttons">
            <label class="btn btn-danger active" @click="changeCategoria(0)">
                <input type="radio" name="options" id="option1" autocomplete="off" checked> 
                <h6 style="color:white">
                    <i class="fa fa-cutlery"></i>
                    Principales 
                </h6>
            </label>
            <label class="btn btn-danger"  @click="changeCategoria(1)">
                <input type="radio" name="options" id="option2" autocomplete="off">
                <h6 style="color:white">
                    <i class="fa fa-star"></i>
                    Especiales
                </h6>
            </label>
            <label class="btn btn-danger"  @click="changeCategoria(2)">
                <input type="radio" name="options" id="option3" autocomplete="off"> 
                <h6 style="color:white">
                    <i class="fa fa-glass"></i>
                    Bebidas
                </h6>
            </label>
            <label class="btn btn-danger"  @click="changeCategoria(3)">
                <input type="radio" name="options" id="option4" autocomplete="off"> 
                <h6 style="color:white">
                    <i class="fa fa-cube"></i>
                    Otros
                </h6>
            </label>
        </div>

        <div v-if="categoriaSelect === 0">
            <ul class="alimentosCont">
                <AlimentoSquare v-for="(item, id) in tacos" v-bind:key="id" v-bind:alimento="item" @click="triggerModal"></AlimentoSquare>
            </ul>                        
            <ul class="alimentosCont">
                <AlimentoSquare v-for="(item, id) in burritos" v-bind:key="id" v-bind:alimento="item" @click="triggerModal"></AlimentoSquare>
            </ul>  
        </div>

        <div v-if="categoriaSelect === 1">
            <div class="alimentosCont">
                <AlimentoSquare v-for="(item, id) in especiales" v-bind:key="id" v-bind:alimento="item" @click="triggerModal"></AlimentoSquare>
            </div>  
        </div>

        <div v-if="categoriaSelect === 2">
            <div class="alimentosCont">
                <AlimentoSquare v-for="(item, id) in bebidas" v-bind:key="id" v-bind:alimento="item" @click="triggerModal"></AlimentoSquare>
            </div>  
        </div>
        <div v-if="categoriaSelect === 3">
            <div class="alimentosCont">
                <AlimentoSquare v-for="(item, id) in otros" v-bind:key="id" v-bind:alimento="item" @click="triggerModal"></AlimentoSquare>
            </div> 
        </div>

        <!-- Modal: modalOpciones -->
        <div class="modal fade" id="modalCart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <!--Header-->
            <div class="modal-header">
                <h4 class="modal-title" id="myModalLabel">Agregar Platillo</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" tabindex="-1">
                <span aria-hidden="true">×</span>
                </button>
            </div>
            <!--Body-->
            <div class="modal-body">      
                <div class="row">
                    <div class="col-md-12 pb-2">
                        <h5> {{ seleccion.nombre }} </h5>
                    </div>
                </div>
                <div class="d-flex bd-highlight mb-3">
                    <div class="p-2 bd-highlight align-self-center">OPCIONES </div>
                    <div class="mr-auto p-2 align-self-center">
                        <a href="#">
                            <span class="badge badge-danger">S/N MAYONESA</span>
                        </a>
                        <a href="#" style="margin: 0px 10px 0px 10px">
                            <span class="badge badge-danger" >CON PIÑA</span>
                        </a>
                        <a href="#">
                            <span class="badge badge-danger">C/QUESO</span>
                        </a>
                    </div>
                    <div class="p-2 bd-highlight">
                        <div class="input-group input-group-sm" style="height: 28px">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Cantidad</span>
                            </div>
                            <input type="number" class="form-control" min=1 aria-label="Small" aria-describedby="inputGroup-sizing-sm" v-model="cantidad">
                        </div>
                    </div>
                </div>
            </div>
            <!--Footer-->
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-secondary" style="margin: 0px;" @click="onAddRow()">Agregar<i class="fa fa-plus" aria-hidden="true" style="margin-left: 5px"></i></button>
            </div>
            </div>
        </div>
        </div>
        <!-- Modal: modalCart -->

        <!-- Modal: modalCart -->
        <div class="modal fade" id="modalOpciones" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <!--Header-->
            <div class="modal-header">
                <h4 class="modal-title" id="myModalLabel">Opciones de Orden</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" tabindex="-1">
                <span aria-hidden="true">×</span>
                </button>
            </div>
            <!--Body-->
            <div class="modal-body">      

                <div class="row align-items-end">
                    <div class="col-lg-12">
                        <order-consumo v-bind:order="order" />
                    </div>                    
                </div>
                <div v-show="order.consumo == 'sucursal'" class="row" style="margin:15px 0"> 
                    <div class="col-md-12">
                    <div class="input-group input-group-lg">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-lg">Mesa #</span>
                        </div>
                        <input style="width:100%" type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" v-model="item.mesa" @change="onChangeMesa" >
                    </div>                 
                    </div>               
                </div>    
                <alert v-bind:containerid="alertMesa"/>   
                  
                <div v-show="order.consumo == 'domicilio'" class="row" style="margin:15px 0px">
                    <order-domicilio v-bind:order="order" />

                    <order-repartidor v-bind:order="order" />

                     <div class="row">
                        <div class="col-md-12">
                            <alert v-bind:containerid="alertId"/>                                        
                        </div>
                    </div>  
                </div>                                                                             

            </div>
            <!--Footer-->
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-secondary" style="margin: 0px;" @click="onOpcionesChange()">Aceptar</button>
            </div>
            </div>
        </div>
        </div>
        <!-- Modal: modalOpciones -->

       <div v-if="false">
        <order-row v-bind:ordenRows="tacosRows" v-bind:alertId="'alert-taco-row'" v-on:addRow="onAddRow" />

        <order-row v-bind:ordenRows="burritosRows" v-bind:alertId="'alert-burrito-row'" v-on:addRow="onAddRow" />

        <order-row v-bind:ordenRows="mgpRows" v-bind:alertId="'alert-mgp-row'" v-on:addRow="onAddRow" />

        <order-platillos v-on:addRow="onAddRow" />

        <order-extras v-bind:order="order" />
       </div>
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

                                    <div class="row justify-content-end">                                                                                                                                             
                                        <div class="col-md-6">
                                            <div class="d-flex flex-row-reverse">
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
import AlimentoSquare from '@/components/Restaurant/Heris/Order/AlimentoSquare.vue';

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
      ResOrdenes,
      ResAlimentos,
      AlimentoSquare
  },
  mounted() {
      let _this = this;
        if(this.ordenId){
            this.title+=" #"+this.ordenId;
        }

        ResOrdenes.listMesas(function(res){
                // console.log('res', res);
                _this.mesasOcupadas = res.data.items.map(a => a.mesa);
                console.log('mesas', _this.mesasOcupadas);
            });
     
        ResAlimentos.categoria("Tacos", function(res){
            _this.tacos = res.data.items;
            console.log("Tacos", _this.tacos);
        }); 
        ResAlimentos.categoria("Burritos", function(res){
            _this.burritos = res.data.items;
            console.log("Burritos", _this.burritos);
        });  
        ResAlimentos.categoria("Especiales", function(res){
            _this.especiales = res.data.items;
            console.log("Especiales", _this.especiales);
        });           
        ResAlimentos.categoria("Bebidas", function(res){
            _this.bebidas = res.data.items;
            console.log("Bebidas", _this.bebidas);
        });   
        ResAlimentos.categoria("Otros", function(res){
            _this.otros = res.data.items;
            console.log("Otros", _this.especiales);
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
        alertMesa: 'alert-mesa',
        seleccion: {
            alimentoid: -1,
            nombre: "Sin selección"
        },
        categorias: [
            "tacos",
            "burritos",
            "especiales",
            "bebidas",
            "otros"
        ],
        tacos:[],
        burritos:[],
        bebidas:[],
        especiales:[],
        otros:[],
        cantidad : 0,
        categoriaSelect: 0
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
      openOpciones(){
          $('#modalOpciones').modal('show');
      },
      onOpcionesChange(){
          $('#modalOpciones').modal('hide');
      },
      onAddRow(){
          let item = {
                "cantidad": this.cantidad,
                "comensal": 0,
                "alimentoId": this.seleccion.alimentoId
            }
          console.log('add item', item);
          this.order.list.push(item);
          
          this.cantidad = 1
          $('#modalCart').modal('hide');
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
            this.$router.push({ name: 'catalogos'});
        },
        changeCategoria(cat){
            this.categoriaSelect = cat;
        },
        triggerModal(item){
            this.seleccion = item;
            $('#modalCart').modal('show');
        }
  },
};
</script>

<style>
.alimentosCont {
  display: grid;
  grid-template-columns: repeat(auto-fill, 8.5vw);
  grid-gap: 1rem;
  justify-content: space-between;
  
  /* boring properties */
  list-style: none;
  padding: 1rem 0rem;
  margin: 0 auto;
}
</style>