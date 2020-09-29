import MasterModel from '@/modules/core/MasterModel.js';

const model = 'ipa/VPersonaEmpresa';

export default {
  list(params, callback) {
    MasterModel.get(model, params, callback);
  },
  listPage(page, params, callback) {
    const sModel = model+"/"+page;
    MasterModel.get(sModel, params, callback);
  },
  listPageSize(page, size, params, callback) {
    const sModel = model+"/"+page+"/"+size;
    MasterModel.get(sModel, params, callback);
  },
};
