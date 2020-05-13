import MasterModel from '@/modules/core/MasterModel.js';

const model = 'ipa/DominioPeriodoPagoCxp';

export default {
  list(params, callback) {
    MasterModel.get(model, params, callback);
  },
};
