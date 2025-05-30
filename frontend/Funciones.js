const API_URL = 'http://localhost:3000/api';

async function cargarEstudiantes() {
  const res = await fetch(`${API_URL}/estudiantes`);
  const estudiantes = await res.json();
  const lista = document.getElementById('lista');
  lista.innerHTML = '';
  estudiantes.forEach(est => {
    const li = document.createElement('li');
    li.textContent = `${est.nombre} (${est.correo})`;
    lista.appendChild(li);
  });
}

async function cargarProfesores() {
  const res = await fetch(`${API_URL}/profesores`);
  const profesores = await res.json();
  const lista = document.getElementById('lista-profesores');
  lista.innerHTML = '';
  profesores.forEach(prof => {
    const li = document.createElement('li');
    li.textContent = `${prof.nombre} (${prof.correo})`;
    lista.appendChild(li);
  });
}

async function cargarAsignaturas() {
  const res = await fetch(`${API_URL}/asignaturas`);
  const asignaturas = await res.json();
  const lista = document.getElementById('lista-asignaturas');
  lista.innerHTML = '';
  asignaturas.forEach(asig => {
    const li = document.createElement('li');
    li.textContent = `${asig.nombre} (${asig.creditos} créditos)`;
    lista.appendChild(li);
  });
}
