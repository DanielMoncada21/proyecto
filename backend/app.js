const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const estudiantesRoutes = require('./routes/estudiantes');
const profesoresRoutes = require('./routes/profesores');
const asignaturasRoutes = require('./routes/asignaturas');

app.use('/api/estudiantes', estudiantesRoutes);
app.use('/api/profesores', profesoresRoutes);
app.use('/api/asignaturas', asignaturasRoutes);

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
