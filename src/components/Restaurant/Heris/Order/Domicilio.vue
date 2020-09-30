<template>
    <div class="col-lg-12">
        <div class="form-row">
            <div class="col-md-4 mb-3">
                <label for="validationCustom01" class="active"> Teléfono </label>
                <input type="text" class="form-control" id="validationCustom01" placeholder="Teléfono" >
              
            </div>
            <div class="col-md-8 mb-3">
                <label for="validationCustom02" class="active">Nombre</label>
                <input type="text" class="form-control" id="validationCustom02" placeholder="Nombre" >
               
            </div>
        </div>
        <div class="form-row">
            <div class="col-md-4 mb-3">
                <label for="validationCustom03" class="active">Calle</label>
                <input v-model="order.domicilio.calle" type="text" class="form-control" id="validationCustom03" placeholder="City" required="">
            </div>
            <div class="col-md-4 mb-3">
                <label for="validationCustom04" class="active">Colonia</label>
                <input v-model="order.domicilio.colonia" type="text" class="form-control" id="validationCustom04" placeholder="State" required="">

            </div>
            <div class="col-md-2 mb-3">
                <label for="validationCustom05" class="active">Num Ext</label>
                <input v-model="order.domicilio.numExt" type="text" class="form-control" id="validationCustom05" placeholder="Zip" required="">

            </div>
            <div class="col-md-2 mb-3">
                <label for="validationCustom05" class="active">Num int</label>
                <input v-model="order.domicilio.numInt" type="text" class="form-control" id="validationCustom05" placeholder="Zip" required="">

            </div>
        </div>
        <div class="form-row">
            <div class="col-md-6 mb-3">
                <label for="validationCustom01" class="active"> Entre calles </label>
                <input v-model="order.domicilio.entreCalles" type="text" class="form-control" id="validationCustom01" placeholder="Teléfono" >
              
            </div>
            <div class="col-md-6 mb-3">
                <label for="validationCustom02" class="active">Referencia</label>
                <input v-model="order.domicilio.referencia" type="text" class="form-control" id="validationCustom02" placeholder="Nombre" >
               
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Domicilio',
    props: {
        order: Object
    }
}
</script>