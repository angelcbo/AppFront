import MasterModel from '@/modules/core/MasterModel.js';

const model = 'pizzaly';

export default {
  list(params, callback) {
    MasterModel.get([model,"orders"], params, callback);
  },
 
  save(params, callback) {
    MasterModel.post([model,"orders"], params, callback);
  },

  loadAll() {

  },
  init(ordenId, callback) {
    if (ordenId) {
      MasterModel.get(model, { id: ordenId }, callback);
    }
    return {
        "id": 0,
        "number": "",
        "total": "",
        "billing": {
            "first_name": "",
            "last_name": "",
            "company": "",
            "address_1": "",
            "address_2": "",
            "city": "",
            "state": "",
            "postcode": "",
            "country": "",
            "email": "",
            "phone": ""
        }, 
        "shipping": {
            "first_name": "",
            "last_name": "",
            "company": "",
            "address_1": " ",
            "address_2": "",
            "city": "",
            "state": "",
            "postcode": "",
            "country": ""
        },
        "items": [],
        "created": ""
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
