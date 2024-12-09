const Pedido = require('../models/pedidoModel');  // Importa el modelo de pedido

// Función para crear un nuevo pedido
const createPedido = async (req, res) => {
  try {
    const { client, product, quantity, price, observations } = req.body;

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
    res.status(201).json(savedPedido);  // Retorna el pedido guardado
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Función para obtener todos los pedidos
const getPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.find();  // Obtiene todos los pedidos
    res.json(pedidos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createPedido, getPedidos };  // Exporta las funciones
