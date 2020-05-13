import MasterModel from '@/modules/core/MasterModel.js';

const model = 'Cxp/Proveedor';

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
      idProveedorConfig: '',
      rfc: '',
      nombre: '', // campo dummy que no viene en base de datos
      tipoPersonaFiscal: '',
      importeMaximoPago: '',
      periodoMaximoPago: '',

    };
  },
  random(aDatosFis, aPersonaFiscal, aPeriodoMaximoPago) {
    const datosFis = MasterModel.faker.random.arrayElement(aDatosFis);
    return {
      rfc: datosFis.rfc,
      nombre: datosFis.nombre, // campo dummy que no viene en base de datos
      tipoPersonaFiscal: MasterModel.faker.random.arrayElement(aPersonaFiscal).tipoPersonaFiscal,
      importeMaximoPago: MasterModel.faker.helpers.replaceSymbols('#######'),
      periodoMaximoPago: MasterModel.faker.random.arrayElement(aPeriodoMaximoPago).periodoMaximoPago,
    };
  },
};
