import MasterModel from '@/modules/core/MasterModel.js';

const model = 'ipa/CxpBancos';

export default {
  list(params, callback) {
    MasterModel.get(model, params, callback);
  },
};
