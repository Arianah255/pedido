const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');  // Asegúrate de importar el controlador correctamente

// Ruta para crear un pedido
router.post('/', pedidoController.createPedido);

// Ruta para obtener todos los pedidos
router.get('/', pedidoController.getPedidos);

module.exports = router;  // Exporta las rutas
