const AccountService = module.exports
const AccountRepository = require('../repositories/AccountRepository')
const CustomerRepository = require('../repositories/CustomerRepository')

AccountService.listAccountsByCustomer = async (customerId) => {
    // Buscamos el cliente por id para verific ar si existe
    const customerFound = await CustomerRepository.findById(customerId)

    //Si la lista de resultados su tamaño es cero
    //es porque no existe un cliente con esa cedula
    if(customerFound.length === 0){
        throw new Error('Customer does not Exist')
    }

    // Cuando se retorna directamente el resultado de una funcion que
    //Haya que esoerar el resultado, no es neceasrio usar await..

    return AccountRepository.listAccountsByCustomer(customerId)
}

AccountService.create = async (account) => {
    //Buscamos el cliente por id para verificar si existe
    const customerFound = await CustomerRepository.findById(account.customerid)

    //Si la lista de resultados su tamaño es cero
    //es porque no existe un cliente con esa cedula
    if(customerFound.length === 0){
        throw new Error('Customer does not exist')
    }

    //Consultando las cuentas del cliente.. El id del clietne viene en el Objeto
    const listAccountsByCustomer = await AccountRepository.listAccountsByCustomer(account.customerid)

    //verificando que solo tenga hasta tres cuentas...
    if(listAccountsByCustomer.length >= 3){
        throw new Error('No more than 3 accounts...')
    }

    account.openedat = new Date();//colocando la fecha de apertura
    account.amount = 0; //Colocando el saldo inicial
    await AccountRepository.create(account)

}

AccountService.cancelarCuenta = async (id) => {

    
    const accountFound = await AccountRepository.findById(id)
    

    if(accountFound.length === 0){
        throw new Error('Account does not exist ')
    }

    if(accountFound.amount != 0){
        throw new Error('Account has a Balance')
    }

    await AccountRepository.cancelarCuenta(id)

}

AccountService.retiro = async (id, monto) => {

    
    const accountFound = await AccountRepository.findById(id)
    var saldo = accountFound.amount;

    if(accountFound.length === 0){
        throw new Error('Account does not exist ')
    }

    if(saldo >= monto){
       var saldoNuevo = saldo - monto;
        
        await AccountRepository.transaccion(id, saldoNuevo)
  }

  throw new Error('Account has not Balance')    

}

AccountService.consignacion = async (id, monto) => {

    
    const accountFound = await AccountRepository.findById(id)
    var saldo = accountFound.amount;

    if(accountFound.length === 0){
        throw new Error('Account does not exist ')
    }

    if(monto > 0){
        var saldoNuevo = saldo + monto;
        await AccountRepository.transaccion(id, saldoNuevo)
    }else{
        throw new Error('El Monto No es Permitido ')
    }

}


AccountService.transferencia = async (cuentaOrigen, cuentaDestino, monto) => {
    
    const accountFoundSource = await AccountRepository.findById(cuentaOrigen)
    const accountFoundDestination = await AccountRepository.findById(cuentaDestino)
    var saldoOrigen = accountFoundSource.amount;
    var saldoDestino = accountFoundDestination.amount;

    if(accountFoundSource.length === 0 || accountFoundDestination.length === 0 ){
        throw new Error('Accounts does not exist ')
    }

    if(saldoOrigen >= monto ){
        var nuevoMontoOrigen = saldoOrigen - monto;
        await AccountRepository.transaccion(cuentaOrigen, nuevoMontoOrigen)

        var nuevoMontoDestino = saldoDestino + monto;
        await AccountRepository.transaccion(cuentaDestino, nuevoMontoDestino)
    }else{
        throw new Error('El Monto No es Permitido ')
    }

}







