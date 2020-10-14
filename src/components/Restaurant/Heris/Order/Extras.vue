<template>
<div class="row">
    <div class="col-lg-4 pb-2">
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Cebollitas comp.</span>
            </div>
            <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="order.cebollitas"  >
        </div>
        <br>
    </div>
    <div class="col-lg-4 pb-2">
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Cebollitas 1/2 </span>
            </div>
            <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="order.medCebollitas" >
        </div>
        <br>
    </div>
    <div class="col-lg-4 pb-2">
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Bebidas</span>
            </div>
            <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="order.bebidas" >
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Extras',
    props: {
        order: Object
    }
}
</script>