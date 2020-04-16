import MasterModel from '@/modules/core/MasterModel.js';

let model = 'ResPlatos';

export default {
    list(params, callback){
        MasterModel.get(model, params, callback)
    },
    save(params, callback){
        
    },
    delete(params){
        
    },
    loadAll(){
        
    },
    init(){
        return{
            platoId: 0,
            alimentoId: '',
            comensal: '',
            cantidad: ''
        }
    },
    random(){
    
        return{
            
        }
    }
}