const CustomerService = module.exports
const CustomerRepository = require('../repositories/CustomerRepository')
const AccountRepository = require('../repositories/AccountRepository')

//Crear Cliente
CustomerService.create = async (customer) => {
    //Buscamos el Clietne por id para verificar si existe
    const customerFound = await CustomerRepository.findById(customer.id)

    //Si la lista de resultados su tamaño es mayor que cero
    //es por que existe un cliente con esa cedula
    if(customerFound.length > 0){
        throw new Error('Customer already exist')
    }

    //se crea el cliente
    await CustomerRepository.create(customer)
}


//
CustomerService.edit = async (id, customer) => {
    //Buscamos el Cliente por ID para verificar si existe
    const customerFound = await CustomerRepository.findById(id)

    //Si la lista de resultados su tamaño es cero
    //es por que no existe un cliente con esa cedula
    if(customerFound.length === 0){
        throw new Error('Customer does not Exist')
    }

    //Se Actualiza el Cliente
    await CustomerRepository.edit(id, customer)
    
}

CustomerService.delete = async (idCustomer) => {
    //Se consulta las cuentas del cliente, se usa await porque debemos 
    //esperar ese resukltado para poder seguir....
    const customerAccounts = await AccountRepository.listAccountsByCustomer(idCustomer)

    //Si el Tamaño de la lista es mayor a cero es porque tiene cuentas
    //y se lanza la excepcion
    if(customerAccounts.length > 0){
        throw new Error('Customer with accounts, can not be deleted')
    }

    //Se elimina el cliente...
    await CustomerRepository.delete(idCustomer)

}

CustomerService.findCustomer = async (idCustomer) => {
    const customers = await CustomerRepository.findById(idCustomer)

    if(customers.length === 0) return undefined;


    return customers[0];
}