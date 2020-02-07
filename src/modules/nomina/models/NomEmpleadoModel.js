import MasterModel from '@/modules/core/MasterModel.js';
let model = "NomEmpleado";
export default {
  test(item) {
    MasterModel.test(item);
  },
  testpost(item){
    MasterModel.post({model:model, data: item});
  },
  random(){
    console.log('fakename', MasterModel.faker.name.findName())
    return{
        nombre: MasterModel.faker.name.firstName(),
        apellido_paterno: MasterModel.faker.name.lastName(),
        apellido_materno: MasterModel.faker.name.lastName(),
        domicilio: MasterModel.faker.address.streetName(),
        curp: 'rare850426hdgmmr08',
        rfc: 'rare850426g48',
        fecha_nacimiento: "2019-11-01",
        nacionalidad: 'mexicana',
        infonavit: '2312190507',
        no_imss: ' 92988084494',
        sexo: 'm',
        departamento: '',
        tipo_nomina: '',
        tipo_salario: '',
        horas_jornada: '',
        empleado: '',
        puesto_base: '',
        estatus: '',
        salario_diario: '',
        bonos: '',
        cuenta_contable: '',
        telefonos: [],
        cuentas: [],
    }
  },
  init(){
    return {
            // nombre: MasterModel.faker.name.findName(),
          telefonos: [],
          cuentas: [],
      };
  }
};
