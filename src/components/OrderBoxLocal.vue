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

</style>