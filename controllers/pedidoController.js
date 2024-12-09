const Pedido = require('../models/pedidoModel'); // Importa el modelo de pedido

// Función para crear un nuevo pedido
const createPedido = async (req, res) => {
  try {
    const { client, product, quantity, price, observations } = req.body;

    // Validación manual (opcional si usas una biblioteca como Joi)
    if (!client || !product || !quantity || !price) {
      return res.status(400).json({ message: 'Todos los campos obligatorios deben ser proporcionados' });
    }

    if (quantity <= 0 || price < 0) {
      return res.status(400).json({ message: 'Cantidad y precio deben ser válidos' });
    }

    // Calcula el total del pedido
    const total = quantity * price;

    // Crea una nueva instancia del pedido
    const newPedido = new Pedido({
      client,
      product,
      quantity,
      price,
      total,
      observations,
    });

    // Guarda el pedido en la base de datos
    const savedPedido = await newPedido.save();
    res.status(201).json(savedPedido); // Retorna el pedido guardado
  } catch (err) {
    res.status(500).json({ message: 'Error interno del servidor', error: err.message });
  }
};

// Función para obtener todos los pedidos
const getPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.find(); // Obtiene todos los pedidos
    res.json(pedidos);
  } catch (err) {
    res.status(500).json({ message: 'Error interno del servidor', error: err.message });
  }
};

module.exports = { createPedido, getPedidos }; // Exporta las funciones
