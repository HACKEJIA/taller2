const express = require('express');
const CustomerController = require('../controllers/CustomerController')
const AccountController = require('../controllers/AccountController')

const router = express.Router();

router.delete('/customers/:id', CustomerController.delete);
router.put('/customers/:id', CustomerController.edit);
router.get('/customers/:id/accounts', AccountController.listAccountsByCustomer)


//-----------------------------------------------------------------------------
router.post('/accounts', AccountController.createAccount);
router.delete('/accounts/:id', AccountController.cancelarCuenta);
router.put('/accounts/retiro/:id', AccountController.retiro);
router.put('/accounts/consignacion/:id', AccountController.consignacion);
router.put('/accounts/transferencia/:idOrigen/:idDestino', AccountController.consignacion);


module.exports = router;