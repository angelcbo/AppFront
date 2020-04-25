import MasterModel from '@/modules/core/MasterModel.js';

let model = 'ResOrdenes';

export default {
    list(params, callback){
        MasterModel.get(model, params, callback)
    },
    save(params, callback){
        MasterModel.post(model, params, callback)
    },
    delete(params){
        
    },
    loadAll(){
        
    },
    init(ordenId, callback){
        if(ordenId){
            MasterModel.get(model, {id: ordenId}, callback)
        }
        return{
            ordenId: 0,
            mesa: '',
            status: '',
            tipoPago: '',
            consumo: '',
            repartidorId: 0,
            resPlatos:[]
        }
    },
    random(){
    
        return{
            mesa: MasterModel.faker.random.arrayElement(nombres),
            status: MasterModel.faker.commerce.price(),
            tipoPago: MasterModel.faker.random.arrayElement(categorias),
            consumo:''
        }
    }
}