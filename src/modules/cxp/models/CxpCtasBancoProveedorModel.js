import MasterModel from '@/modules/core/MasterModel.js';

const model = 'Cxp/Proveedor/Banco';

export default {
  list(params, callback) {
    MasterModel.get(model, params, callback);
  },
  save(data, callback) {
    MasterModel.post(model, data, callback);
  },
  delete(Id, callback) {
    MasterModel.delete(model, Id, callback);
  },
  loadAll() {

  },
  init(Id, callback) {
    if (Id) {
      MasterModel.get(model, { id: Id }, callback);
    }

    return {
      idCuentaBancaria: 0,
      rfc: '',
      idBanco: '',
      clabe: '',
      estaActiva: true,
      // datos de banco, no guarda este modelo
      clave: '',
      nombreCorto: '',
      nombre: '',
    };
  },
  random(rfc, aBancos) {
    const banco = MasterModel.faker.random.arrayElement(aBancos);
    return {
      idCuentaBancaria: 0,
      rfc,
      idBanco: banco.idBanco,
      clabe: MasterModel.faker.helpers.replaceSymbols('#################'),
      estaActiva: true,
      // datos de banco, no guarda este modelo
      clave: banco.clave,
      nombreCorto: banco.nombreCorto,
      nombre: banco.nombre,
    };
  },
  arrRandom(rfc, aBancos) {
    const arrRes = [];
    const t = this;
    const numItems = MasterModel.faker.random.number(5);

    for (let i = 0; i < numItems; i++) {
      const randItem = t.random(rfc, aBancos);
      arrRes.push(randItem);
    }
    return arrRes;
  },
};
