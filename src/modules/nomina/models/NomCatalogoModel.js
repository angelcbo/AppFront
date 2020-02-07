import MasterModel from '@/modules/core/MasterModel.js';

export default {
    save(params){
        params.model = "NomCatalogos/"+params.model;
        return MasterModel.post(params)
    },
    delete(params){
        params.model = "NomCatalogos/"+params.model+"/"+params.data.id;
        return MasterModel.delete(params)
    },
    loadAll(){
        let params = {};
        params.model = "NomCatalogos";
        return MasterModel.get(params)
    }
}