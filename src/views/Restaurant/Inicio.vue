<template>
    <div class="row">
        <SideMenu/>
        <div class="right-column">
            <TopBar />
            <main class="main-content p-5" role="main">
                <div class="row">
                    <TagInicio v-for="(tag, index) in tags" v-bind:key="index" v-bind:value="tag"/>                    
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                Reporte de Ventas
                                <div class="header-btn-block">                                    
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"><i class="fa fa-calendar" aria-hidden="true"></i></div>
                                        </div>
                                        <select class="custom-select" style="height: 34px;" v-model="dataST" @click="actualizarChar()">
                                            <option selected="selected">Día</option>
                                            <option>Semana</option>
                                            <option>Mes</option>
                                            <option>Año</option>                                            
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="card-chart" data-chart-color-1="#07a7e3" data-chart-color-2="#32dac3" data-chart-legend-1="Sales ($)" data-chart-legend-2="Order">
                                    <canvas id="average-order-value" width="1465" height="375px" style="display: block; height: 350px; width: 1172px;"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>                      
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import SideMenu from '@/components/SideMenu.vue';
import TopBar from '@/components/TopBar.vue';
import TagInicio from '@/components/Restaurant/TagInicio.vue';

export default {
    name: 'inicio',
    components: {
        SideMenu,
        TopBar,
        TagInicio,
    },
    data() {
        return {            
            tags: [
                {
                    Color: "bg-white",
                    Icon: "batch-icon batch-icon-list batch-icon-xxl",
                    TileNumber: "$ 1355",
                    Description: "Dinero en Caja",                
                },
                {
                    Color: "bg-secondary",
                    Icon: "batch-icon batch-icon-tag-alt-3 batch-icon-xxl",
                    TileNumber: "100",
                    Description: "Ventas realizadas el día de hoy",                
                },
                {
                    Color: "bg-white",
                    Icon: "batch-icon batch-icon-spam-alt batch-icon-xxl",
                    TileNumber: "2855",
                    Description: "Ordenes activas",                
                },
                {
                    Color: "bg-secondary",
                    Icon: "batch-icon batch-icon-users batch-icon-xxl",
                    TileNumber: "1",
                    Description: "Extra Tag ?",                
                },
            ],  
            dataST : 'Semana',
            Chart : null,
            Ctx : null,       
        }
    },
    methods:{
        actualizarChar()
        {         
            var labelTime; //Etiquetas de la parte de abajo
            var dataInfo = [];
            
            var colorBackground = 'rgba(255, 0, 0, 0.2)'
            var colorBorder = 'rgba(255, 0, 0, 1)'

            var barBackground = []; 
            var barBorder = [];
            switch(this.dataST){
                case 'Día':
                    labelTime = ['0 am.', '1 am.', '2 am.', '3 am.', '4 am.', '5 am.', '6 am.', '7 am.', '8 am.', '9 am.', '10 am.', '11 am.', '12 pm.', '1 pm.', '2 pm.', '3 pm.', '4 pm.', '5 pm.', '6 am.', '7 am.', '8 pm.', '9 am.', '10 pm.', '11 pm.'];                    
                    break;
                case 'Semana':
                    labelTime = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado']
                    break;
                case 'Mes':
                    labelTime = []
                    for(var i=0; i<30; i++){
                        labelTime.push(i);
                    }
                    break;
                case 'Año':
                    labelTime = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
                    break;
            }

            for(var i = 0; i<labelTime.length; i++){
                dataInfo.push(i);
            }

            for(var i = 0; i<labelTime.length; i++){
                barBackground.push(colorBackground);
            }
            
            for(var i = 0; i<labelTime.length; i++){
                barBorder.push(colorBorder);
            }

            if(this.Chart){
                this.Chart.clear()
                this.Chart.destroy()
            }
            
            this.Chart = new Chart(this.Ctx, {
                type: 'bar',
                data: {
                    labels: labelTime,
                    datasets: [{
                        label: 'Número de Ventas',
                        data: dataInfo,
                        backgroundColor: barBackground,
                        borderColor: barBorder,
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
            this.showToast()
        },
        showToast(){
            toastr.success("La tabla a cambiado de valores", "Datos actualizados")            
        }
    },
    mounted() {    
        var _this = this
        _this.Ctx = document.getElementById('average-order-value').getContext('2d')        
        _this.Chart = new Chart(_this.Ctx, {
            type: 'bar',
            data: {
                labels: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'],
                datasets: [{
                    label: 'Número de Ventas',
                    data: [12, 19, 3, 5, 2, 3, 8],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });       
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "positionClass": "toast-bottom-right",
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        } 
    }
}
</script>

<style scoped>

</style>