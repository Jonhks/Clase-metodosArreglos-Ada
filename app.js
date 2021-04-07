
// map => []
// devuelve un nuevo arreglo con lo que nosotros le pidamos
// const numeros = [1, 5, 10, 15];

// const nuevoArreglo = numeros.map(numero => numero * 2);
// console.log(nuevoArreglo);

// const nuevoArreglo = [];

// for (let index = 0; index < numeros.length; index++) {
//   nuevoArreglo.push(numeros[index] * 2)
// }

// console.log(nuevoArreglo);


// find => devuelve el primer valor del elemento que cumpla con la condicion
// 

// const numeros = [1, 30, 39, 29, 10, 13, 50];

// const resultado = numeros.find(numero => numero > 10);

// let resultado = 0;
// for (let index = 0; index < numeros.length; index++) {
//   if(numeros[index] > 10){
//      resultado += numeros[index]
//      break
//   } 
// }
// console.log(resultado);


// filter => []
// nuevo arreglo con los elementos que coincidan con la condicion que le pasemos

// const  paises = ['México', 'Argentina', 'Peru', 'Colombia', 'Chile', 'Uruguay'];

// const resultado = paises.filter(pais => pais.length > 5)
// const resultado = paises.filter((pais, index, arr) => console.log(arr))
// const resultado = paises.filter((arreglo) => console.log(arreglo));

// const resultado = [];

// for (let index = 0; index < paises.length; index++) {
//   if(paises[index].length > 5){
//     resultado.push(paises[index])
//   }
// }

// console.log(resultado);

// every => true/false
// Devuelve un true si todos los elementos del array cumplen la condicion y false en caso que no.

// const numeros = [1, 30, 6, 24, 19, 7] // < 25 true

// const resultado = numeros.every(numero => numero < 25);

// let resultado = false
// for (let index = 0; index < numeros.length; index++) {
//     if(numeros[index] > 25){
//       resultado = false
//       break
//     } else {
//       resultado = true
//     }
// }

// console.log(resultado);

// some => true/false
// Cuando encuentra minimo una coincidencia con la condicion que le pasamos

// const numeros = [1, 30, 6, 24, 19, 7] // > 25 true

// const resultado = numeros.some(numero => numero > 25)

// let resultado = false;

// for (let index = 0; index < numeros.length; index++) {
//   if(numeros[index] > 25){
//     resultado = true;
//     break
//   }
// }

// console.log(resultado)

// foreach => ejecuta la funcion tantas veces le digamos

// const nombres = ['Jonh', 'Leydy', 'Andy', 'Gaby', 'Agus', 'Edi']; // pasar a mayusculas

// nombres.forEach((nombre) => console.log(nombre.toUpperCase()));

// for (let index = 0; index < nombre.length; index++) {
//   console.log(nombre[index].toUpperCase());
// }


// sort => devuelve el arreglo ordenado 

// const frutas = ['Mango', 'Piña', 'Fresa', 'Naranja', 'Limon', 'Durazno'];

// const resultado = frutas.sort()

// console.log(resultado);

// const numeros = [1, 10, 2, 4, 12];
//               //           a,  b
// const numeros = [1, 2, 4, 10, 12];
// // const numeros = [1, 2, 4, 10, 12];

// console.log(numeros.sort((a, b) => a - b))

// const items = [
//   { name: 'Edward', value: 21 },
//   { name: 'Sharpe', value: 37 },
//   { name: 'And', value: 45 },
//   { name: 'The', value: -12 },
//   { name: 'Magnetic', value: 13 },
//   { name: 'Zeros', value: 37 }
// ];

// console.log(items.sort((a,b) => {
//   if(a.name > b.name){
//     return 1;
//   }
//   if(a.name < b.name){
//     return -1
//   }
//   return 0
// }))

// console.log(items.sort((a,b) => a.name > b.name))


// reduce => elemento que es la suma de todos los elementos que estan en ele arreglo
      // count =  3 + 3 = 6 + 10
// const numeros = [1, 2, 3, 4]; // 10


// console.log(
  // nombres.reduce((count, value) => count + value, '')
// )
// console.log(numeros.reduce((count, value)=> count + value, 0));

// let count = 0;
// for (let index = 0; index < numeros.length; index++) {
//   count += numeros[index];
// }
// console.log(count);

// const nombres = ['Jonh', 'Leydy', 'Andy', 'Gaby', 'Agus', 'Edi']; // 
// const nombres = ['Edi', 'Agus', 'Gaby', 'Andy', 'Leydy', 'Jonh'];

// console.log(nombres.sort().reverse());









