import MasterModel from '@/modules/core/MasterModel.js';

export default {
    save(params){
        params.model = "ApiUser/"+params.model;
        return MasterModel.post(params)
    },
    delete(params){
        params.model = "ApiUser/"+params.data.id;
        return MasterModel.delete(params)
    },
    loadAll(){
        let params = {};
        params.model = "ApiUser";
        return MasterModel.get(params)
    }
}