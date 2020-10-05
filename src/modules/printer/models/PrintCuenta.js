import MasterModel from '@/modules/core/MasterModelPrinter.js';



export default {
    pagar(params, callback) {
        MasterModel.post('cuenta', params, callback);
    },

};
