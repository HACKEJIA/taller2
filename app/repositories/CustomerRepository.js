const CustomerRepository = module.exports 
const DB = require('../config/database')

//Crear Cliente
CustomerRepository.create = (customer) =>{
    return DB('customers').insert(customer)
}

//Buscar Cliente
CustomerRepository.findById = (cedula) =>{
    return DB('customers').where({id: cedula}).select('*')
}

// Editar Cliente
CustomerRepository.edit = (cedula, customer) =>{
    return DB('customers').where({id: cedula}).update(customer)
}

//Eliminar CLiente
CustomerRepository.delete = (cedula) =>{
    return DB('customers').where({id: cedula}).del()
}


