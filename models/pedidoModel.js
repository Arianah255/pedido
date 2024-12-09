const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
  client: {
    type: String,
    required: [true, 'El cliente es obligatorio'],
    trim: true,
  },
  product: {
    type: String,
    required: [true, 'El producto es obligatorio'],
    trim: true,
  },
  quantity: {
    type: Number,
    required: [true, 'La cantidad es obligatoria'],
    min: [1, 'La cantidad mínima es 1'],
  },
  price: {
    type: Number,
    required: [true, 'El precio es obligatorio'],
    min: [0, 'El precio no puede ser negativo'],
  },
  total: {
    type: Number,
    required: true,
  },
  observations: {
    type: String,
    trim: true,
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
});

const Pedido = mongoose.model('Pedido', pedidoSchema);

module.exports = Pedido;
