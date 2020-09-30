<template>
<div class="modal" tabindex="-1" role="dialog" id="chatfuelMsgModal">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel"> header </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button>
        </div>
        <div class="modal-body">
            <!-- modal-body -->
<div class="col-md-12 m-3">
    <div v-for="msg in allMessages" >
        {{ fDatetime(msg.lastSeen) }} {{ mensaje( msg ) }}
    </div>
</div>
<div class="col-md-12 m-3">

									
				<div class="form-inline">
					<button @click="mensajeResp( respuestas['ordenes'] )" type="button" class="mb-2 btn btn-primary btn-lg waves-effect waves-light">A sus ordenes</button>
						<button @click="mensajeResp( respuestas['agregar'] )" type="button" class="mb-2 btn btn-primary btn-lg waves-effect waves-light">¿Desea agregar algo más?</button>
						<button @click="mensajeResp( respuestas['domicilio'] )" type="button" class="mb-2 btn btn-primary btn-lg waves-effect waves-light">Domicilio y teléfono, porfavor</button>
						<button @click="mensajeResp( respuestas['preparando'] )" type="button" class="mb-2 btn btn-primary btn-lg waves-effect waves-light">Estamos preparando su pedido</button>	
				</div>
				<div class="form-inline">
													<button @click="mensajeResp( respuestas['tiempo'] )" type="button" class="btn btn-primary btn-lg mb-2 waves-effect waves-light"> Su pedido llega en aproxiadamente </button>
													<label class="sr-only active" for="inlineFormInputName2">Tiempo</label>
													<div  class="input-group mb-2 mr-sm-2">
									
														<input v-model="tiempo" type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="40">
														<div class="input-group-prepend">
															<div class="input-group-text">min</div>
														</div>
													</div>
													<label class="sr-only active" for="inlineFormInputGroupUsername2">Total</label>
													<div class="input-group mb-2 mr-sm-2">
														<div class="input-group-prepend">
															<div class="input-group-text">$</div>
														</div>
														<input v-model="total" type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="0.00">
													</div>

													

													<button @click="mensajeResp( respuestas['total'] )" type="button" class="btn btn-primary btn-lg mb-2 waves-effect waves-light">Total de su pedido</button>
												</div>
			</div>


            <!-- end modal-body -->
        </div>
        
        <div class="modal-footer">
           
        </div>
    </div>
  </div>
</div>
</template>

<script>
import WooOrdenes from '@/modules/woocommerce/models/WooOrders.js';

import moment from 'moment-timezone'

export default {
  name: 'chatfuelMsgModal',
  props: {
    allMessages: Array,
    resMessage: Object
  },
  watch: { 
	allMessages: function(newMessages, oldVal) { // watch it
        
		
        },
    resMessage: function(newObj, oldObj){
            this.messengerUserId = newObj.messengerUserId;
            this.lastSeen = newObj.lastSeen;
            this.lastId = newObj._id;
        }
	},
  data(){
      return{
          userMessages: [],
          messengerUserId: "",
          lastId: "",
          tiempo: "",
          total: "",
		  respuestas: {
			  "ordenes": "5f1522d4a08b761ad537c176",
			  "agregar": "5f1522ec544ef312f2946b01",
			  "domicilio": "5f15230a544ef312f29499de",
			  "preparando": "5f152324a08b761ad5384dd7",
			  "tiempo": "5f15233d79667652a5cd6522",
			  "total": "5f15236279667652a5cda7dd"
		  },
      }
  },
  methods: {
      
      showModal(row) {

        $('#chatfuelMsgModal').modal('show');
        document.getElementById('notificacion').pause();
        },
        mensajeResp(blockId){
            const _this = this;
            $('#chatfuelMsgModal').modal('hide');
		  console.log("mensaje", this.messengerUserId, blockId);
		  WooOrdenes.mensajeRespuesta({messengerUserId: this.messengerUserId, lastSeen: this.lastSeen, chatfuelBlockId: blockId, _id: this.lastId, msgRes:blockId, pedidoTiempo:this.tiempo, pedidoTotal: this.total},function(res){
              _this.$emit('close');
		  });
      },
      mensaje(obj){
          const responses = {
              "5f1522d4a08b761ad537c176": "a sus ordenes",
			   "5f1522ec544ef312f2946b01": "desea agregar algo más",
			  "5f15230a544ef312f29499de": "domicilio y telefono por favor",
			  "5f152324a08b761ad5384dd7": "estamos preparando su peidod",
			  "5f15233d79667652a5cd6522": "su pedido llega en aproximadamente",
			  "5f15236279667652a5cda7dd": "total de su pedido"
          }
          if(obj.search){
              return obj.search;
          }else{
              return responses[obj.msgRes];
          }
      },
      fDatetime(rDate){
		let mDate = moment.utc(rDate);
        return mDate.tz("Mexico/General").format("YYYY-MM-DD HH:mm:ss");
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .alert-warning{
        margin-bottom: 0px;
    }
</style>
