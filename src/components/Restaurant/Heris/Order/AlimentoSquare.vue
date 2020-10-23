<template>
    <li tabindex="0" @click="click" @keypress="click"> 
    <div class="alimento_rectangle">
        <div class="square d-flex flex-row-reverse">              
            <div class="category_label">
                <span class="dot" :class="alimento.categoria">
                    <img class="img_dot" src="/img/BlackH.svg">
                </span>
            </div>                                                          
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

.alimento_rectangle:hover{
    box-shadow: 0px 10px 13px -7px #000000, 8px 8px 47px 26px rgba(140,140,140,0);
    filter : brightness(110%);
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
    background-color: rgba(248, 255, 0, 0.75);
}

.bebidas{
    background-color: rgba(0, 199, 255, 0.75);
}

.otros{
    background-color: rgba(55, 255, 0, 0.75);
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
    font-family: 'Roboto Condensed', sans-serif;
    -webkit-font-smoothing: antialiased;
}

</style>