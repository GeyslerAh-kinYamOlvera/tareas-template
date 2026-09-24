const usuario = {
  nombre: "Ana",
  rol: "Product Owner",
  sprintActivo: 2,
  presentarse: function () {
    console.log(`Hola, soy ${this.nombre} y mi rol es ${this.rol}`);
  },
};

usuario.presentarse();

const proyectos = [
  { id: 1, titulo: "E-commerce Zapatos", equipo: "Amazon", calificacion: 9 },
  { id: 2, titulo: "Sistema de Inventario", equipo: "Oxxo", calificacion: 7 },
  { id: 3, titulo: "App de Películas", equipo: "Cinépolis", calificacion: 10 },
  { id: 4, titulo: "Portal de Helados", equipo: "Michoacana", calificacion: 8 },
];

console.log("Catálogo inicial de proyectos:");
console.table(proyectos);

const nombresDeEquipos = proyectos.map(function (proyecto) {
  return proyecto.equipo;
});

console.log("Nombres de los equipos:", nombresDeEquipos);

const proyectosDestacados = proyectos.filter(function (proyecto) {
  return proyecto.calificacion >= 9;
});

console.log("Proyectos con calificación >= 9:");
console.table(proyectosDestacados);

const contenedor = document.getElementById("resultado-dom");

function pintarProyectoConEventos(lista) {
  contenedor.innerHTML = "";

  lista.forEach(function (proyecto) {
    // <--- TAREA T2-SPRING#2: EVENTOS SIMPLES --->
    // Instrucción: Agrega un evento de "doble clic" (ondblclick) a la tarjeta.
    // Cuando el usuario haga doble clic, la tarjeta debe desaparecer.
    // <--- AQUI TU CÓDIGO --->
    // <--- FIN DE TU CÓDIGO --->
  });
}

pintarProyectoConEventos(proyectos);
