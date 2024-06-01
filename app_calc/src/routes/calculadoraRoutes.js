const express = require('express');
const router = express.Router();
const calculadoraController = require('../controller/calculadoraController');

router.get('/', calculadoraController.renderIndex);
router.post('/calcular', calculadoraController.calcularOperacao);

module.exports = router;