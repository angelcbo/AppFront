<template>
<div class ="row">
    <div class="col-lg-12">
        <h2> {{ordenRows.title}} </h2>
        <alert v-bind:containerid="alertId"/>
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th v-for="(tag, idx) in ordenRows.tags" > {{tag}} </th>
                        <th> Opciones </th>
                    </tr>
                </thead>
                <tbody>
                    <!-- <tr v-for="(trow, idx) in ordenRows.rows" v-bind:key="idx" >
                        <th scope="row">
                            {{idx}}
                        </th>
                        <td>
                            <div class="form-row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="#" v-model="trow.asada.sq"  >
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="c/q" v-model="trow.asada.cq">
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="form-row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="#" v-model="trow.pastor.sq" >
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="#" v-model="trow.pastor.cq">
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="form-row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="#" v-model="trow.molleja.sq" >
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="c/q" v-model="trow.molleja.cq" >
                                </div>
                            </div>
                        </td>
                        <td>
                            <button type="button" class="btn btn-secondary btn-lg waves-effect waves-light" @click="removeRow(idx)" > Eliminar </button>
                        </td>
                    </tr> -->
                    <!-- add row -->
                    <tr>
                        <th scope="row"></th>
                        <td v-for="(tag, idx) in ordenRows.tags" >  
                            <div class="form-row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="#" v-model="rowValues[idx]" @keyup.enter="addRow" >
                                </div>
                                <div v-show="hasCQueso()" class="col">
                                    <!-- <input type="text" class="form-control" placeholder="c/q" v-model="nuTacos.asada.cq" @keyup.enter="addRow"> -->
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" class="custom-control-input" v-bind:id="'nu-'+ordenRows.title+'-'+tag+'-'+idx" v-model="rowValuesQueso[idx]">
                                        <label class="custom-control-label" v-bind:for="'nu-'+ordenRows.title+'-'+tag+'-'+idx" > C/Q </label>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <button type="button" class="btn btn-secondary btn-lg waves-effect waves-light" @click="addRow" > Agregar </button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
</div>
</template>
<script>

import Alert from '@/components/Alert.vue'; 

export default {
    name: 'Row',
    components:{
        Alert
    },
    props: {
        ordenRows: Object,
        alertId: String
    },
    data(){
        return{
            rowValues:[0,0,0,0,0],
            rowValuesQueso: [false, false, false, false, false],
            comensal: 1
        }
    },
    methods:{
        addRow(){
            const _this = this;
            let empty = true;
            this.rowValues.forEach(function(val, i){
                console.log(i, _this.rowValuesQueso );
                let isQueso = _this.rowValuesQueso[i] && _this.ordenRows.cqueso ? 1 : 0;
                let alimentoId = _this.ordenRows.alimentoIds[i];
                if( parseInt(val) > 0 ){
                    empty = false;
                    let nuItem = {
                        "cantidad": parseInt(val),
                        "comensal": _this.comensal,
                        "alimentoId": alimentoId[isQueso]
                    }
                    console.log(nuItem);
                    _this.$emit('addRow', nuItem);
                }      
            });
            if( !empty ){
                _this.comensal++;
                Alert.methods.showAlertTimeout(this.alertId, "Agregado");
            }
            _this.clearForm();

                
        },
        clearForm(){
            this.rowValues = [0,0,0,0,0];
            this.rowValuesQueso = [false, false, false, false, false];
        },
        removeRow(idx){

        },
        hasCQueso(){
            console.log("hasqueso", this.ordenRows.cqueso, this.ordenRows.title);
            return this.ordenRows.cqueso;
        }
    }
}
</script>