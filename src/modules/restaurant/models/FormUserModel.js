import MasterModel from '@/modules/core/MasterModel.js';

const model = 'ApiUser';

export default {
  save(params) {
    params.model = `ApiUser/${params.model}`;
    return MasterModel.post(params);
  },
  delete(params) {
    params.model = `ApiUser/${params.data.id}`;
    return MasterModel.delete(params);
  },
  loadAll(callback) {
    const params = {};
    params.model = model;
    MasterModel.get(params, callback);
  },
};
