import MasterModel from '@/modules/core/MasterModel.js';

const model = 'ResOrdenes/ResPlatos';

export default {
  list(params, callback) {
    MasterModel.get(model, params, callback);
  },
  save(params, callback) {
    MasterModel.post(model, params, callback);
  },
  delete(params) {

  },
  loadAll() {

  },
  init() {
    return {
      platoId: 0,
      alimentoId: 0,
      comensal: 1,
      cantidad: 0,
      ordenId: 0,
    };
  },
  random() {
    return {

    };
  },
};
