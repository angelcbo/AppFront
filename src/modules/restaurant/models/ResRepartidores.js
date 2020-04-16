import MasterModel from '@/modules/core/MasterModel.js';

let model = 'ResRepartidores';

export default {
    list(params, callback){
        MasterModel.get(model, params, callback)
    },
    save(data, callback){
        MasterModel.post(model, data, callback)
    },
    delete(params){
        
    },
    loadAll(){
        
    },
    init(repartidorId, callback){
        if(repartidorId){
            MasterModel.get(model, {id: repartidorId}, callback)
        }
        return{
            nombre: '',
        }
    },
    random(){
    
        return{
            nombre: MasterModel.faker.name.firstName()+ ' ' + MasterModel.faker.name.lastName(),
        }
    }
}