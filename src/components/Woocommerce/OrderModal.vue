<template>
<div class="modal" tabindex="-1" role="dialog" id="orderModal">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel"> Orden # {{order.id}}  {{order.created}} </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button>
        </div>
        <div class="modal-body">
            <div >
												<div class="form-row">
													<div class="col-md-4 mb-3">
														<label for="validationCustom01" class="active">Fecha</label>
														<input type="text" class="form-control" id="validationCustom01" placeholder="Nombre" value="Mark" required="" v-model="order.created" >
														<div class="valid-feedback">
															Looks good!
														</div>
													</div>
												</div>
                                                <div class="form-row">
													<div class="col-md-4 mb-3">
														<label for="validationCustom01" class="active">Nombre</label>
														<input type="text" class="form-control" id="validationCustom01" placeholder="Nombre" value="Mark" required="" v-model="order.billing.first_name" >
														<div class="valid-feedback">
															Looks good!
														</div>
													</div>
													<div class="col-md-4 mb-3">
														<label for="validationCustom02" class="active">Apellido</label>
														<input type="text" class="form-control" id="validationCustom02" placeholder="Apellido" value="Otto" required="" v-model="order.billing.last_name">
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
														<td>{{item.name}}</td>
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


export default {
  name: 'OrderModal',
  props: {
    order: Object,
    editable: Boolean
  },
  data(){
      return{
      }
  },
  methods: {
    showModal() {
      $('#orderModal').modal('show');
    },
    changeStatus(){
        WooOrdenes.save({id: this.order.id, status: "completed"} ,res => {
            $('#orderModal').modal('hide');
            this.$emit('update', this.order.id);
        });
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
