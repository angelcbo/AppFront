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
				<!-- nuevas -->
				<div class="row mb-5">
						<!-- mensajes -->
						

						<div class="col-md-12">
							<div class="card">
								<div class="card-header">
									Nuevas
								</div>
								<div class="card-body">
									<div class="col-md-12">
										<div class="row">
											<div class="col-md-4 pb-3">									
												<div class="input-group">
													<div class="input-group-prepend">
														<div class="input-group-text"><i class="fa fa-shopping-basket" aria-hidden="true"></i></div>
													</div>
													<input type="text" class="form-control" placeholder="Buscar una orden..." v-model="searchModel">
												</div>																											
											</div>
											<div class="col pb-3">
												<div class="float-right">									
													<div class="btn-group">
														<button type="button" class="btn btn-primary" @click="testAudio">probar audio</button>
														<button type="button" class="btn btn-primary" @click="loadNuevas">Actualizar<i class="fa fa-refresh" aria-hidden="true" style="margin-left: 5px"></i></button>
														<button type="button" class="btn btn-primary"><i class="fa fa-sliders" aria-hidden="true"></i></button>										
													</div>		
												</div>
											</div>																																
										</div>
									</div>

									<div class="col-md-12">												
							<table class="table">
								<thead>
									<tr>
										<th>#</th>
										<th> Cliente </th>
										<th> Dirección </th>
										<th> Fecha </th>
										<th> Hora </th>
										<th> Cantidad </th>
										<th> Opciones </th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="row in itemsNuevas" v-bind:key="row.id" class="table-warning" >
									<td>{{row.id}}</td>
									<td>{{row.billing.first_name +" "+row.billing.last_name }}</td>
									<td>{{row.billing.address_1}}</td>
									<td> {{ fDate(row.created) }} </td> 
									<td> {{ fTime(row.created) }} </td> 
									<td>{{row.total}}</td>
									<td>
										<div class="btn-group" role="group" aria-label="Basic example">
											<button type="button" class="btn btn-primary waves-effect waves-light" @click="verOrderModal(row, true)" > Ver </button>
										</div>
									</td>
									</tr>
								</tbody>
							</table>
						</div>

								</div>
							</div>
						</div>
						
					</div>
					<!-- end nuevas -->


				<!-- anteriores -->
				<div class="row mb-5">
						<div class="col-md-12">
							<div class="card">
								<div class="card-header">
									Atendidas
								</div>
								<div class="card-body">
									<div class="col-md-12">
										<div class="row">
											<div class="col-md-4 pb-3">									
												<div class="input-group">
													<div class="input-group-prepend">
														<div class="input-group-text"><i class="fa fa-shopping-basket" aria-hidden="true"></i></div>
													</div>
													<input type="text" class="form-control" placeholder="Buscar una orden..." v-model="searchModel">
												</div>																											
											</div>
											<div class="col pb-3">
												<div class="float-right">									
													<div class="btn-group">
														<button type="button" class="btn btn-primary" @click="loadCompletadas">Actualizar<i class="fa fa-refresh" aria-hidden="true" style="margin-left: 5px"></i></button>
														<button type="button" class="btn btn-primary"><i class="fa fa-sliders" aria-hidden="true"></i></button>										
													</div>		
												</div>
											</div>																																
										</div>
									</div>

									<div class="col-md-12">												
							<table class="table">
								<thead>
									<tr>
										<th>#</th>
										<th> Cliente </th>
										<th> Dirección </th>
										<th> Fecha </th>
										<th> Hora </th>
										<th> Cantidad </th>
										<th> Opciones </th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="row in itemsAtendidas" v-bind:key="row.ordenId" class="table-success" >
									<td>{{row.id}}</td>
									<td>{{row.billing.first_name +" "+row.billing.last_name }}</td>
									<td>{{row.billing.address_1}}</td>
									<td> {{ fDate(row.created) }} </td> 
									<td> {{ fTime(row.created) }} </td> 
									<td>{{row.total}}</td>
									<td>
										<div class="btn-group" role="group" aria-label="Basic example">
											<button type="button" class="btn btn-primary waves-effect waves-light" @click="verOrderModal(row, false)" > Ver </button>
										</div>
									</td>
									</tr>
								</tbody>
							</table>
						</div>

								</div>
							</div>
						</div>
						
					</div>
					<!-- end anteriores -->

			
			</main>									
		</div>
		<woo-order-modal v-bind:order="verOrder" v-bind:editable="editable" v-on:update="loadNuevas" ></woo-order-modal>
		<alert-modal v-bind:msg="alert.msg" v-bind:tipo="alert.tipo"></alert-modal>
		<audio id="notificacion" loop="loop" autoplay="autoplay" >
		<source src="/sounds/calling.ogg" type="audio/ogg">
		</audio>
	</div>
</template>


<script>
/* global io */
/* eslint no-undef: "error" */
/* eslint no-unused-vars: "error" */

const SIO_SERVER = 'http://socket.branches.com.mx:8080'
const SOCKET_URL = 'http://socket.branches.com.mx:8080/proceso'
const SOCKET_KEY = ''

