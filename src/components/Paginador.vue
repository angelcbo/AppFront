<template>
    <div class="row">
        <div class="col-sm-12 col-md-5">
            <div class="dataTables_info" id="datatable-1_info" role="status" aria-live="polite">Mostrando {{begin}} to {{end}} of {{count}} elementos</div>
        </div> <!--col-sm-12 col-md-5 -->
        <div class="col-sm-12 col-md-7">
            <div class="dataTables_paginate paging_simple_numbers" id="datatable-1_paginate">
                <ul class="pagination">
                    <li class="paginate_button page-item previous" :class="disabledLast" id="paginador_previous">
                    <a @click="anterior" class="page-link"   >Anterior</a>
                    </li>
                    <li v-for="p in pages"  class="paginate_button page-item active"><a @click="goToPage(p)" aria-controls="datatable-1" data-dt-idx="1" tabindex="0" class="page-link"> {{p}} </a></li>
                    <!-- <li class="paginate_button page-item "><a href="#" aria-controls="datatable-1" data-dt-idx="2" tabindex="0" class="page-link">2</a></li> -->
                    <li class="paginate_button page-item next" :class="disabledNext" id="paginador_next"><a @click="siguiente" class="page-link" >Siguiente</a></li>
                </ul>
            </div> <!-- datatable-1_previous -->
        </div> <!--col-sm-12 col-md-7 -->
    </div> <!-- row -->
</template>

<script>
export default {
  name: 'Paginador',
  props: {
      page: Number,
      size: Number,
      count: Number,
      countItems: Number
  },
  watch:{
        'countItems'(){
            let modificador = (this.page-1)*this.size;
            this.end = modificador + this.countItems;
            this.begin = modificador + 1;
        }
    },
  data(){
      return{
          begin: 0,
          end: 0,
          pages:[]
      }
  },
  computed:{
        totalPages(){
            return Math.ceil(this.count/this.size);
        }
  },
  methods:{
        // disabledLast () {
        //     return false;//!this.page > 1;
        // },
        // disabledNext () {
        //     const limitPages = this.countItems / this.size + 1;
        //     return false;//!this.page < limitPages;
        // },
        disabledLast (){
            return '';
        },
        disabledNext(){
            return '';
        },
      siguiente(){
          this.goToPage(this.page + 1);
      },
      anterior(){
          this.goToPage(this.page - 1);
      },
      goToPage(nuPage){
          if( nuPage > 0 && nuPage <= this.totalPages )
            this.$emit('change', nuPage);
      },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>