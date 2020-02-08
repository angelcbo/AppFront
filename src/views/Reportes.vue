<template>
    <div class="row">
        <SideMenu v-bind:slt="6"/>
        <div class="right-column">
            <TopBar />
            <main class="main-content p-5" role="main">
		        <div class="row">
                    <div class="col-md-12">
                        <h1>Platillos</h1>
                    </div>
                </div>
                <div class="col">
                    <div class = "col-lg-12">
                        <div class="card">
                            <div class="card-header">
                                Agregar Platillos
                                <p class="task-list-stats">
                                    <span class="task-list-total">{{ this.platillos.length }}</span> platillo(s).
                                </p>
                            </div>
                            <div class="card-body">
                                <form>
                                    <div class="grid-layout">
                                        <div class = "col" style="padding-right: 7px;">
                                            <input type="text" class="form-control" id="add-nombre" style="width: 100%" placeholder="Nombre" v-model="platNombre">
                                        </div>
                                        <div class = "col form" style = "flex-grow: 2;">
                                            <input type="text" class="form-control" id="add-desc" style="width: 100%" placeholder="Descripción" v-model="platDescripcion">
                                        </div>
                                        <div class = "col form">
                                            <div class="input-group mb-2">
												<div class="input-group-prepend">
													<span class="input-group-text">$</span>
												</div>
												<input type="number" class="form-control" id = "add-precio" aria-label="Amount (to the nearest dollar)" placeholder="Precio" v-model="platPrecio">
											</div>
                                        </div>
                                        <div class = "col form">
                                            <div class="input-group">
                                                <select class="custom-select" id="add-cat" style="height: 34px; border-radius: 5px;" v-model="platCategoria">
                                                    <option selected>Categoría</option>
                                                    <option :key="i" v-for="(item, i) in categorias">{{item.nombre}}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col" style="display: inline-flex; justify-content: flex-end; padding-left: 7px;">
                                            <button class="btn btn-primary agregar" type = "button" style="width: 75%" @click="agregarPlatillo()">Agregar</button>
                                        </div>
                                    </div>
                                </form>
                                <div class="col-lg-12">
                                    <table class="table table-bordered" style="margin-top: 15px; max-height: 350px;">
                                        <thead>
                                            <tr>
                                                <th scope="col" width = "35px">#</th>
                                                <th scope="col" width = "15%">Platillo</th>
                                                <th scope="col" width = "35%">Descripción</th>
                                                <th scope="col" width = "15%">Precio</th>
                                                <th scope="col" width = "20%">Categoría</th>
                                                <th scope="col">Opciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr :key="i+10" v-for="(item, i) in platillos">
                                                <th scope="row">{{i+1}}</th>
                                                <td v-if="!item.editando">{{ item.platillo.nombre }}</td>
                                                <td v-else><div class="in-table"><input type="text" class="form-control" placeholder="Nombre" :id="'mod-nombre-'+i" :value="item.platillo.nombre"/></div></td>
                                                <td v-if="!item.editando">{{ item.platillo.descripcion }}</td>
                                                <td v-else><div class="in-table"><input type="text" class="form-control" placeholder="Descripción" :id="'mod-desc-'+i" :value="item.platillo.descripcion"/></div></td>
                                                <td v-if="!item.editando">{{ item.platillo.precio }}</td>
                                                <td v-else><div class="in-table"><input type="number" class="form-control" placeholder="Precio" :id="'mod-precio-'+i" :value="item.platillo.precio"/></div></td>
                                                <td v-if="!item.editando">{{item.platillo.categoria}}</td>
                                                <td v-else>
                                                    <div class="in-table"> 
                                                        <div class="input-group">
                                                            <select class="custom-select" :id="'mod-cat-'+i" size="1" :value="item.platillo.categoria">
                                                                <option>Categoría</option>
                                                                <option :key="i" v-for="(item, i) in categorias">{{item.nombre}}</option>
                                                            </select>
                                                        </div> 
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="cont" v-if="!item.editando">
                                                        <button type="button" class="btn btn-primary" style ="flex: 1 1 20px; margin: 1px; padding: 3px 4px; max-width: 50px;" @click="eliminarPlatillo(item.platillo.alimentoId)"><i class="fa fa-trash"></i></button>
                                                        <button type="button" class="btn btn-primary" style ="flex: 1 1 20px; margin: 1px; padding: 3px 4px; max-width: 50px;" @click="function(){item.editando = true}"><i class="fa fa-edit"></i></button>                                             
                                                    </div>
                                                    <div class="cont" v-else>
                                                        <button type="button" class="btn btn-primary" style ="flex: 1 1 20px; margin: 1px; padding: 3px 4px; max-width: 50px;"><i class="fa fa-save"></i></button>
                                                        <button type="button" class="btn btn-primary" style ="flex: 1 1 20px; margin: 1px; padding: 3px 4px; max-width: 50px;" @click="function(){item.editando = false}"><i class="fa fa-times"></i></button>                                             
                                                    </div>                                       
                                                </td> 
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <h1 style="margin-top:15px;">Categorías</h1>
                    </div>
                </div>
                <div class="col">
                    <div class="col-lg-12" style="min-height: 250px">
                        <div class="card">
                            <div class="card-header">
                                Agregar Categoría
                                <p class="task-list-stats">
                                    <span class="task-list-total">{{ this.categorias.length }}</span> categoría(s).
                                </p>
                            </div>
                            <div class="card-body" style = "margin: 0 15%;">
                                <form>
                                    <div class="row">
                                        <div class="col">
                                            <div class="input-group mb-3">                                                   
                                                <input type="text" class="form-control" placeholder="Nombre" id = "add-catt" v-model="addCategoria" aria-label="Agregar" aria-describedby="Agregar una categoría">
                                                <div class="input-group-prepend">
                                                    <button class="btn btn-primary" type="button" style="border-top-right-radius: 5px; border-bottom-right-radius: 5px" @click="agregarCategoria()">Agregar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <table class="table table-bordered" id = "tabla-categorias" style="margin-top: 15px;">
                                    <thead>
                                        <tr>
                                            <th scope="col" width = "35">#</th>
                                            <th scope="col">Categoría</th>
                                            <th scope="col" width = "150">Opciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr :key="i+10" v-for="(item, i) in categorias">
                                            <th is="th" scope="row">{{ i+1 }}</th>
                                            <td v-if="!item.editando">{{ item.nombre }}</td>
                                            <td v-else><input type="text" class="form-control" placeholder="Nombre" id = "add-catt" :value="item.nombre"/></td>
                                            <td>
                                                <div class="cont" v-if="!item.editando">
                                                    <button type="button" class="btn btn-primary" style ="flex: 1 1 20px; margin: 1px; padding: 3px 4px; max-width: 50px;" @click="eliminarCategoria(i)"><i class="fa fa-trash"></i></button>
                                                    <button type="button" class="btn btn-primary" style ="flex: 1 1 20px; margin: 1px; padding: 3px 4px; max-width: 50px;" @click="function(){categorias[i].editando = true}"><i class="fa fa-edit"></i></button>                                             
                                                </div>
                                                <div class="cont" v-else>
                                                    <button type="button" class="btn btn-primary" style ="flex: 1 1 20px; margin: 1px; padding: 3px 4px; max-width: 50px;"><i class="fa fa-save"></i></button>
                                                    <button type="button" class="btn btn-primary" style ="flex: 1 1 20px; margin: 1px; padding: 3px 4px; max-width: 50px;" @click="function(){categorias[i].editando = false}"><i class="fa fa-times"></i></button>                                             
                                                </div>           
                                            </td> 
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>


