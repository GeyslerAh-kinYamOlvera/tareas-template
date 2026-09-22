/**
 * PROGRAMACIÓN WEB - SPRINT 2
 * Ejercicio 1: Repaso Práctico de Arreglos y Objetos
 * 
 * En este ejercicio recordaremos cómo funcionan los objetos en JavaScript
 * y cómo podemos recorrer y filtrar Arreglos usando funciones modernas.
 */

// 1. OBJETOS LITERALES (JSON)
// En JS no necesitas instanciar una clase para tener un objeto.
const usuario = {
    nombre: "Ana",
    rol: "Product Owner",
    sprintActivo: 2,
    presentarse: function() {
        console.log(`Hola, soy ${this.nombre} y mi rol es ${this.rol}`);
    }
};

usuario.presentarse();


// 2. ARREGLOS DE OBJETOS
// Así es como las bases de datos y las APIs devuelven la información.
const proyectos = [
    { id: 1, titulo: "E-commerce Zapatos", equipo: "Amazon", calificacion: 9 },
    { id: 2, titulo: "Sistema de Inventario", equipo: "Oxxo", calificacion: 7 },
    { id: 3, titulo: "App de Películas", equipo: "Cinépolis", calificacion: 10 },
    { id: 4, titulo: "Portal de Helados", equipo: "Michoacana", calificacion: 8 }
];

console.log("Catálogo inicial de proyectos:");
console.table(proyectos);


// 3. RECORRER ARREGLOS (map)
// .map() nos permite extraer o transformar los datos sin usar un ciclo for.
// Ej: Queremos solo los nombres de los equipos.
const nombresDeEquipos = proyectos.map(function(proyecto) {
    return proyecto.equipo;
});

console.log("Nombres de los equipos:", nombresDeEquipos);


// 4. FILTRAR ARREGLOS (filter)
// .filter() nos devuelve un arreglo nuevo solo con los elementos que cumplan una condición.
// Ej: Queremos buscar solo los proyectos con calificación mayor o igual a 9.
const proyectosDestacados = proyectos.filter(function(proyecto) {
    return proyecto.calificacion >= 9;
});

console.log("Proyectos con calificación >= 9:");
console.table(proyectosDestacados);

// ------------------------------------------------------------------
// RETO PARA LA CLASE: 
// Escribe el código para filtrar el proyecto del equipo "Oxxo" 
// y mostrar su título en la consola.
// ------------------------------------------------------------------
