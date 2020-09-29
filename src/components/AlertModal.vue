<template>
<div class="modal" tabindex="-1" role="dialog" id="alertModal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header alert " v-bind:class="tipo">
        <div>
            <h2>{{msg}}</h2>
        </div>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'AlertModal',
  props: {
    msg: String,
    tipo: String,
  },
  methods: {
    showModal() {
      $('#alertModal').modal('show');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .alert-warning{
        margin-bottom: 0px;
    }
</style>
