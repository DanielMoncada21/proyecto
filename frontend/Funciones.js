function cargarEstudiantes() {
  fetch('http://localhost:3000/api/estudiantes')
    .then(response => response.json())
    .then(data => {
      const lista = document.getElementById('lista');
      lista.innerHTML = '';
      data.forEach(est => {
        const li = document.createElement('li');
        li.textContent = `${est.nombre} - ${est.correo}`;
        lista.appendChild(li);
      });
    })
    .catch(error => console.error('Error:', error));
}
