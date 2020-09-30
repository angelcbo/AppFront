<template>
<div class="modal" tabindex="-1" role="dialog" id="orderModal">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel"> Orden # {{ orderHeader }} </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button>
        </div>
        <div class="modal-body">
            <div >
												
                                                <div class="form-row">
													<div class="col-md-4 mb-3">
														<label for="validationCustom01" class="active">Nombre</label>
														<input type="text" class="form-control" id="validationCustom01" placeholder="Nombre" value="Mark" required="" v-model="name" >
														<div class="valid-feedback">
															Looks good!
														</div>
													</div>
													
                                                    <div class="col-md-4 mb-3">
														<label for="validationCustom02" class="active">Teléfono</label>
														<input type="text" class="form-control" id="validationCustom02" placeholder="Apellido" value="Otto" required="" v-model="order.billing.phone">
														<div class="valid-feedback">
															Looks good!
														</div>
													</div>
												</div>
												<div class="form-row">
													<div class="col-md-6 mb-3">
														<label for="validationCustom03" class="active">Dirección</label>
														<input type="text" class="form-control" id="validationCustom03" placeholder="City" required="" v-model="order.billing.address_1">
														<div class="invalid-feedback">
															Please provide a valid city.
														</div>
													</div>
													<div class="col-md-6 mb-3">
														<label for="validationCustom04" class="active">Referencia</label>
														<input type="text" class="form-control" id="validationCustom04" placeholder="State" required="" v-model="order.billing.address_2">
														<div class="invalid-feedback">
															Please provide a valid state.
														</div>
													</div>
												</div>

												<div class="form-row">
													<div class="col-md-12 mb-3">
														<label for="validationCustom03" class="active">Notas</label>
														<input type="text" class="form-control" id="validationCustom03" placeholder="City" required="" v-model="orderNotes">
														<div class="invalid-feedback">
															Please provide a valid city.
														</div>
													</div>
												</div>
												
								<div class="row">
						<div class="col-md-12">
							<div class=" text-center">
								<div class="card-header">
									<ul class="nav nav-tabs card-header-tabs" id="myTab-6" role="tablist">
										<li class="nav-item">
											<a class="nav-link active" href="#tab-6-1" data-toggle="tab" role="tab" aria-controls="tab-6-1" aria-selected="true">Pedido</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="#tab-6-2" data-toggle="tab" role="tab" aria-controls="tab-6-2" aria-selected="false">Conversación</a>
										</li>
									</ul>
								</div>
								<div class="card-body">
									<div class="tab-content" id="myTabContent-6">
										<div id="tab-6-1" class="tab-pane fade show active" role="tabpanel" aria-labelledby="tab-6-1">
									
        <table class="table table-striped">
												<thead>
													<tr>
														<th>#</th>
														<th> Producto </th>
														<th> Precio </th>
														<th>Cant.</th>
                                                        <th>Total.</th>
													</tr>
												</thead>
												<tbody>
													<tr v-for="item, idx in order.items" v-bind:key="item.id"  >  
                                                        <td> {{idx+1 }} </td>
														<td>{{ prodInfo(item) }}</td>
														<td>{{item.price}}</td>
														<td>{{item.quantity}}</td>
														<td> {{item.total}} </td>
													</tr>
                                                    <tr>
                                                        <td> </td>
                                                        <td> </td>
                                                        <td> </td>
                                                        <th> A Pagar </th>
														<td> {{order.total}} </td>
                                                    </tr>
													
												</tbody>
											</table>


										</div>
										<div id="tab-6-2" class="tab-pane fade" role="tabpanel" aria-labelledby="tab-6-2">
										
 <table class="table table-striped">
												<thead>
													<tr>
														<th>#</th>
														<th> Hora </th>
														<th> Mensaje </th>
													</tr>
												</thead>
												<tbody>
													<tr v-for="item, idx in conversacion"   >  
                                                        <td> {{idx+1 }} </td>
														<td>{{ msgTime(item.lastSeen) }}</td>
														<td>{{item.search}}</td>
													</tr>
                                                   
													
												</tbody>
											</table>

										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
												
                                        

											</div>
										</div>
        
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary waves-effect waves-light" data-dismiss="modal">Cerrar</button>
            <button v-show="editable" type="button" class="btn btn-primary waves-effect waves-light" @click="changeStatus" > Atendido </button>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import WooOrdenes from '@/modules/woocommerce/models/WooOrders.js';

import moment from 'moment-timezone'

export default {
  name: 'OrderModal',
  props: {
    order: Object,
    editable: Boolean
  },
  watch: { 
	order: function(newOrder, oldVal) { // watch it
		this.name = newOrder.billing.first_name + " " + newOrder.billing.last_name;
		const muId = newOrder.billing.email.split("@")[0];
		if( !isNaN(muId) ){
			this.origen = "Facebook";
			this.facebookId = muId;
		}else{
			this.origen = "Web";
		}
		const t = this;
		WooOrdenes.loadConversacion({messengerUserId: muId},function(res){
			// console.log('cov', res)
			t.conversacion = res.data;
		});
		this.orderNotes = newOrder.customer_note;
		
		this.setOrderHeader();
		
		}
	},
  data(){
      return{
		  origen: "web",
		  facebookId: "N/A",
		  conversacion: [],
		  orderHeader: "",
		  name: "",
		  orderNotes: ""
      }
  },
  methods: {
	  setOrderHeader(){
		  	const mDate = moment(this.order.created);
	 
		  	const orderCreated = mDate.format("YYYY-MM-DD HH:mm:ss");
			this.orderHeader = this.order.id+" "+orderCreated;
	  },
    showModal(row) {

	  $('#orderModal').modal('show');

    },
    changeStatus(){
		const t = this;
		t.editable = false;
		WooOrdenes.save({id: t.order.id, status: "completed"}, t.notificacion );
		// t.notificacion();
	},
	notificacion(){
		const t = this;
		// console.log("billing", t.order.billing.email.split("@")[0]);
		// const muId = t.order.billing.email.split("@")[0];
		// if( muId ){
		// 	WooOrdenes.servedNotification({messengerUserId: muId },res => {
            
		// 	t.$emit('update', muId);
			
		// 	});
			
		// }
		$('#orderModal').modal('hide');
		
	},
	msgTime(time){
		const mDate = moment.utc(time).tz( "Mexico/General");
	 
		return mDate.format("YYYY-MM-DD HH:mm:ss");
		
	},
	prodInfo(prod){
		// console.log('prod', prod);
		let prodName = prod.name;
		prod.meta_data.forEach(md => {
			prodName += " " + md.value;
		});
		return prodName;
	}
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .alert-warning{
        margin-bottom: 0px;
    }
</style>
