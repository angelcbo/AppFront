<template>

<div>
    <!-- Button trigger modal -->
    <!-- Modal -->
    <div class="modal fade" id="bancoModal" tabindex="-1" role="dialog" aria-labelledby="bancoModalTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="bancoModalTitle"> Bancos </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Buscar..." aria-label="Buscar..." aria-describedby="basic-addon2" v-model="filterValue" @keyup="searchInList">
              <div class="input-group-append">
                <button class="btn btn-primary waves-effect waves-light" type="button" @click="searchInList" > Buscar </button>
              </div>
            </div>
            <ul class="list-group">
                <li class="list-group-item" v-for="(rBanco, idx) in items" v-bind:value="rBanco.idBanco"  ><a @click="setItemVaule(idx)">
                    {{rBanco.nombreCorto}}
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
import CxpBanco from '@/modules/cxp/models/CxpBancoModel.js';

// import Faker from 'faker';

export default {
  name: 'modalBanco',
  props: [
    'bancoId',
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
    CxpBanco.list({}, (res) => {
      _this.items = res.data.items;
    });
  },
  methods: {
    showModal() {
      $('#bancoModal').modal('show');
    },
    setItemVaule(idx) {
      this.$emit('change', this.items[idx]);
      $('#bancoModal').modal('hide');
      this.filterValue = '';
      this.searchInList();
    },
    searchInList() {
      const _this = this;
      CxpBanco.list({ search: _this.filterValue }, (res) => {
        _this.items = res.data.items;
      });
    },
  },
};
</script>

<style scoped>
    .modal ul li a{
        cursor: pointer;
    }
</style>