<script>
// @ is an alias to /src
import SideMenu from '@/components/SideMenu.vue';
import TopBar from '@/components/TopBar.vue';

import Platillo from '@/modules/restaurant/models/ResPlatilloModel.js';

export default {
  name: 'catalogos',
  data() {
      return {
          categorias:[
              {
                  nombre: 'Tacos',
                  editando: false,
              }
          ],
          platillos:[],
          seen: false,
          addCategoria: '',
          platNombre: '',
          platDescripcion: '',
          platPrecio: '',
          platCategoria: 'Categoría',
          screenWidth: 0,
      };
  },
  components: {
      SideMenu,
      TopBar,
  },
  methods: {
      actualizarPlatillos(){
        let _this = this;
        console.log('mounted');
        Platillo.loadAll()
        .then(function (response) {
          console.log(response);
          for(var i = 0; i < response.data.length; i++) {
            _this.platillos.push(
                {
                    platillo: response.data[i], 
                    editando: false,
                }
            );
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      agregarCategoria(){
        if(this.addCategoria == ''){
            alert('Ingresa una categoría');
            return;
        }
        this.categorias.push( {nombre: this.addCategoria, editando: false});
        this.addCategoria = '';
      },
      eliminarCategoria(index){
          this.$delete(this.categorias, index);
      },
      agregarPlatillo(){
        if(this.platNombre == '' || this.platDescripcion == '' || this.platPrecio == ''){
            alert('Ingresa todos los campos');
            return;
        }
        if(this.platCategoria == 'Categoría'){
            if(this.categorias.length == 0){
                alert('Crea una categoria en la parte de abajo');
            }else{
                alert('Selecciona una categoria');
            }
            return;
        }
        if(parseInt(this.platPrecio)<0){
            alert('Ingresa un precio válido');
            return;
        }

        console.log("platillo", this.platNombre, this.platDescripcion, this.platPrecio, this.platCategoria);
        let params = {
            model: "",
            data:{ nombre: this.platNombre, slug: this.platNombre, precio: this.platPrecio, categoria: this.platCategoria, descripcion: this.platDescripcion }
        };
        let _this = this;
        Platillo.save(params)
        .then(function (response) {
            console.log(response);
            _this.actualizarPlatillos();
        })
        .catch(function (error) {
            console.log(error);
        });
        this.platNombre = '';
        this.platDescripcion = '';
        this.platPrecio = '';
        this.platCategoria = 'Categoría';
      },
      eliminarPlatillo(idAlimento){
          console.log('del platillo ',idAlimento);
          let params = {
            model: "",
            data:{ id: idAlimento }
          };
          let _this = this;
          Platillo.delete(params)
          .then(function (response) {
            console.log(response);
            _this.actualizarPlatillos();
          })
          .catch(function (error) {
              console.log(error);
          });
      },
  },
  mounted() {
        let _this = this;
        console.log('mounted');
        Platillo.loadAll()
        .then(function (response) {
          console.log(response);
          for(var i = 0; i < response.data.length; i++) {
            _this.platillos.push(
                {
                    platillo: response.data[i], 
                    editando: false,
                }
            );
          }
        })
        .catch(function (error) {
          console.log(error);
        });
  },
};
</script>

<style scoped>
    .grid-layout{
        display: grid;
        grid-template-columns: 1fr 2fr 1fr 1fr .2fr;
        grid-template-rows: 1fr;
    }

    .col.form{
        padding: 0 7px;
    }

    td > .form-control{
        line-height: 1;
    }

    .xp{
        display: block;
        margin-top: auto;
        margin-bottom: auto;
        width: 120px; 
        overflow: auto;
      }

      .cont{
        display: flex;
        flex-direction: row;
        align-items: stretch;
        justify-content: space-around;
        min-width: 150px;
      }

      .in-table{
        display: grid;
        grid-template-columns: auto;
      }

      .in-table > .form-control, .in-table > .input-group > .custom-select{
        width: 100%;
        line-height: 1;
      }

      .btn.btn-primary.agregar{
        height: 34px;
        width: 25%;
        min-width: 75px;
        max-width: 150px;
      }
</style>