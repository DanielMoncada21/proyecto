const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtener todas las asignaturas
router.get('/', (req, res) => {
  db.query('SELECT * FROM asignaturas', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Obtener una asignatura por ID
router.get('/:id', (req, res) => {
  db.query('SELECT * FROM asignaturas WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result[0]);
  });
});

// Crear nueva asignatura
router.post('/', (req, res) => {
  const { nombre, creditos } = req.body;
  db.query('INSERT INTO asignaturas (nombre, creditos) VALUES (?, ?)', [nombre, creditos], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ id: result.insertId, nombre, creditos });
  });
});

// Actualizar asignatura
router.put('/:id', (req, res) => {
  const { nombre, creditos } = req.body;
  db.query('UPDATE asignaturas SET nombre = ?, creditos = ? WHERE id = ?', [nombre, creditos, req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.sendStatus(204);
  });
});

// Eliminar asignatura
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM asignaturas WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.sendStatus(204);
  });
});

module.exports = router;
