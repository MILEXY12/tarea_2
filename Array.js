const {persone, ciudades} = require ("./datos");
console.log("Separando los datos de un archivo");
//console.log(persone);
console.log(ciudades);

//2. Listar las peronsas femenidas
//.filter : filtra aquellos elementos que cumplen con una condicion determinada
console.log("");
console.log("Listar las peronsas femeninas");
const femenino = persone.filter( persone => persone.sexo == "Femenino")
console.log(femenino);

//3. Listado de ciudades con temperatura mayores a 25
console.log("");
console.log("Listado de ciudades con temperatura mayores a 25");
const temperatura = ciudades.filter( ciudades => ciudades.tem > 25)
console.log(temperatura);

//4. Encuentre el total de la popblacion e3l array ciudades
const poblacion = ciudades.reduce ((acum, ciudades)=> acum + ciudades.poblacion, 0);
console.log ("La cantidad de habitantes es: ", poblacion);

//5. Encuentre la sumatoria de los pesos de las perosane masculinas
const Masculino = persone.filter( persone => persone.sexo == "Masculino").reduce ((acum, persone)=> acum + persone.peso, 0);
console.log ("La cantidad de pesos es: ", Masculino);

//.6 Encuentre el promedio de temperaturas en el array 
const promedio = ciudades.reduce ((acum, ciudades)=> acum + ciudades.tem, 0)/ciudades.length;
console.log ("El promedio es: ", promedio);