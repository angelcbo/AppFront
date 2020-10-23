<template>
<div class="row">
    <!-- <div class="col-lg-6">
    <h2> {{order.consumo}} </h2>
    </div> -->
    <div class="col-lg-12 pb-2">
        <div class="form-check form-check-inline">
            <input v-model="order.consumo" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="sucursal">
            <label class="form-check-label" for="inlineRadio1">Consumo en local</label>
        </div>
        <div class="form-check form-check-inline">
            <input v-model="order.consumo"  class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="domicilio">
            <label class="form-check-label" for="inlineRadio2"> A Domicilio </label>
        </div>
        <div class="form-check form-check-inline">
            <input v-model="order.consumo"  class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="llevar">
            <label class="form-check-label" for="inlineRadio3"> P/Llevar </label>
        </div>
        <div class="form-check form-check-inline">
            <input v-model="order.consumo"  class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="recoger">
            <label class="form-check-label" for="inlineRadio4"> P/recoger </label>
        </div>
        
    </div>
    
</div>
</template>

<script>
export default {
    name: 'Consumo',
    props: {
        title: String,
        order: Object
    }
}
</script>