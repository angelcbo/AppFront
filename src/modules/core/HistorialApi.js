import MasterModel from '@/modules/core/MasterModel.js';

export default {
  loadAll() {
    const params = {};
    params.model = 'ApiRequestHistoriales';
    return MasterModel.get(params);
  },
};
