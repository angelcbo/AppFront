<template>
<div class="row">
    <div class="col-lg-12">
    <h2> Consumo </h2>
    </div>
    <div class="col-lg-12">
        <div class="form-check form-check-inline">
            <input v-model="order.consumo" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="sucursal">
            <label class="form-check-label" for="inlineRadio1">Consumo en local</label>
        </div>
        <div class="form-check form-check-inline">
            <input v-model="order.consumo"  class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="domicilio">
            <label class="form-check-label" for="inlineRadio2"> A Domicilio </label>
        </div>
        <div class="form-check form-check-inline">
            <input v-model="order.consumo"  class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="llevar">
            <label class="form-check-label" for="inlineRadio2"> P/Llevar </label>
        </div>
        <div class="form-check form-check-inline">
            <input v-model="order.consumo"  class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="recoger">
            <label class="form-check-label" for="inlineRadio2"> P/recoger </label>
        </div>
        
    </div>
    
</div>
</template>

<script>
export default {
    name: 'Consumo',
    props: {
        order: Object
    }
}
</script>