<template>
    <div class="order-box entrega">
        <div class="col">
            <div class="order-title">
                Orden # {{value.id}}
            </div>
            <div class="row order-body">
                Colonia: <span>{{value.colonia}}</span>
            </div>
            <div class="row order-body">
                Calle: <span>{{value.calle}}</span>
            </div>
            <div class="row order-body">
                Total: <span>${{value.total}}</span>
            </div>
        </div>
    </div>
</template>

<script>

export default {

  props: ['value'],

  methods: {
    atenderOrden() {
      this.value.atendido = true;
    },
  },
};

</script>

<style scoped>
    .order-box{
        width: 20%;
        height: 15%;
        border: 1px solid lightgrey;
        border-radius: 5px;
        border-collapse: collapse;
        padding: 10px;
        min-width: 150px;
        min-height: 75px;
        max-width: 220px;
        margin: 25px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 3px 10px 0 rgba(0, 0, 0, 0.06);
        transition-property: box-shadow;
        transition-duration: .7s;
      }

      .order-box:hover{
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
      }

      .order-title{
        text-align: center;
        border-bottom: 1px solid lightgrey;
        font-size: 20px;
      }

      .btn.btn-primary.agregar{
        height: 34px;
        width: 25%;
        min-width: 75px;
        max-width: 150px;
      }

      .row.order-body{
        justify-content: space-between;
        margin: 15px 0;
        font-size: 16px
      }

      .order-box.entrega{
        min-width: 220px;
        min-height: 75px;
        max-width: 350px;
      }
</style>
