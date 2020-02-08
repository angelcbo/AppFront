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