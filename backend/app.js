const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());


app.use(express.json());

app.use('/api/estudiantes', require('./routes/estudiantes'));
app.use('/api/profesores', require('./routes/profesores'));
app.use('/api/asignaturas', require('./routes/asignaturas'));


app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
