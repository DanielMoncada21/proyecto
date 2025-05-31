const db = require('../db');

const Asignatura = {
  getAll: (callback) => {
    db.query('SELECT * FROM asignaturas', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM asignaturas WHERE id = ?', [id], callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO asignaturas (nombre, creditos) VALUES (?, ?)', [data.nombre, data.creditos], callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE asignaturas SET nombre = ?, creditos = ? WHERE id = ?', [data.nombre, data.creditos, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM asignaturas WHERE id = ?', [id], callback);
  }
};

module.exports = Asignatura;