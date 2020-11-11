<template>
    <li tabindex="-1"> 
    <div class="special_rectangle">
        <div class="special_header">
            {{ alimento.nombre }}            
        </div>  
        <div class="special_square d-flex flex-row-reverse" v-bind:style="{ 'background-image' : 'url('+ require('../../../../assets/'+alimento.categoria+'.jpg') +')' }"
            @click="targetInput(alimento.nombre+alimento.categoria)">              
            <div class="category_label">
                <span class="dot" :class="alimento.categoria">
                    <img class="img_dot" src="/img/BlackH.svg">
                </span>
            </div>                                                          
        </div>
        <div class="row special_footer">                    
            <div class="d-flex last_selector">
                <input class="cantidad_input flex-grow-1" type="number" placeholder="#" min="1" v-model="alimento['cantidad']" :id="alimento.nombre+alimento.categoria"
                @focus="focusInput()" @blur="blurInput()">
                <div v-if="'opciones' in alimento" class="opt_container">
                    <button v-for="(opt, index) in alimento.opciones" v-bind:key="index" class="opt_button" :class="opt.class" @click="click(opt)">{{opt.tag}}</button>                                                            
                </div>                
            </div>                    
        </div>          
    </div>
    </li>
</template>

<script>

export default {
    props: ['alimento'],
    
    methods: {
        click(opt) {                        
            if(opt.estado == 0){
                opt.class = "active_"+opt.tag.toLowerCase();
                console.log(opt.class);
                opt.estado = 1;
            }else{
                opt.estado = 0;
                opt.class = "";
            }
        },      
        targetInput(name){
            document.getElementById(name).focus();
        },
        focusInput(){
            if(this.alimento.cantidad  <= 0 ){
                this.alimento.cantidad = '';
            }
        },
        blurInput(){
            if(this.alimento.cantidad == ''){
                this.alimento.cantidad = 0;
            }
        }
    },
}
</script>

<style>

.special_rectangle{
    display: grid;
    grid-template-rows: 2vw 8.5vw 2vw;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 3px 10px 0 rgba(0, 0, 0, 0.06); 
    border: line transparent 1px;
    border-radius: 0.5vw;
    filter: brightness(100%);
    transition: box-shadow .7s, filter .7s;    
    cursor: pointer;
    grid-template-areas: 
        "header"
        "square"
        "footer";    
}

.special_rectangle:hover{
    box-shadow: 0px 10px 13px -7px rgba(0, 0, 0, 0.8), 8px 8px 47px 26px rgba(140,140,140,0);
    filter : brightness(105%);
}

.special_square {
    background: url("https://i.blogs.es/8e3e94/tacos-suadero-la-vicenta-1/1366_2000.jpg");                
    width: 100%;
    height: 100%;     
    background-repeat: no-repeat;
    background-size: cover;
    grid-area: square;    
    transition: filter .3s;
    border-left: darkgrey 1px solid;;    
    border-right: darkgrey 1px solid;;    
}

.category_label{
    width: 3vw;
    height: 3vw;
    padding: .3vw;
    border-radius: 0 0.5vw 0 0;  
    background: transparent;      
}
 
.dot {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 50%;    
    display: flex;
}

.img_dot{
    width: 2vw;
    height: 2vw;
    margin: auto;
}

.tacos{
    background-color: rgba(255, 24, 0, 0.75);
}

.burritos{    
    background-color: rgba(243, 19, 73, 0.75);
}

.especiales{
    background-color: rgba(163, 18, 47, 0.8);
}

.bebidas{
    background-color: rgba(0, 199, 255, 0.75);
}

.otros{
    background-color: rgba(128, 0, 128, 0.75);
}

.mgp{
    background-color: rgba(255, 128, 0, 0.75);
}

.special_header{
    width: 100%;
    padding: 0.25vw;
    grid-area: header;
    background:rgba(0, 0, 0, 1);
    color: white;
    font-size: 0.8vw;
    font-weight: bold;
    text-align: center;
    text-transform: capitalize;
    border-radius: 0.5vw 0.5vw 0 0;
    font-family: 'Roboto Condensed', sans-serif;
    line-height: 1.15vw;
    -webkit-font-smoothing: antialiased;
}

.special_footer{
    width: 100%;
    padding: 0;
    grid-area: footer;
    background-color: transparent;
    border: darkgrey 1px solid;
    border-radius: 0 0 0.5vw 0.5vw;
}

.row.special_footer{
    margin: 0;
}

.row.special_footer .col,
.row.special_footer .col-auto{
    padding: 0;
}

.row.special_footer > * :focus{
    outline: red solid 1px;    
}

.opt_container{
    display: flex;    
    align-items: stretch;
    height: 100%;
}

.opt_button:last-child{
    border-radius: 0 0 0.5vw 0 !important;
}

.opt_button{
    background-color: white;
    border: transparent 0px solid;
    padding: 0 8px;
    border-left: lightgrey 1px solid;
    color: black;
    font-weight: bold;
    cursor: pointer;
}

.opt_button.active_p,
.opt_button.active_q,
.opt_button.active_m{
    color: white;
}

.opt_button.active_p{
    background-color: #ffc54c;
}

.opt_button.active_q{
    background-color: #dfdc2e;
}

.opt_button.active_m{
    background-color: red;
}

.cantidad_input{
    height: 100%;
    width: 100% !important;
    border: 0px solid gray !important;
    border-radius: 0 0 0 0.5vw !important;
    padding: 0px 5px 0 8px;
}

.last_selector > *:only-child{
    border-radius: 0 0 0.5vw 0.5vw !important;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

</style>