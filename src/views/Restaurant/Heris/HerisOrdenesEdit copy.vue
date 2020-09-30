<template>
    <div class="row">
        <SideMenu/>
        <div class="right-column">
        <TopBar/>
        <main class="main-content p-5" role="main">
            <div class="row">
            <div class="col-md-12">
                <h1> {{title}} </h1>
            </div>
            </div>
            <div class="card">
                <div class="card-body">

<div class="row md-5">
    <div class="col-lg-3">
        <div class="input-group input-group-lg">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-lg">Folio #</span>
            </div>
            <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" v-model="orden.mesa">
        </div>
    </div>
</div>
                    <div class="row">
                        <div class="col-lg-12">
<!-- code -->
<div class="row">
    <div class="col-lg-12">
    <h2> Consumo </h2>
    </div>
    <div class="col-lg-12">
        <div class="form-check form-check-inline">
            <input v-model="orden.consumo" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="sucursal">
            <label class="form-check-label" for="inlineRadio1">Consumo en local</label>
        </div>
        <div class="form-check form-check-inline">
            <input v-model="orden.consumo"  class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="domicilio">
            <label class="form-check-label" for="inlineRadio2"> A Domicilio </label>
        </div>
        <div class="form-check form-check-inline">
            <input v-model="orden.consumo"  class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="llevar">
            <label class="form-check-label" for="inlineRadio2"> P/Llevar </label>
        </div>
        <div class="form-check form-check-inline">
            <input v-model="orden.consumo"  class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="recoger">
            <label class="form-check-label" for="inlineRadio2"> P/recoger </label>
        </div>
        
    </div>
    
</div>
<br>

<div v-show="orden.consumo == 'sucursal'" class="row">
    <div class="col-lg-3">
        <div class="input-group input-group-lg">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-lg">Mesa #</span>
            </div>
            <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" v-model="orden.mesa">
        </div>
    </div>
</div>

<div v-show="orden.consumo == 'domicilio'" class="row">
    <order-domicilio/>
</div>

<br>
<div v-show="isNew == false " class ="row">
    <div class="col-lg-12 pb-5">
        <h2> Pedido </h2>
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Alimento </th>
                        <th> Cantidad </th>
                        <th> Opciones </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(trow, idx) in item.resPlatos" v-bind:key="idx" >
                        <th scope="row">
                            {{idx}}
                        </th>
                        <td>
                            {{trow.alimento.nombre}}
                        </td>
                        <td>
                           {{trow.cantidad}}
                        </td>
                        <td>
                            <button type="button" class="btn btn-secondary btn-lg waves-effect waves-light" @click="removeTacosRow(idx)" > Eliminar </button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
</div>

<br>
<div class ="row">
    <div class="col-lg-12 pb-5">
        <h2> Tacos </h2>
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>T. Asada</th>
                        <th>T. pastor</th>
                        <th>T. molleja</th>
                        <th> Opciones </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(trow, idx) in orden.tacos" v-bind:key="idx" >
                        <th scope="row">
                            {{idx}}
                        </th>
                        <td>
                            <div class="form-row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="s/q" v-model="trow.asada.sq"  >
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="c/q" v-model="trow.asada.cq">
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="form-row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="s/q" v-model="trow.pastor.sq" >
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="c/q" v-model="trow.pastor.cq">
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="form-row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="s/q" v-model="trow.molleja.sq" >
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="c/q" v-model="trow.molleja.cq" >
                                </div>
                            </div>
                        </td>
                        <td>
                            <button type="button" class="btn btn-secondary btn-lg waves-effect waves-light" @click="removeTacosRow(idx)" > Eliminar </button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>
                            <div class="form-row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="s/q" v-model="nuTacos.asada.sq" @keyup.enter="addTacosRow" >
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="c/q" v-model="nuTacos.asada.cq" @keyup.enter="addTacosRow">
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="form-row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="s/q" v-model="nuTacos.pastor.sq" @keyup.enter="addTacosRow">
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="c/q" v-model="nuTacos.pastor.cq" @keyup.enter="addTacosRow">
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="form-row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="s/q" v-model="nuTacos.molleja.sq" @keyup.enter="addTacosRow">
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="c/q" v-model="nuTacos.molleja.cq" @keyup.enter="addTacosRow">
                                </div>
                            </div>
                        </td>
                        <td>
                            <button type="button" class="btn btn-secondary btn-lg waves-effect waves-light" @click="addTacosRow" > Agregar </button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
