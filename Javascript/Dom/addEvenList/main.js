const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

const form2 = document.querySelector('#form2');
const input3 = document.querySelector('#calculo3');
const input4 = document.querySelector('#calculo4');
const btn2 = document.querySelector('#btnCalcular2');
const pResult2 = document.querySelector('#result2');


//btn.addEventListener('click', btnOnClick);



//function btnOnClick(){
   // const sumaInputs = +input1.value +  +input2.value;
  //pResult.innerHTML = "Resultado: " + sumaInputs;

//}

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event){
    event.preventDefault();
    const sumaInputs = +input1.value +  +input2.value;
    pResult.innerHTML = "Resultado: " + sumaInputs;

}

//otra solución
btn2.addEventListener('click', sumarInputValues2);

function sumarInputValues2(event){
   event.preventDefault();
   const sumaInputs2 = +input3.value +  +input4.value;
   pResult2.innerHTML = "Resultado: " + sumaInputs2;
}


const titulo = document.getElementById('titulo');
titulo.textContent = 'otro titulo manipulando el DOM'
titulo.style.backgroundColor = "#ffff"

//const parrafo = document.getelementByClassName('parrafo')
//parrafo [0].textContent = 'soy un parrafo numero'

//const elementosHTML = document.getElementByTagName('h2')
elmentosHTML[0].textContent = 'cambiando el subtitulo'
