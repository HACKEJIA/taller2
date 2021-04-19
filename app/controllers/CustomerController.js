const CustomerController = module.exports
//Importando el modulo de la logica...
const CustomerService = require('../services/CustomerService');

//Los parametros req, res y next siempre son requeridos
//para el correcto funcionamiento del controlador,
//aca no va definido el path, se hace en otra parte.
CustomerController.delete = async(req, res, next) => {
    //Extrayendo los PathParams de la peticion
    const params = req.params;

    try{
        //Se supone que el id lelga asi /customers/:id (aca no es con {} si no con : )
        //await (ya que el metodo es async) para esperar que termine.
        await CustomerService.delete(params.id)

        //enviando respuestas al cliene (postman por ejemplo)
        res.send({message : 'Customer Deleted'})
    } catch(error) {
        //Manejando las Excepciones..
        console.log({error});
        //Retornando al Cliente(Postman por Ejemplo) el error..
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}
// PUT / customers/id: Body: datos a editar..
CustomerController.edit = async(req, res, next) => {
    //Extrayendo los PathParams de la peticion
    const params = req.params;
    
    //Extrayendo los Body de la peticion
    const body = req.body;

    try{
        //Se supone que el id llega asi /customers/:id (aca no es con {} si no con : )
        //await (ya que el metodo es async) para esperar que termine.
        await CustomerService.edit(params.id, body)

        //enviando respuestas al cliene (postman por ejemplo)
        res.send({message : 'Customer Updated'})
        //------------------------------------------------------------------------------
    } catch(error) {
        //Manejando las Excepciones..
        console.log({error});
        //Retornando al Cliente(Postman por Ejemplo) el error..
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

