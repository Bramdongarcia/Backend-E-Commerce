const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtener todos los productos
router.get('/', (_req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Agregar producto
router.post('/', (req, res) => {
  const { Name_Product, Description, Price, Url } = req.body;
  db.query('INSERT INTO products (Name_Product, Description, Price, Url) VALUES (?, ?, ?, ?)', [Name_Product, Description, Price, Url], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ id: result.insertId, Name_Product, Description, Price, Url });
  });
});

// Editar producto
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { Name_Product, Description, Price, Url } = req.body;
  db.query(
    'UPDATE products SET Name_Product = ?, Description = ?, Price = ?, Url = ? WHERE Id_Products = ?',
    [Name_Product, Description, Price, Url, id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Producto actualizado correctamente' });
    }
  );
});

// Eliminar producto
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM products WHERE Id_Products = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Producto eliminado correctamente' });
  });
});

module.exports = router;