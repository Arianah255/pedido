const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const pedidoRoutes = require('./routes/pedidoRoutes');  // Importa las rutas

const app = express();

// Middleware
app.use(bodyParser.json());  // Para parsear cuerpos JSON

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/pedidos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado a la base de datos de MongoDB'))
.catch((err) => console.log('Error de conexión a MongoDB:', err));

// Rutas
app.use('/api/pedidos', pedidoRoutes);  // Usa las rutas para pedidos

// Puerto de escucha
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
