import MasterModel from '@/modules/core/MasterModel.js';

let model = 'ResAlimentos';

export default {
    list(params, callback){
        MasterModel.get(model, params, callback)
    },
    save(data, callback){
        MasterModel.post(model, data, callback)
    },
    delete(alimentoId, callback){
        MasterModel.delete(model, alimentoId, callback)
    },
    loadAll(){
        
    },
    init(alimentoId, callback){
        if(alimentoId){
            MasterModel.get(model, {id: alimentoId}, callback)
        }
        return{
            nombre: '',
            precio: '',
            categoria: '',
            descripcion: ''

        }
    },
    random(){
        let nombres = ['taco de asada', 'taco de pastor', 'taco de molleja', 
            'taco de asada c queso', 'taco de pastor c queso'];
        let categorias = ['tacos']

        return{
            nombre: MasterModel.faker.random.arrayElement(nombres),
            precio: MasterModel.faker.commerce.price(),
            categoria: MasterModel.faker.random.arrayElement(categorias),
            descripcion: MasterModel.faker.lorem.words(10),
        }
    }
}