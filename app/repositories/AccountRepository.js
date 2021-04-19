const AccountRepository = module.exports 
const DB = require('../config/database')

//Crear Cliente
AccountRepository.create = (account) =>{
    return DB('accounts').insert(account)
}

//Buscar Cliente
AccountRepository.findById = (cuentaCliente) =>{
    return DB('accounts').where({id: cuentaCliente}).select('*')
}

// Editar Cuenta
AccountRepository.edit = (id, customer) =>{
    return DB('accounts').where({id: id}).update(customer)
}

//Eliminar CLiente
AccountRepository.cancelarCuenta = (cuentaCliente) =>{
    return DB('accounts').where({id: cuentaCliente}).del()
}

//Listar Cliente
AccountRepository.listAccountsByCustomer = (customerId) =>{
    return DB('accounts').where({customerid: customerId}).select('*')
}

//Retiro
AccountRepository.transaccion = (id, amount) =>{
    return DB('accounts').where({id: id}).update(amount)
}





