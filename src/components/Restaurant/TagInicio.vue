<template>
    <div class="col-md-6 col-lg-6 col-xl-3 mb-5">
        <div class="card card-tile card-xs bg-gradient text-center" :class="[value.Color]" style="border: 0 solid black">
            <div class="card-body p-4">                            
                <div class="tile-left">
                    <i :class="[value.Icon]"></i>
                </div>
                <div class="tile-right">
                    <div class="tile-number">{{value.TileNumber}}</div>
                    <div class="tile-description">{{value.Description}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['value'],                          
}
</script>

<style scoped>

</style>