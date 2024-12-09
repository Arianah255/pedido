const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
  client: {
    type: String,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  observations: {
    type: String,
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
});

const Pedido = mongoose.model('Pedido', pedidoSchema);

module.exports = Pedido;
