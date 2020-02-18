// import ordenes from '@/modules/core/ordenes.js';

// export default {
//     loadAll() {
//         let params = {};
//         params.model = "Otros";
//         return ordenes.get(params)
//     }
// }


import MasterModel from '@/modules/core/MasterModel.js';


export default {

    save(params){
        params.model = "ResOrdenes";
        return MasterModel.post(params);
    },
    loadAll(){
        let params = {};
        params.model = "ResAlimentos";
        return MasterModel.get(params);
    }
}