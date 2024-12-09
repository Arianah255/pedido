const express = require('express');
const { createPedido, getPedidos } = require('../controllers/pedidoController'); // Importa las funciones del controlador

const router = express.Router();

// Ruta para crear un nuevo pedido
router.post('/', createPedido);

// Ruta para obtener todos los pedidos
router.get('/', getPedidos);

module.exports = router;
