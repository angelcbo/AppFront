import MasterModel from '@/modules/core/MasterModel.js';

const model = 'ResOrdenes';

export default {
  list(params, callback) {
    MasterModel.get(model, params, callback);
  },
  listAbiertas(params, callback) {
    MasterModel.get(model+'/abiertas', params, callback);
  },
  listMesas( callback) {
    MasterModel.get(model+'/mesas',{},  callback);
  },
  save(params, callback) {
    MasterModel.post(model, params, callback);
  },
  pagar(params, callback) {
    MasterModel.post(model+'/pagar', params, callback);
  },
  delete(ordenId, callback) {
    MasterModel.delete(model, ordenId, callback);
  },
  loadAll() {

  },
  init(ordenId, callback) {
    if (ordenId) {
      MasterModel.get(model, { id: ordenId }, callback);
    }
    return {
      ordenId: 0,
      mesa: '',
      status: '',
      tipoPago: '',
      consumo: '',
      repartidorId: 0,
      resPlatos: [],
    };
  },
  random() {
    return {
      mesa: MasterModel.faker.random.arrayElement(nombres),
      status: MasterModel.faker.commerce.price(),
      tipoPago: MasterModel.faker.random.arrayElement(categorias),
      consumo: '',
    };
  },
};
