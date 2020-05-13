<template>

<div>
    <!-- Modal -->
    <div class="modal fade" id="proveedorModal" tabindex="-1" role="dialog" aria-labelledby="proveedorModalTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="proveedorModalTitle"> Proveedor </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <input type="text" class="cep form-control" placeholder="" v-model="filterValue" @keyup="searchInList" >
            <ul class="list-group">
                <li class="list-group-item" v-for="(rProv, idx) in items" v-bind:value="rProv.rfc"  ><a @click="setItemVaule(idx)">
                    {{ rProv.rfc+' '+rProv.nombre}}
                    </a>
                </li>
            </ul>
        </div>
        <div class="modal-footer">
            <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button> -->
        </div>
        </div>
    </div>
    </div>
</div>

</template>


<script>
import DatosFis from '@/modules/cxp/models/DatosFisModel.js';

// import Faker from 'faker';

export default {
  name: 'modalProveedor',
  props: [
    'rfc',
    'showProv',
  ],
  data() {
    // console.log("alimentoId ",this.alimentoId)
    return {
      debug: process.env.VUE_APP_DEV,
      items: [],
      itemValue: '',
      filterValue: '',
    };
  },
  mounted() {
    console.log('mounted');
    const _this = this;
    DatosFis.list({}, (res) => {
      _this.items = res.data.items;
    });
  },
  methods: {
    list() {
      return this.items;
    },
    showModal() {
      $('#proveedorModal').modal('show');
    },
    setItemVaule(idx) {
      // this.itemValue = nuVal;
      this.$emit('change', this.items[idx]);
      $('#proveedorModal').modal('hide');
      this.filterValue = '';
      this.searchInList();
    },
    searchInList() {
      const _this = this;
      DatosFis.list({ search: _this.filterValue }, (res) => {
        _this.items = res.data.items;
      });
    }, // end searchInList
  },
};
</script>
