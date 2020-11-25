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
       
    </div>
</template>

<script>
export default {
    name: 'Recoger',
    props: {
        order: Object
    }
}
</script>