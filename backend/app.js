const express = require('express');
const cors = require('cors');
const app = express();

// Habilitar CORS para todas las rutas
app.use(cors());

// Permitir recibir JSON en las peticiones
app.use(express.json());

// Importar y usar las rutas
app.use('/api/estudiantes', require('./routes/estudiantes'));
app.use('/api/profesores', require('./routes/profesores'));
app.use('/api/asignaturas', require('./routes/asignaturas'));

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
