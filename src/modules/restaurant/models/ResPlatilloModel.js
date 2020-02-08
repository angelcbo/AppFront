import MasterModel from '@/modules/core/MasterModel.js';

export default {
    save(params){
        params.model = "ResAlimentos/"+params.model;
        return MasterModel.post(params)
    },
    delete(params){
        //params.model = "ResAlimentos/"+params.model+"/"+params.data.id;
        params.model = "ResAlimentos/"+params.data.id;
        return MasterModel.delete(params)
    },
    loadAll(){
        let params = {};
        params.model = "ResAlimentos";
        return MasterModel.get(params)
    }
}