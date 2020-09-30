<template>
<div class="col-md-12 mb-5">
	<div class="card">
		<div class="card-body">
			<h3 class="card-title">Mensajes</h3>
			<div class="chatfuel-msgs-lst" > 
			<table class="table">
								<thead>
									<tr>
										<th> Cliente </th>
										<th> Ultimo Mensaje </th>
										<th> Respuesta </th>
										<th> Fecha </th>
										<th> Hora </th>
										<th> Opciones </th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(row, rkey) in objMessages" v-bind:key="rkey" v-bind:class="msgClass(row)" >
									
									<td>{{row.firstName +" "+row.lastName }}</td>
									<td>{{row.search}}</td>
									<td>{{ respuesta(row.msgRes) }}</td>
									<td> {{ fDate(row.lastSeen) }} </td> 
									<td> {{ fTime(row.lastSeen) }} </td> 
								
									<td>
										<div class="btn-group" role="group" aria-label="Basic example">
											<button type="button" class="btn btn-primary waves-effect waves-light" @click="selectMsg(row)"  > Responder </button>
										</div>
									</td>
									</tr>
								</tbody>
							</table>
			</div>

			
		</div>
	</div>
	<chatfuel-msg-modal v-bind:allMessages="sendMessages" v-bind:resMessage="selectedObj" v-on:close="onCloseModal" />
</div>

</template>

<script>

const timeout = 1500;
const timerSecs = 1000*60*1; //milisegundos para revisar

const SIO_SERVER = 'http://socket.branches.com.mx:8080'
const SOCKET_URL = 'http://socket.branches.com.mx:8080/proceso'
const SOCKET_KEY = ''

import moment from 'moment-timezone'

import WooOrdenes from '@/modules/woocommerce/models/WooOrders.js';

import ChatfuelMsgModal from '@/components/Woocommerce/ChatfuelMsgModal.vue';

export default {
  name: 'ChatfuelMsgs',
  props: {
	  socket: Object
  },
  components:{
	  WooOrdenes,
	  ChatfuelMsgModal
  },
  mounted(){
	//   this.socket.on(this.socketCanalMsg, (params)=>{
	// 				  console.log('on socket', params)
	// 				  console.log('mensaje');
	// 			  });
		this.loadData();


  },
  data(){
	  return {
		  socketCanalMsg: "pizzaly-msg",
		  lstMessages: [],
		  objMessages: {},
		  sendMessages: [],
		  selectedObj: {}
	  }
  },
  methods: {
	  initTicker(){
		  console.log('initTicker');
		  document.getElementById('notificacion').loop = true;
		  setInterval(this.loadData, timerSecs)
	  },
	  onCloseModal(){
		  console.log('onclosemodal');
		  this.loadData();
	  },
	  loadData(){
		  const _this = this;
		  WooOrdenes.loadConversacion({}, function(res){
			//   console.log('loadConversacion', res);
				_this.lstMessages = res.data;
				_this.objMessages = {};
				let unread = false;
			  	res.data.forEach(msg => {
					  if( !_this.objMessages[msg["messengerUserId"]] && msg['found'] < 1 ){
						//   _this.objMessages[msg["messengerUserId"] ].push(msg) ;
						if(msg.msgRes && msg.msgRes.length > 1 ){
							unread = true;
						}
						_this.objMessages[msg["messengerUserId"] ] =  msg ;
						console.log('msg', msg);
					  }else if( _this.objMessages[msg["messengerUserId"]] && _this.objMessages[msg["messengerUserId"] ]["_id"] == msg["idRes"] ){
						//   console.log('fla ',_this.objMessages[msg["messengerUserId"] ], msg )
						  _this.objMessages[msg["messengerUserId"] ]["idRes"] = msg["idRes"]
						   _this.objMessages[msg["messengerUserId"] ]["msgRes"] = msg["msgRes"]
					  }
					  
				  });
				  
				  if(unread){
						// alert("items nuevos");
						// AlertModal.methods.showModal();
						document.getElementById('notificacion').play();
					}else{
						// document.getElementById('notificacion').pause();
					}

				console.log('messanges', _this.lstMessages);
				console.log('messages', _this.objMessages);
				
		  });
	  },
	  selectMsg(msgObj){
			// console.log('select', msgObj);
		 const _this = this; 
		  _this.sendMessages = [];
		  _this.selectedObj = msgObj;
		  _this.lstMessages.forEach(element => {
			  console.log('element', element.messengerUserId)
			  if(element.messengerUserId == msgObj.messengerUserId){
				  _this.sendMessages.push(element);
			  }
		  });
			console.log(" usr messages ", _this.sendMessages)
		  ChatfuelMsgModal.methods.showModal();
		//   this.selectedObj = msgObj;
	  },
	  
	  fDate(rDate){
		let mDate = moment.utc(rDate);
		return mDate.tz("Mexico/General").format("YYYY-MM-DD") 
	},
	fTime(rDate){
		let mDate = moment.utc(rDate);
		return mDate.tz("Mexico/General").format("HH:mm:ss")
	},
	respuesta(key){
		const responses = {
              "5f1522d4a08b761ad537c176": "a sus ordenes",
			   "5f1522ec544ef312f2946b01": "desea agregar algo más",
			  "5f15230a544ef312f29499de": "domicilio y telefono por favor",
			  "5f152324a08b761ad5384dd7": "estamos preparando su peidod",
			  "5f15233d79667652a5cd6522": "su pedido llega en aproximadamente",
			  "5f15236279667652a5cda7dd": "total de su pedido"
		  }
		  return responses[key];
	},
	msgClass(row){
		const lastseen = moment.utc(row.lastSeen ).tz("Mexico/General").add(12, 'h').format("X");
		const now = moment().tz("Mexico/General").format("X");
		console.log(lastseen, now);
		if( row.msgRes || now > lastseen ){
			return "table-success"
		}else{
			return "table-warning"
		}
		
	}


  },
};
</script>

<style>
	.chatfuel-msgs-lst{
		height: 200px;
		overflow-y: scroll;
	}
</style>