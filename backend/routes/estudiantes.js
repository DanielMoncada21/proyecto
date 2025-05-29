const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtener todos los estudiantes
router.get('/', (req, res) => {
  db.query('SELECT * FROM estudiantes', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Obtener un estudiante por ID
router.get('/:id', (req, res) => {
  db.query('SELECT * FROM estudiantes WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results[0]);
  });
});

// Crear un nuevo estudiante
router.post('/', (req, res) => {
  const { nombre, correo } = req.body;
  db.query('INSERT INTO estudiantes (nombre, correo) VALUES (?, ?)', [nombre, correo], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ id: result.insertId, nombre, correo });
  });
});

// Actualizar estudiante
router.put('/:id', (req, res) => {
  const { nombre, correo } = req.body;
  db.query('UPDATE estudiantes SET nombre = ?, correo = ? WHERE id = ?', [nombre, correo, req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.sendStatus(204);
  });
});

// Eliminar estudiante
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM estudiantes WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.sendStatus(204);
  });
});

module.exports = router;
