const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtener todos los usuarios
router.get('/', (_req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Agregar un usuario
router.post('/', (req, res) => {
  const { Name, Last_Name, Phone, Direccion, Email, Contraseña } = req.body;
  db.query('INSERT INTO users (Name, Last_Name, Phone, Direccion, Email, Contraseña) VALUES (?, ?, ?, ?, ?, ?)', [Name, Last_Name, Phone, Direccion, Email, Contraseña], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ id: result.insertId, Name, Last_name, Phone, Direccion, Email });
  });
});

// Editar un usuario
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { Name, Last_Name, Phone, Direccion, Email, Contraseña } = req.body;

  db.query(
    "UPDATE Users SET Name = ?, Last_Name = ?, Phone = ?, Direccion = ?, Email = ?, Contraseña = ? WHERE id = ?",
    [Name, Last_Name, Phone, Direccion, Email, Contraseña, id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Usuario actualizado correctamente" });
    }
  );
});

// Eliminar un usuario
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM Users WHERE Id_Users = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Usuario eliminado correctamente" });
  });
});

module.exports = router;