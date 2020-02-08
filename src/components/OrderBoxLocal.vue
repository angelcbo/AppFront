<template>
    <div class="order-box">
        <div class="col">
            <div class="order-title">
                Mesa # {{value.mesa}}
            </div>
            <div class="row order-body" style = "">
                Total: <span>${{value.total}}</span>
            </div>
            <div class="row" style = "justify-content: center">
                <button class="btn btn-primary agregar" style = "max-width: 100%; flex-basis: 150px" type = "button" @click="atenderOrden">Cobrar la Cuenta</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {

    props:['value'],
    
    methods: {
        atenderOrden(){
            this.value.atendido = true;
        },
    }
}

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
      
      .btn.btn-primary.agregar{
        height: 34px;
        width: 25%;
        min-width: 75px;
        max-width: 150px;
      }

      .order-box:hover{
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
      }

      .order-title{
        text-align: center;
        border-bottom: 1px solid lightgrey;
        font-size: 20px;
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