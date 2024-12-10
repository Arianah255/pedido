const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const pedidoRoutes = require('./routes/pedidoRoutes'); // Importa las rutas de pedidos
const dotenv = require('dotenv');
const cors = require('cors');
app.use(cors());

// Configuración de dotenv
dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json()); // Parsear cuerpos JSON

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado a la base de datos Api en MongoDB Atlas'))
  .catch((err) => console.log('Error de conexión a MongoDB:', err));

// Rutas
app.use('/api/pedidos', pedidoRoutes); // Usa las rutas para pedidos

// Puerto de escucha
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
