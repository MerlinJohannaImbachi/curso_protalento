// h1 { color: red}
// .parrafito { ...}
// #pid{ ... }

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');


//una de las formas de escuchar eventos es añadiendole a la etiqueta "onclick" y crear una funcion
function btnOnClick(){
    const sumaInputs = +input1.value +  +input2.value;
    pResult.innerHTML = "Resultado: " + sumaInputs;

}

//console.log(input.value);


console.log({
    h1,
    p,
    parrafito,
    pid,
});

//propiedad que me sirve para modificar el DOM convierte todo a html
h1.innerHTML = 'paitito <br> Feo';

// convierte todo a texto
h1.innerText = 'paitito <br> Feo';

//GET atribute es una propiedad que me ayudan a leer alguna clase o atributo
// que hayamos puesto en el HTML
h1.getAttribute('pantalla');
// SET nos ayuda a modificar las clases 
console.log(p.setAttribute('class', 'rojo'));

// add nos ayuda a añadir clases
h1.classList.add('rojo')

//eliminar una clase
h1.classList.remove('rojo')

// toggle sirve para poner y quitar dependiento como lo vamos a usar
//h1.classList.toggle('verde')

//contains es como un tipo de condicional que nos devuelve true o false 
//dependiendo de la clase que le estemos mostrarndo por ejemplo si tiene la clase 'verde' 
// si esto es verdadero devuelve true

//h1.classList.contains('verde');

 //input.value= "456";

 //document.createElement nos ayuda a crear el elemento html que nosotros querramos


const img =  document.createElement('img');
img.setAttribute('src', 'https://www.clipartmax.com/png/small/103-1030501_manga-8-de-dragon-ball-super-totalmente-en-espa%C3%B1ol-imagen-de-goku.png');

//pid.append(img);

//para poder borrar el contenido del parrafo que es "Esto es un parrafo con ID" podemos renplazarlo
//pid.replaceWith(img);

//o otra opcion volverlo un string y luego añadir la img
pid.innerHTML = "";
pid.appendChild(img)

//agrega atributos
//setAttribute


//onchange 

//addEventList


