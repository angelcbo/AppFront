<template>
    <li tabindex="0" @click="click" @keypress="click"> 
    <div class="alimento_rectangle">
        <div class="square d-flex flex-row-reverse">              
            <div :class="alimento.categoria"/>                                                          
        </div>
        <div class="alimento_footer">
            <div class="start_label flex-fill">
                {{ alimento.nombre }}
            </div>   
        </div>    
    </div>
    </li>
</template>

<script>

export default {
    props: ['alimento'],

    methods: {
        click() {                        
            this.$emit('click', this.alimento);            
        },        
    },
}
</script>

<style>

.alimento_rectangle{
    display: grid;
    grid-template-rows: 8.5vw 3vw;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 3px 10px 0 rgba(0, 0, 0, 0.06); 
    border: line transparent 1px;
    border-radius: 0.5vw;
    filter: brightness(100%);
    transition: box-shadow .7s, filter .7s;    
    cursor: pointer;
    grid-template-areas: 
        "square"
        "footer";    
}

.square {
    background: url("https://i.blogs.es/8e3e94/tacos-suadero-la-vicenta-1/1366_2000.jpg");                
    width: 100%;
    height: 100%;     
    background-repeat: no-repeat;
    background-size: cover;
    grid-area: "square";
    border-radius: .5vw .5vw 0 0;
    transition: filter .3s;    
}

.alimento_footer{
    width: 100%;
    padding: 0.25vw;
    grid-area: "footer";
    background:rgba(0, 0, 0, 1);
    text-align: center;
    color: white;
    font-size: 0.8vw;
    font-weight: bold;
    text-align: center;
    text-transform: capitalize;
    border-radius: 0 0 0.5vw 0.5vw;
}

.alimento_rectangle:hover{
    box-shadow: 0px 10px 13px -7px #000000, 8px 8px 47px 26px rgba(140,140,140,0);
    filter : brightness(110%);
}

.burritos, .bebidas, .tacos, .especiales, .otros{
    margin: 0;
    width: 0;
    height: 0;
    border-radius: 0 0.5vw 0 0;  
    border-right: 1.75vw solid;
    border-top: 1.75vw solid; 
    border-left: 1.75vw solid transparent;
    border-bottom: 1.75vw solid transparent;     
}

.tacos{
    border-top-color: red;
    border-right-color: red;
}

.burritos{
    border-top-color: crimson;
    border-right-color: crimson;
}

.especiales{
    border-top-color: darkred;
    border-right-color: darkred;
}

.bebidas{
    border-top-color: tomato;
    border-right-color: tomato;
}

.otros{
    border-top-color: orangered;
    border-right-color: orangered;
}

</style>