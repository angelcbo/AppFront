import MasterModel from '@/modules/core/MasterModel.js'

export default {
    loadAll(){
        let params = {};
        params.model = "ApiRequestHistoriales"
        return MasterModel.get(params);
    }
}