import SideMenu from '@/components/SideMenu.vue';
import TopBar from '@/components/TopBar.vue';

import AlertModal from '@/components/AlertModal.vue';
import WooOrderModal from '@/components/Woocommerce/OrderModal.vue';
import WooOrdenes from '@/modules/woocommerce/models/WooOrders.js';

import ChatfuelMsgs from '@/components/Woocommerce/ChatfuelMsgs.vue';

import moment from 'moment'


const timerSecs = 1000*60*1; //milisegundos para revisar
// import Faker from 'faker';

export default {
  name: 'viewWooOrdersList',
  mounted(){
		this.playAudio(false);

		if( this.initIO() ){
			
		}
		this.initTicker();
		this.loadCompletadas();
		//   this.loadItems();
		toastr.options = {
			"closeButton": true,
			"debug": false,
			"positionClass": "toast-bottom-right",
			"onclick": null,
			"showDuration": "300",
			"hideDuration": "1000",
			"timeOut": "5000",
			"extendedTimeOut": "1000",
			"showEasing": "swing",
			"hideEasing": "linear",
			"showMethod": "fadeIn",
			"hideMethod": "fadeOut"
		}
  },
  data() {
	
    return {
		socket: {},
        title: "Ordenes",
		debug: true,
		verOrder:WooOrdenes.init() ,
		itemsNuevas: [],
		itemsAtendidas: [],
		alert:{
			msg: "Tienes ordenes sin atender",
			tipo: "alert-danger"
		},
		searchModel: '',
		editable: false,
		socketCanal: "pizzaly",
		socketCanalReload: "pizzaly-reload",

		toogleTestAudio: false
		
      };
  },
  components: {
	  SideMenu,
	  TopBar,
	  WooOrderModal,
	  AlertModal,
	  ChatfuelMsgs
  },
  methods: {
	  initIO(){
		  let ioCon = true;
		  const _this = this;
		  if(typeof io !== 'undefined') {
			  if(io){
				  console.log('io', io);
				  _this.socket = io.connect(SIO_SERVER);
				  _this.socket.on('connect', () =>{
					  console.log('connect io.js');
				  });
				  _this.socket.on(this.socketCanal, (params)=>{
					  console.log('on socket', params)
						_this.loadNuevas();
				  });
				  _this.socket.on(this.socketCanalReload, (params)=>{
					  console.log('on socket', params)
					  console.log('reload');
						location.reload();
				  });
				  
				// ioCon = true;
			  }
		  }
		  return ioCon;
	  },
	  initTicker(){
		  console.log('initTicker');
		  document.getElementById('notificacion').loop = true;
		  setInterval(this.loadNuevas, timerSecs)
	  },
	  loadNuevas(){

		  console.log('tick', this.fTime(new Date()));
		//   alert('ticker');
		  let _this = this;
		WooOrdenes.list({"status": "processing"}, function(res){
			// console.log(res);
			_this.itemsNuevas = res.data;
			// console.log('nuevos', _this.itemsNuevas.length);
			if(_this.itemsNuevas.length > 0){
				// alert("items nuevos");
				AlertModal.methods.showModal();
				_this.playAudio(true);
				
			}else{
				_this.playAudio(false);
			}

			// _this.loadCompletadas();
		});
	  },
	  loadCompletadas(){
		//   alert('ticker');
		  let _this = this;
		WooOrdenes.list({"status": "completed"}, function(res){
			// console.log(res);
			_this.itemsAtendidas = res.data;
		});
	  },

	loadItems(){
		let _this = this;
		this.loadNuevas();
		this.loadCompletadas();
	},
	verOrderModal(row, editable){
		this.verOrder = row;
		this.editable = editable;
		WooOrderModal.methods.showModal(row);
	},
	create(){
		this.$router.push({ name: 'ResOrdenesCreate'});
	},
	edit(id){
		this.$router.push({ name: 'ResOrdenesEdit', params: { ordenId: id } });
	},
	pagar(id){
		this.$router.push({ name: 'ResCheckout', params: { ordenId: id } });
	},
	delet(id){
		let _this = this;
		ResOrdenes.delete(id, function(res){
			toastr.success("Elemento "+res+" ha sido borrado", "Borrado");
			_this.loadItems();
		});
	},
	fDate(rDate){
		let mDate = moment(rDate);
		return mDate.format("YYYY-MM-DD") 
	},
	fTime(rDate){
		let mDate = moment(rDate);
		return mDate.format("HH:mm:ss")
	},
	playAudio(toogle){
		if( toogle ){
			document.getElementById('notificacion').loop = true;
			document.getElementById('notificacion').play();		
		}else{
			document.getElementById('notificacion').pause();
		}
	},
	testAudio(){
		 this.toogleTestAudio = !this.toogleTestAudio;
		 console.log("test audio", this.toogleTestAudio)
		this.playAudio(this.toogleTestAudio);
		
	},
   
  },
};
</script>
