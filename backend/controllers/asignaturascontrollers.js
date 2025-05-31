const Asignatura = require('../models/asignatura');

exports.getAll = (req, res) => {
  Asignatura.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getById = (req, res) => {
  Asignatura.getById(req.params.id, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results[0]);
  });
};

exports.create = (req, res) => {
  Asignatura.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ id: result.insertId, ...req.body });
  });
};

exports.update = (req, res) => {
  Asignatura.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.sendStatus(204);
  });
};

exports.delete = (req, res) => {
  Asignatura.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.sendStatus(204);
  });
};