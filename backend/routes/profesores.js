const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtener todos los profesores
router.get('/', (req, res) => {
  db.query('SELECT * FROM profesores', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Obtener un profesor por ID
router.get('/:id', (req, res) => {
  db.query('SELECT * FROM profesores WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result[0]);
  });
});

// Crear nuevo profesor
router.post('/', (req, res) => {
  const { nombre, correo } = req.body;
  db.query('INSERT INTO profesores (nombre, correo) VALUES (?, ?)', [nombre, correo], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ id: result.insertId, nombre, correo });
  });
});

// Actualizar profesor
router.put('/:id', (req, res) => {
  const { nombre, correo } = req.body;
  db.query('UPDATE profesores SET nombre = ?, correo = ? WHERE id = ?', [nombre, correo, req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.sendStatus(204);
  });
});

// Eliminar profesor
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM profesores WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.sendStatus(204);
  });
});

module.exports = router;

