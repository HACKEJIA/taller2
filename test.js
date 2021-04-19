// Importanto el Repositorio...

//const ClienteRepository = require('./app/repositories/CustomerRepository')
//const AccountRepository = require('./app/repositories/AccountRepository')

//console.log('probando....')



/*
ClienteRepository.create({
    name:'Alejandra',
    lastname: 'Londoño',
    id: '12345',
    email: 'al@correo.com'
}).then(console.log) // Para que el programa espere a que la operacion termine--- 
*/

/*
async function probandoElBuscar(){
    const cliente = await ClienteRepository.findById('1097')
    console.log(cliente)
}

probandoElBuscar()
.then(console.log('OK'))//Para que el programa espere a que la Operacion termine


//async, siempre que haya un await dentro de una funcion, la funcion debe llevar async
async function probandoElEditar(){
    //await es para que nodejs espere que termine la ejecucion antes de pasar a la siquiente instruccion
    await ClienteRepository.edit('1097',{
        name:'Alejandra',
        lastname:'Londoño',
    })
    console.log(cliente)
}

probandoElEditar()
.then(console.log('OK'))//Para que el programa espere a que la Operacion termine..




async function probandoListarCuentas(){
    const list = await AccountRepository.listAccountsByCustomer('1097')
    console.log(list)
}

probandoListarCuentas()
.then(console.log('OK'))//Para que el programa espere a que la Operacion termine..



const CustomerService = require('./app/services/CustomerService')

async function probarCrearCliente(){
    await CustomerService.create({
        id: '2345',
        name:'Fabian',
        lastname: 'Lopez',        
        email: 'fl@correo.com'
    })
}

probarCrearCliente().then(console.log('OK'))


const CustomerService = require('./app/services/CustomerService')

async function probarEditar(){
    await CustomerService.edit('555555',{
        name:'Julian',
        lastname: 'Lopez',        
    })
}

probarEditar().then(console.log('OK'))



const CustomerService = require('./app/services/CustomerService')

async function probarEliminar(){
    await CustomerService.delete('1098')
}

probarEliminar().then(console.log('OK'))



const CustomerService = require('./app/services/CustomerService')

async function probarBuscar(){
    const customer = await CustomerService.findCustomer('1098')
    console.log(customer)
}

probarBuscar().then(console.log('OK'))



const AccountService = require('./app/services/AccountService')

async function probar(){
    const result = await AccountService.listAccountsByCustomer('55555')
    console.log(result)
}

probar().then(console.log('OK'))

*/

const AccountService = require('./app/services/AccountService')

async function probar(){
    const result = await AccountService.create({
        id:'7777',
        customerid:'1097',
    })
    console.log(result)
}

probar().then(console.log('OK'))


