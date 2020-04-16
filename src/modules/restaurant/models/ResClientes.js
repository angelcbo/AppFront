import MasterModel from '@/modules/core/MasterModel.js';

let model = 'ResClientes';

export default {
    list(params, callback){
        MasterModel.get(model, params, callback)
    },
    save(params, callback){
        
    },
    delete(params){
        
    },
    loadAll(){
        
    }
}