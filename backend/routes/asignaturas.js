const express = require('express');
const router = express.Router();
const asignaturasController = require('../controllers/asignaturasController');

// Obtener todas las asignaturas
router.get('/', asignaturasController.getAll);

// Obtener una asignatura por ID
router.get('/:id', asignaturasController.getById);

// Crear nueva asignatura
router.post('/', asignaturasController.create);

// Actualizar asignatura
router.put('/:id', asignaturasController.update);

// Eliminar asignatura
router.delete('/:id', asignaturasController.delete);

module.exports = router;
