const db = require('../db');

const Estudiante = {
  getAll: (callback) => {
    db.query('SELECT * FROM estudiantes', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM estudiantes WHERE id = ?', [id], callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO estudiantes (nombre, correo) VALUES (?, ?)', [data.nombre, data.correo], callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE estudiantes SET nombre = ?, correo = ? WHERE id = ?', [data.nombre, data.correo, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM estudiantes WHERE id = ?', [id], callback);
  }
};

module.exports = Estudiante;