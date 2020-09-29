import MasterModel from '@/modules/core/MasterModel.js';

const model = 'ipa/DatosFis';

export default {
  list(params, callback) {
    MasterModel.get(model, params, callback);
  },
};
