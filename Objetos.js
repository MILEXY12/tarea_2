//Definion de un objeto
const estudiante = 
{
    matricula: "246", 
    apellidos: "Zambrano Andrade", 
    nombres:"Milexy Yovanka", 
    sexo: "Femenino", 
    edad: 19
};
console.log ("Objeto estudiante:",estudiante);
console.log ("Los apellidos del estudiante:",estudiante.apellidos);
console.log ("En el 2024 tu edad sera:",estudiante.edad + 1);

//  Arrray de objetos
const libro = 
[
    {codigo: "1234", nombreLibro: "After", precio: 98.65},
    {codigo: "4321", nombreLibro: "Hermosa Redincion", precio: 53.25},
    {codigo: "0987", nombreLibro: "A traves de mi ventana", precio: 12.20},
    {codigo: "7890", nombreLibro: "Inseparable", precio: 30.65},
];
console.log("Impremiendo array de objetos");
console.log (libro);
console.log("Libro de posicion 2", libro[2])
console.log("")
//1. USE EL FOREACH para imprimir todos los libros
libro.forEach(libro => console.log(libro));