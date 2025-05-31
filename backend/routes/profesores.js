const express = require('express');
const router = express.Router();
const profesoresController = require('../controllers/profesoresController');

router.get('/', profesoresController.getAll);
router.get('/:id', profesoresController.getById);
router.post('/', profesoresController.create);
router.put('/:id', profesoresController.update);
router.delete('/:id', profesoresController.delete);

module.exports = router;

