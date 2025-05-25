const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rutas
const usersRoutes = require('./routes/users');
const productsRoutes = require('./routes/products');

app.use('/api/users', usersRoutes);
app.use('/api/products', productsRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo exitosamente PORT=`, port);
});