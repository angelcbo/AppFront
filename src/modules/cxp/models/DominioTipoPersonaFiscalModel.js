import MasterModel from '@/modules/core/MasterModel.js';

const model = 'ipa/DominioTipoPersonaFiscal';

export default {
  list(params, callback) {
    MasterModel.get(model, params, callback);
  },
};
