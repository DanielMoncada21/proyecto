// Función para cargar todos los estudiantes desde la API
async function cargarEstudiantes() {
  try {
    const res = await fetch("http://localhost:3000/api/estudiantes");
    if (!res.ok) throw new Error("Error al obtener estudiantes.");
    const estudiantes = await res.json();
    const tabla = document.getElementById("tablaEstudiantes");
    tabla.innerHTML = "";
    estudiantes.forEach(e => {
      tabla.innerHTML += `
        <tr>
          <td>${e.id}</td>
          <td>${e.nombre}</td>
          <td>${e.correo}</td>
          <td>${e.carrera}</td>
          <td>
            <button onclick="eliminarEstudiante(${e.id})" class="btn btn-danger btn-sm">Eliminar</button>
          </td>
        </tr>`;
    });
  } catch (error) {
    alert("No se pudo cargar la lista de estudiantes.");
    console.error(error);
  }
}

// Función para eliminar un estudiante
async function eliminarEstudiante(id) {
  if (!confirm("¿Estás seguro de eliminar este estudiante?")) return;
  try {
    const res = await fetch(`http://localhost:3000/api/estudiantes/${id}`, {
      method: "DELETE"
    });
    if (res.status !== 204) throw new Error("Error al eliminar estudiante.");
    cargarEstudiantes();
  } catch (error) {
    alert("No se pudo eliminar el estudiante.");
    console.error(error);
  }
}

// Evento para registrar un nuevo estudiante
document.getElementById("formEstudiante").addEventListener("submit", async e => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const carrera = document.getElementById("carrera").value.trim();

  if (!nombre || !correo || !carrera) {
    alert("Todos los campos son obligatorios.");
    return;
  }

  try {
    const res = await fetch("http://localhost:3000/api/estudiantes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, correo, carrera })
    });

    if (!res.ok) throw new Error("Error al registrar estudiante.");
    document.getElementById("formEstudiante").reset();
    cargarEstudiantes();
  } catch (error) {
    alert("No se pudo registrar el estudiante.");
    console.error(error);
  }
});

// Cargar estudiantes al iniciar
cargarEstudiantes();