</div>
<div class ="row">
    <div class="col-lg-8 pb-5">
        <h2> Especiales </h2>
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Especial</th>
                        <th>Cantidad</th>
                        <th> Opciones </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(rEspecial, idx) in orden.especiales" v-bind:key="idx" >
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
                    <tr>
                        <th scope="row"></th>
                        <td>
                            <div class="form-group">
                               
                                <select class="form-control" v-model="iPlato.alimentoId" >
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
                            <button type="button" class="btn btn-secondary btn-lg waves-effect waves-light" @click="addPlato" > Agregar </button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-lg-3 pb-5">
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Cebollitas comp.</span>
            </div>
            <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="orden.cebollitas"  >
        </div>
        <br>
    </div>
    <div class="col-lg-3 pb-5">
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Cebollitas 1/2 </span>
            </div>
            <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="orden.medCebollitas" >
        </div>
        <br>
    </div>
    <div class="col-lg-3 pb-5">
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Bebidas</span>
            </div>
            <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="orden.bebidas" >
        </div>
    </div>
</div>

<div v-show="orden.consumo == 'domicilio'" class="row">
        <div class="col-lg-6">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">Repartidor</label>
                </div>
                <select class="custom-select" id="inputGroupSelect01">
                    <option selected=""> N/A </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </div>
</div>

<div class="row">
    <div class="row mb-5">
        <div class="col-md-12">
            <button @click="cancel" type="button" class="btn btn-secondary btn-lg waves-effect waves-light"> Cancelar </button>
            <button @click="save" type="button" class="btn btn-secondary btn-lg waves-effect waves-light"> Aceptar </button>
            <br>

        </div>
    </div>
</div>





<!-- end code -->
                        </div>
                    </div>
                </div> <!-- end card-body -->
            </div>
        </main>
        </div>
        <alert-modal v-bind:msg="alertMsg" v-bind:tipo="alertTipo"></alert-modal>
    </div> <!--end row -->
</template>


<script>
import SideMenu from '@/components/SideMenu.vue';
import TopBar from '@/components/TopBar.vue';

import OrderDomicilio from '@/components/Restaurant/Heris/OrderDomicilio.vue';

import ResOrdenes from '@/modules/restaurant/models/ResOrdenes.js';
import ResPlatos from '@/modules/restaurant/models/ResPlatos.js';
import ResAlimentos from '@/modules/restaurant/models/ResAlimentos.js';
import AlertModal from '@/components/AlertModal.vue'; 
// import Faker from 'faker';

const tacosIds = {
    asada:{sq:1, cq:2},
    pastor:{sq:3, cq:4},
    molleja:{sq:5, cq:6},
}
const cebollitasId = 23;
const medCebollitasId = 24;
const bebidasId = 18;

