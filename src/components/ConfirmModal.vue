<template>
<div class="modal" tabindex="-1" role="dialog" id="confirmModal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>{{msg}}.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal" > Cancelar </button>
        <button type="button" class="btn btn-primary" @click="onAccept" > Aceptar </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>

let aCallback = function(res){};

export default {
  name: 'ConfirmModal',
  props: {
    msg: String,
  },
  methods: {
    showModal(acceptCallback) {
        aCallback = acceptCallback;
      $('#confirmModal').modal('show');
    },
    onAccept(){
        aCallback(true);
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
