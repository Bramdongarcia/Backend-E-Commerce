const express = require('express');
const cors = require('cors');
const app = express();
const puerto = 3000;

app.use(cors());
app.use(express.json());

// Rutas
const usersRoutes = require('./routes/users');
const productsRoutes = require('./routes/products');

app.use('/api/users', usersRoutes);
app.use('/api/products', productsRoutes);

app.listen(3000, () => {
  console.log(`Servidor corriendo en http://localhost:3000`);
});