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
                            <div class="row">
                                <div class="col-md-8">
                                    {{title}}
                                    <p class="task-list-stats">
                                        <span class="task-list-total">Selecciona los platillos del menu.</span>
                                    </p>
                                </div>
                                <div class="col-md-4">
                                    <div class="d-flex align-items-end float-right" style="height:100%">
                                    <div class="btn-group mt-auto pb-2">
                                        <button type="button" class="btn btn-secondary btn-sm" @click="openOpciones()">Detalles de Orden<i class="fa fa-sliders" aria-hidden="true" style="margin-left: 5px"></i></button>
                                        <button type="button" class="btn btn-secondary btn-sm"><i class="fa fa-refresh" aria-hidden="true"></i></button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">


                            <div class="row">
                                <div class="col-lg-12">
        <!-- code -->

                     
        <div class="d-flex pb-3">
        <div class="btn-group btn-group-toggle btn-group-justified col-md-12" data-toggle="buttons" style="padding:0">
            <label class="btn btn-danger col-md-4 active" @click="changeCategoria(0)">
                <input type="radio" name="options" id="option1" autocomplete="off" checked> 
                <h6 style="color:white">
                    <i class="fa fa-cutlery"></i>
                    Principales 
                </h6>
            </label>
            <label class="btn btn-danger col-md-4"  @click="changeCategoria(1)">
                <input type="radio" name="options" id="option2" autocomplete="off">
                <h6 style="color:white">
                    <i class="fa fa-star"></i>
                    Especiales
                </h6>
            </label>
            <label class="btn btn-danger col-md-4"  @click="changeCategoria(2)">
                <input type="radio" name="options" id="option3" autocomplete="off"> 
                <h6 style="color:white">
                    <i class="fa fa-glass"></i>
                    Bebidas
                </h6>
            </label>
            <label class="btn btn-danger col-md-4"  @click="changeCategoria(3)">
                <input type="radio" name="options" id="option4" autocomplete="off"> 
                <h6 style="color:white">
                    <i class="fa fa-cube"></i>
                    Otros
                </h6>
            </label>
        </div>
        </div>

        <div v-if="categoriaSelect === 0">
            <ul class="alimentosCont">
                <TacoSquare v-for="(item, id) in tacos" v-bind:key="id" v-bind:alimento="item" @click="triggerModal"></TacoSquare>
            </ul>                        
            <ul class="alimentosCont">
                <TacoSquare v-for="(item, id) in burritos" v-bind:key="id" v-bind:alimento="item" @click="triggerModal"></TacoSquare>
            </ul>
            <ul class="alimentosCont">
                <TacoSquare v-for="(item, id) in mgp" v-bind:key="id" v-bind:alimento="item" @click="triggerModal"></TacoSquare>
            </ul>   
        </div>

        <div v-if="categoriaSelect === 1">
            <div class="alimentosCont">
                <TacoSquare v-for="(item, id) in especiales" v-bind:key="id" v-bind:alimento="item" @click="triggerModal"></TacoSquare>
            </div>  
        </div>

        <div v-if="categoriaSelect === 2">
            <div class="alimentosCont">
                <TacoSquare v-for="(item, id) in bebidas" v-bind:key="id" v-bind:alimento="item" @click="triggerModal"></TacoSquare>
            </div>  
        </div>
        <div v-if="categoriaSelect === 3">
            <div class="alimentosCont">
                <TacoSquare v-for="(item, id) in otros" v-bind:key="id" v-bind:alimento="item" @click="triggerModal"></TacoSquare>
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

                    <div class="col-md-4">
                        IMG
                    </div>
                    
                    <div class="col-md-8">
                        <h4 class="pb-2"> {{ seleccion.nombre }} </h4>
                        
                        <div class="input-group input-group-sm pb-2" style="height: 35px">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Cantidad</span>
                            </div>
                            <input type="number" class="form-control" min="1" maxlength="3"
                                oninput="var newValue = this.value.replace(new RegExp(/[^\d]/,'ig'), ''); this.value = newValue;"
                                aria-label="Small" aria-describedby="inputGroup-sizing-sm" v-model="cantidad">
                        </div>
                        
                        <alert v-bind:containerid="alertCantidad"/>

                        <div class="d-flex mb-2">
                            <div class="align-self-start" style="padding-top: .5rem; padding-right: .5rem;">
                                OPCIONES 
                            </div>
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
                        </div>                        
                        <div class="form-group">
                            <textarea style="resize:none; min-height:6rem" class="form-control form-control-sm" id="exampleFormControlTextarea1" max-rows="2" placeholder="Detalles deL Platillo..."></textarea>
                        </div>
                    </div>       
                </div>
            </div>
            <!--Footer-->
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal" tabindex="-1">Cancelar</button>
                <button type="button" class="btn btn-secondary" style="margin: 0px;" @click="onAddRow()">Agregar<i class="fa fa-plus" aria-hidden="true" style="margin-left: 5px"></i></button>
            </div>
            </div>
        </div>
        </div>

        <!-- Modal: modalCart -->
        <div class="modal fade" id="modalOpciones" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <!--Header-->
            <div class="modal-header">
                <h4 class="modal-title" id="myModalLabel">Detalles de Orden</h4>
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
                        <input style="width:100%" type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" v-model="order.mesa" @change="onChangeMesa" >
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
                        <div class="card-footer">
                            <div class="float-right">
                                <button type="button" class="btn btn-danger" @click="resetControls()">Cancelar</button>
                                <button type="button" class="btn btn-secondary" style="margin-left: 10px;" @click="addToOrder()">Agregar<i class="fa fa-plus" aria-hidden="true" style="margin-left: 5px"></i></button>
                            </div>
                        </div>
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
import TacoSquare from '@/components/Restaurant/Heris/Order/TacosComponent.vue';

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
      AlimentoSquare,
      TacoSquare
  },

  mounted() {
      let _this = this;
        if(this.ordenId){
            this.title+=" #"+this.ordenId;
        }else{
            this.title = "Nueva Orden";
        }

        ResOrdenes.listMesas(function(res){
                // console.log('res', res);
                _this.mesasOcupadas = res.data.items.map(a => a.mesa);
                console.log('mesas', _this.mesasOcupadas);
            });
        ResAlimentos.categoria("Especiales", function(res){
            var items = res.data.items;
            items.forEach(e => {
                let x = {
                    alimentoId : e.alimentoId,
                    categoria : e.categoria,
                    cantidad : 0,
                    nombre : e.nombre,
                }   
                _this.especiales.push(x)                            
            });            
        });           
        ResAlimentos.categoria("Bebidas", function(res){
            var items = res.data.items;
            items.forEach(e => {
                let x = {
                    alimentoId : e.alimentoId,
                    categoria : e.categoria,
                    cantidad : 0,
                    nombre : e.nombre,
                }   
                _this.bebidas.push(x)                            
            });  
        });   
        ResAlimentos.categoria("Otros", function(res){
            var items = res.data.items;
            items.forEach(e => {
                let x = {
                    alimentoId : e.alimentoId,
                    categoria : e.categoria,
                    cantidad : 0,
                    nombre : e.nombre,
                }   
                _this.otros.push(x)                            
            });  
        });  
        ResAlimentos.categoria("mgp", function(res){
            var items = res.data.items;
            items.forEach(e => {
                let x = {
                    alimentoId : e.alimentoId,
                    categoria : e.categoria,
                    cantidad : 0,
                    nombre : e.nombre,
                }   
                _this.mgp.push(x)                            
            });  
            console.log("mgp", _this.mgp);
        });   
  },
  
  data() {
    return {
        title: "Orden",
        mesasOcupadas:[],
        order:{
            consumo: "sucursal",
            mesa : 0,
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
        alertCantidad: 'alert-cantidad',
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
        tacos:[
            {
                nombre: "Molleja",
                categoria: "tacos",
                cantidad : 0,
                opciones : [
                    {
                        nombre : "Con Queso",
                        estado : 0,
                        tag : "Q",
                        class : ""
                    }            
                ]
            },
            {
                nombre: "Pastor",
                categoria: "tacos",      
                cantidad : 0,          
                opciones : [
                    {
                        nombre : "Con Queso",
                        estado : 0,
                        tag : "Q",
                        class : ""
                    },
                    {
                        nombre : "Con Piña",
                        estado : 0,
                        tag : "P",
                        class : ""
                    }
                ]
            },                        
            {
                nombre: "Asada",
                categoria: "tacos",
                cantidad : 0,
                opciones : [
                    {
                        nombre : "Con Queso",
                        estado : 0,
                        tag : "Q",
                        class : ""
                    }
                ]
            },
        ],
        burritos:[  
            {
                nombre: "Molleja",
                categoria: "burritos",
                cantidad : 0,
                opciones : [
                    {
                        nombre : "Con Mayonesa",
                        estado : 1,
                        tag : "M",
                        class : "active_m"
                    },
                    {
                        
                        nombre : "Con Queso",
                        estado : 0,
                        tag : "Q",
                        class : ""
                    }            
                ]
            },          
            {
                nombre: "Pastor",
                categoria: "burritos",
                cantidad : 0,
                opciones : [
                    {
                        nombre : "Con Mayonesa",
                        estado : 1,
                        tag : "M",
                        class : "active_m"
                    },
                    {
                        nombre : "Con Queso",
                        estado : 0,
                        tag : "Q",
                        class : ""
                    }            
                ]
            },            
            {
                nombre: "Asada",
                categoria: "burritos",
                cantidad : 0,
                opciones : [
                    {
                        nombre : "Con Mayonesa",
                        estado : 1,
                        tag : "M",
                        class : "active_m"
                    },
                    {
                        nombre : "Con Queso",
                        estado : 0,
                        tag : "Q",
                        class : ""
                    }            
                ]
            },
            {
                nombre: "Deshebrada",
                categoria: "burritos",
                cantidad : 0,
                opciones : [
                    {
                        nombre : "Con Mayonesa",
                        estado : 1,
                        tag : "M",
                        class : "active_m"
                    },
                    {
                        nombre : "Con Queso",
                        estado : 0,
                        tag : "Q",
                        class : ""
                    }            
                ]
            },
            {
                nombre: "Combinado",
                categoria: "burritos",
                cantidad : 0,
                opciones : [
                    {
                        nombre : "Con Mayonesa",
                        estado : 1,
                        tag : "M",
                        class : "active_m"
                    },  
                    {
                        nombre : "Con Queso",
                        estado : 0,
                        tag : "Q",
                        class : ""
                    }            
                ]
            },
        ],
        mgp:[],
        bebidas:[],
        especiales:[],
        otros:[],
        cantidad : 1,
        categoriaSelect: 0
      };
  },
  
methods: {
    onChangeMesa(){
        if(this.mesasOcupadas.indexOf( this.order.mesa ) > 0){
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
        if(!this.verificarCantidad()){
            this.cantidad = 0;            
            return;
        }
        console.log(this.verificarCantidad());
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
    loadItem(res){
        if( res.data.item.status == 'abierta' ){
            this.item = res.data.item;                      
            this.order.consumo = this.item.consumo;
            this.order.mesa = this.item.mesa;
            this.order.list = this.item.resPlatos;

            console.log('load item ', this.item);
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
        this.$router.push({ name: 'ResHerisOrdenesGrid'});
    },
    changeCategoria(cat){
        this.categoriaSelect = cat;
    },
    verificarCantidad(){
        return (this.cantidad > 0 && parseInt(this.cantidad) != NaN);
    },
    triggerModal(item){
        this.seleccion = item;
        $('#modalCart').modal('show');
    },
    addToOrder(){
        this.tacos.forEach(element => {
            let id = -1;
            switch(element.nombre){
                case "Asada":
                    id = 1;
                    if(element.opciones[0].estado == 1 ){
                        id = 2;
                    }                    
                    break;
                case "Pastor":
                    id = 3
                    if(element.opciones[0].estado == 1 && element.opciones[1].estado == 1){
                        id = 50
                    } else if (element.opciones[0].estado == 1){
                        id = 4
                    } else if (element.opciones[1].estado == 1){
                        id = 49
                    }
                    break;
                default:
                    id = 5;
                    if(element.opciones[0].estado == 1){
                        id = 6;
                    }    
                    break;                
            }
            if(element.cantidad>0){
                let item = {
                    "cantidad": element.cantidad,
                    "comensal": 0,
                    "alimentoId": id
                }
                console.log('add item', item);
                this.order.list.push(item);                                 
            }
        });
        this.burritos.forEach(element => {
            let id = -1;
            switch(element.nombre){
                case "Asada":
                    id = 51 //Sin Mayonesa
                    if(element.opciones[0].estado == 1 && element.opciones[1].estado == 1){
                        id = 8 //Con Queso
                    } else if (element.opciones[0].estado == 1){
                        id = 7 //Normal
                    } else if (element.opciones[1].estado == 1){
                        id = 52 //Sin Mayonesa y Con Queso
                    }               
                    break;
                case "Pastor":
                    id = 53 //Sin Mayonesa
                    if(element.opciones[0].estado == 1 && element.opciones[1].estado == 1){
                        id = 10 //Con Queso
                    } else if (element.opciones[0].estado == 1){
                        id = 9 //Normal
                    } else if (element.opciones[1].estado == 1){
                        id = 54 //Sin Mayonesa Con Queso
                    }       
                    break;
                case "Molleja":
                    id = 55 //Sin Mayonesa
                    if(element.opciones[0].estado == 1 && element.opciones[1].estado == 1){
                        id = 12 //Con Queso
                    } else if (element.opciones[0].estado == 1){
                        id = 11 //Normal
                    } else if (element.opciones[1].estado == 1){
                        id = 56 //Sin Mayonesa y Con Queso                        
                    }    
                    break;
                case "Deshebrada":
                    id = 57 //Sin Mayonesa
                    if(element.opciones[0].estado == 1 && element.opciones[1].estado == 1){
                        id = 14 //Con Queso
                    } else if (element.opciones[0].estado == 1){
                        id = 13 //Normal
                    } else if (element.opciones[1].estado == 1){
                        id = 58 //Sin Mayonesa y Con Queso
                    }    
                    break;
                default:
                    id = 59 //Sin Mayonesa
                    if(element.opciones[0].estado == 1 && element.opciones[1].estado == 1){
                        id = 16 //Con Queso
                    } else if (element.opciones[0].estado == 1){
                        id = 15 //Normal
                    } else if (element.opciones[1].estado == 1){
                        id = 60 //Sin Mayonesa y Con Queso
                    }    
                    break;                
            }
            if(element.cantidad>0){
                let item = {
                    "cantidad": element.cantidad,
                    "comensal": 0,
                    "alimentoId": id
                }
                console.log('add item', item);
                this.order.list.push(item);                                 
            }
        });
        this.bebidas.forEach(element => {
            if(element.cantidad>0){
                let item = {
                    "cantidad": element.cantidad,
                    "comensal": 0,
                    "alimentoId": element.alimentoId
                }
                console.log('add item', item);
                this.order.list.push(item);                                 
            }
        });
        this.especiales.forEach(element => {
            if(element.cantidad>0){
                let item = {
                    "cantidad": element.cantidad,
                    "comensal": 0,
                    "alimentoId": element.alimentoId
                }
                console.log('add item', item);
                this.order.list.push(item);                                 
            }
        });
        this.otros.forEach(element => {
            if(element.cantidad>0){
                let item = {
                    "cantidad": element.cantidad,
                    "comensal": 0,
                    "alimentoId": element.alimentoId
                }
                console.log('add item', item);
                this.order.list.push(item);                                 
            }
        });
        this.mgp.forEach(element => {
            if(element.cantidad>0){
                let item = {
                    "cantidad": element.cantidad,
                    "comensal": 0,
                    "alimentoId": element.alimentoId
                }
                console.log('add item', item);
                this.order.list.push(item);                                 
            }
        });
        this.resetControls();
    },    
    resetControls(){
        this.tacos = [
            {
                nombre: "Molleja",
                categoria: "tacos",
                cantidad : 0,
                opciones : [
                    {
                        nombre : "Con Queso",
                        estado : 0,
                        tag : "Q",
                        class : ""
                    }            
                ]
            },
            {
                nombre: "Pastor",
                categoria: "tacos",      
                cantidad : 0,          
                opciones : [
                    {
                        nombre : "Con Queso",
                        estado : 0,
                        tag : "Q",
                        class : ""
                    },
                    {
                        nombre : "Con Piña",
                        estado : 0,
                        tag : "P",
                        class : ""
                    }
                ]
            },                        
            {
                nombre: "Asada",
                categoria: "tacos",
                cantidad : 0,
                opciones : [
                    {
                        nombre : "Con Queso",
                        estado : 0,
                        tag : "Q",
                        class : ""
                    }
                ]
            },
        ]
        this.burritos = [  
            {
                nombre: "Molleja",
                categoria: "burritos",
                cantidad : 0,
                opciones : [
                    {
                        nombre : "Con Mayonesa",
                        estado : 1,
                        tag : "M",
                        class : "active_m"
                    },
                    {
                        
                        nombre : "Con Queso",
                        estado : 0,
                        tag : "Q",
                        class : ""
                    }            
                ]
            },          
            {
                nombre: "Pastor",
                categoria: "burritos",
                cantidad : 0,
                opciones : [
                    {
                        nombre : "Con Mayonesa",
                        estado : 1,
                        tag : "M",
                        class : "active_m"
                    },
                    {
                        nombre : "Con Queso",
                        estado : 0,
                        tag : "Q",
                        class : ""
                    }            
                ]
            },            
            {
                nombre: "Asada",
                categoria: "burritos",
                cantidad : 0,
                opciones : [
                    {
                        nombre : "Con Mayonesa",
                        estado : 1,
                        tag : "M",
                        class : "active_m"
                    },
                    {
                        nombre : "Con Queso",
                        estado : 0,
                        tag : "Q",
                        class : ""
                    }            
                ]
            },
            {
                nombre: "Deshebrada",
                categoria: "burritos",
                cantidad : 0,
                opciones : [
                    {
                        nombre : "Con Mayonesa",
                        estado : 1,
                        tag : "M",
                        class : "active_m"
                    },
                    {
                        nombre : "Con Queso",
                        estado : 0,
                        tag : "Q",
                        class : ""
                    }            
                ]
            },
            {
                nombre: "Combinado",
                categoria: "burritos",
                cantidad : 0,
                opciones : [
                    {
                        nombre : "Con Mayonesa",
                        estado : 1,
                        tag : "M",
                        class : "active_m"
                    },  
                    {
                        nombre : "Con Queso",
                        estado : 0,
                        tag : "Q",
                        class : ""
                    }            
                ]
            },
        ]
        this.especiales.forEach(e => {
            if(e["cantidad"]>0){
                e["cantidad"] = 0;                
            }                            
        });
        this.bebidas.forEach(e => {
            if(e["cantidad"]>0){
                e["cantidad"] = 0;
                console.log("cantidad", e)
            }                            
        });
        this.mgp.forEach(e => {
            if(e["cantidad"]>0){
                e["cantidad"] = 0;
                console.log("cantidad", e)
            }                            
        });
        this.otros.forEach(e => {
            if(e["cantidad"]>0){
                e["cantidad"] = 0;                
            }                            
        });
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
  
  list-style: none;
  padding: 1rem 0rem;
  margin: 0 auto;
}
</style>