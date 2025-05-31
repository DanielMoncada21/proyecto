const db = require('../db');

const Profesor = {
  getAll: (callback) => {
    db.query('SELECT * FROM profesores', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM profesores WHERE id = ?', [id], callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO profesores (nombre, correo) VALUES (?, ?)', [data.nombre, data.correo], callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE profesores SET nombre = ?, correo = ? WHERE id = ?', [data.nombre, data.correo, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM profesores WHERE id = ?', [id], callback);
  }
};

module.exports = Profesor;