export default {
  name: 'herisResOrdenesEdit',
  props:[
    'ordenId'
  ],
  mounted() {
      let _this = this;
        ResAlimentos.list(100, {}, function(res){
            console.log('resalimentos', res);
            _this.lAlimentos = res.data.items;
        });
        if(this.ordenId){
            this.title+=" #"+this.ordenId;

        }
  },
  data() {
    return {
        title: 'Orden',
        debug: process.env.VUE_APP_DEV,
        isNew: this.ordenId ? false : true,
        orden:{
            consumo: 'sucursal',
            mesa:0,
            tacos:[],
            especiales:[],
            cebollitas:null,
            medCebollitas:null,
            bebidas:null,
        },
        nuTacos:{
            asada:{sq:'', cq:''},
            pastor:{sq:'', cq:''},
            molleja:{sq:'', cq:''}
        },      
        item: ResOrdenes.init(this.ordenId, this.loadItem),
        lAlimentos: [],
        iPlato: ResPlatos.init(),

        alertMsg: 'error en algo',
      alertTipo: 'alert-warning',
      };
  },
  components: {
	  SideMenu,
      TopBar,
      AlertModal,
      OrderDomicilio
  },
  methods: {
    addTacosRow(){

        this.orden.tacos.push( Object.assign({}, this.nuTacos) )
        this.nuTacos = {
            asada:{sq:'', cq:''},
            pastor:{sq:'', cq:''},
            molleja:{sq:'', cq:''}
        };
    },
    removeTacosRow(idx){
        console.log("remove",idx);
        this.orden.tacos.splice(idx,1);
    },
    loadItem(res){
        // if(false){
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
    randomFill(){
      this.item = ResOrdenes.random();
    },
    cancel() {
        this.$router.push({ name: 'ResAlimentosCreate'});
    },
    save() {
        this.setOrden();
        this.item.consumo = this.orden.consumo;
        this.item.mesa = this.orden.mesa;
        // this.item.status = '';
        this.item.tipoPago = ''
        // this.item.consumo = '';
        this.item.repartidorId = 0;
        // ordenId: 0,
     
        // console.log('save', this.item);
        // NomEmpleadoM.testpost(this.empleado);
        ResOrdenes.save(this.item);
        // if(this.isNew){
        //     ResPlatos.save(this.item.resPlatos);
        // }
      
    },
    setOrdenTacos(rowTacos){
        let nuPlato = ResPlatos.init();
        if( parseInt(rowTacos.asada.sq) > 0 ){
            this.item.resPlatos.push( Object.assign({}, {alimentoId: tacosIds.asada.sq, cantidad: parseInt(rowTacos.asada.sq) }) );
        }
        if( parseInt(rowTacos.asada.cq) > 0 ){
            this.item.resPlatos.push( Object.assign({}, {alimentoId: tacosIds.asada.cq, cantidad: parseInt(rowTacos.asada.cq)}) );
        }
        if( parseInt(rowTacos.pastor.sq) > 0 ){
            this.item.resPlatos.push( Object.assign({}, {alimentoId: tacosIds.pastor.sq, cantidad: parseInt(rowTacos.pastor.sq)}) );
        }
        if( parseInt(rowTacos.pastor.cq) > 0 ){
            this.item.resPlatos.push( Object.assign({}, {alimentoId: tacosIds.pastor.cq, cantidad: parseInt(rowTacos.pastor.cq)}) );
        }
        if( parseInt(rowTacos.molleja.sq) > 0 ){
            this.item.resPlatos.push( Object.assign({}, {alimentoId: tacosIds.molleja.sq, cantidad: parseInt(rowTacos.molleja.sq)}) );
        }
        if( parseInt(rowTacos.molleja.cq) > 0 ){
            this.item.resPlatos.push( Object.assign({}, {alimentoId: tacosIds.molleja.cq, cantidad: parseInt(rowTacos.molleja.cq)}) );
        }
        
    },
    setOrden(){
        // console.log('orden', this.orden);
        this.orden.tacos.forEach(this.setOrdenTacos);

        for( let i = 0 ; i < parseInt(this.orden.cebollitas); i++ )
            this.item.resPlatos.push( Object.assign({}, {alimentoId: cebollitasId, cantidad: 1 }) );

        for( let i = 0; i < parseInt(this.orden.medCebollitas); i++ )
            this.item.resPlatos.push( Object.assign({}, {alimentoId: medCebollitasId, cantidad: 1 }) );

        for( let i = 0; i < parseInt(this.orden.bebidas); i++ )
            this.item.resPlatos.push( Object.assign({}, {alimentoId: bebidasId, cantidad: 1 }) );
    },
    addPlato(){
      let plato = this.iPlato;
      console.log('plato', plato)
      if( parseInt(plato.cantidad) < 1  )
        plato.cantidad = 1;
      this.orden.especiales.push( Object.assign({}, plato) );
      this.item.resPlatos.push( Object.assign({}, plato) );
      this.iPlato = ResPlatos.init();
    },
    removePlato(idx){
        this.orden.especiales.splice(idx,1);
    },
    deletePlato(id){

    }
  },
};
</script>
