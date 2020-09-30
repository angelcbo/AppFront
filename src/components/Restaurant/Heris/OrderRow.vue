<template>
<div class ="row">
    <div class="col-lg-12 pb-5">
        <h2> Tacos </h2>
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>T. Asada</th>
                        <th>T. pastor</th>
                        <th>T. molleja</th>
                        <th> Opciones </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(trow, idx) in orden.tacos" v-bind:key="idx" >
                        <th scope="row">
                            {{idx}}
                        </th>
                        <td>
                            <div class="form-row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="s/q" v-model="trow.asada.sq"  >
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="c/q" v-model="trow.asada.cq">
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="form-row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="s/q" v-model="trow.pastor.sq" >
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="c/q" v-model="trow.pastor.cq">
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="form-row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="s/q" v-model="trow.molleja.sq" >
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="c/q" v-model="trow.molleja.cq" >
                                </div>
                            </div>
                        </td>
                        <td>
                            <button type="button" class="btn btn-secondary btn-lg waves-effect waves-light" @click="removeTacosRow(idx)" > Eliminar </button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>
                            <div class="form-row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="s/q" v-model="nuTacos.asada.sq" @keyup.enter="addTacosRow" >
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="c/q" v-model="nuTacos.asada.cq" @keyup.enter="addTacosRow">
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="form-row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="s/q" v-model="nuTacos.pastor.sq" @keyup.enter="addTacosRow">
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="c/q" v-model="nuTacos.pastor.cq" @keyup.enter="addTacosRow">
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="form-row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="s/q" v-model="nuTacos.molleja.sq" @keyup.enter="addTacosRow">
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="c/q" v-model="nuTacos.molleja.cq" @keyup.enter="addTacosRow">
                                </div>
                            </div>
                        </td>
                        <td>
                            <button type="button" class="btn btn-secondary btn-lg waves-effect waves-light" @click="addTacosRow" > Agregar </button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            orden:{
                tacos:[]
            }
        }
    },
    methods:{
        addTacosRow(){
            
        }
    }
}
</script>