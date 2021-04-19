const AccountController = module.exports
//Importando el modulo de la logica...
const AccountService = require('../services/AccountService');

AccountController.listAccountsByCustomer = async(req, res, next) => {
    //Extrayendo los PathParams de la peticion
    const params = req.params;

    try{
        const response = await AccountService.listAccountsByCustomer(params.id)

        //enviando respuestas al cliene  que retorna la logica
        res.send(response)
        //---------------------------------------------------------------------
    } catch(error) {
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

AccountController.createAccount = async(req, res, next) => {
    const body = req.body

    try{
        await AccountService.create(body)
        res.send({message: 'Account Created'})
        //---------------------------------------------------------------------
    } catch(error) {
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

AccountController.cancelarCuenta = async(req, res, next) => {

    const params = req.params;

    try{
        await AccountService.cancelarCuenta(params.id)

        res.send({message : 'Account Deleted'})
    } catch(error) {
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

AccountController.retiro = async(req, res, next) => {
    //Extrayendo los PathParams de la peticion
    const params = req.params;
    
    //Extrayendo los Body de la peticion
    const body = req.body;

    try{
        //Se supone que el id llega asi /customers/:id (aca no es con {} si no con : )
        //await (ya que el metodo es async) para esperar que termine.
        await AccountService.retiro(params.id, body)

        //enviando respuestas al cliene (postman por ejemplo)
        res.send({message : 'Retiro Realizado'})
        //------------------------------------------------------------------------------
    } catch(error) {
        //Manejando las Excepciones..
        console.log({error});
        //Retornando al Cliente(Postman por Ejemplo) el error..
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

AccountController.consignacion = async(req, res, next) => {
    //Extrayendo los PathParams de la peticion
    const params = req.params;
    
    //Extrayendo los Body de la peticion
    const body = req.body;

    try{
        //Se supone que el id llega asi /customers/:id (aca no es con {} si no con : )
        //await (ya que el metodo es async) para esperar que termine.
        await AccountService.consignacion(params.id, body)

        //enviando respuestas al cliene (postman por ejemplo)
        res.send({message : 'Consignacion Realizada'})
        //------------------------------------------------------------------------------
    } catch(error) {
        //Manejando las Excepciones..
        console.log({error});
        //Retornando al Cliente(Postman por Ejemplo) el error..
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

AccountController.transferencia = async(req, res, next) => {
    //Extrayendo los PathParams de la peticion
    const params = req.params;
    
    //Extrayendo los Body de la peticion
    const body = req.body;

    try{
        //Se supone que el id llega asi /customers/:id (aca no es con {} si no con : )
        //await (ya que el metodo es async) para esperar que termine.
        await AccountService.transferencia(params.id, body)

        //enviando respuestas al cliene (postman por ejemplo)
        res.send({message : 'Consignacion Realizada'})
        //------------------------------------------------------------------------------
    } catch(error) {
        //Manejando las Excepciones..
        console.log({error});
        //Retornando al Cliente(Postman por Ejemplo) el error..
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}