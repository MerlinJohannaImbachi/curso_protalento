//funcion tiene parametros//
//funcion declarativa 
//function suma (num1, num2)
//{
   // resultado = num1 + num2
    //console.log(resultado)
//}
//suma(10.5)

// forma 2 -funcion anonima + expresion
//var sumaOtraForma = function(num1, num2) {
  //  var resultado = num1 + num2
  //  return resultado 
//}
//sumaOtraForma(15, 5) 

//function CalcularVolumenCubo(lado){
  //  volumen = lado ** 3
    //return volumen;
 //}
 //const resultado = CalcularVolumenCubo(12)
 //console.log(resultado);


 //function calcularVolumenPiramide(base, altura){
   // resultado = (((base **2)* altura)/ 3) ;
   // return (resultado)
// }
 //const calcularVolumenPiramide = volumenPiramide(2,5)
 //console.log(volumenPiramide);


 const divRoot = document.getElementById ('root');

 const div2 = document.createElement ('div')
 div2.setAttribute = ('class', 'card')

 const h3 = document.createElement ('h3')
 h3.textContent = 'Imagen uno'; 

 const p = document.createElement ('p')
 p.textContent = 'Descripción de la imagen';

 const img = document.createElement ('img')
 img.setAttribute = ('class', 'size')
 img.setAttribute = ('src', 'https://images.unsplash.com/photo-1664990594768-d6ed59d8983a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80');
 img.setAttribute = ('alt', 'bosque');

 
 div2.appendChild(h3)
 div2.appendChild(p);
 div2.appendChild(img);
 divRoot.appendChild(div2);


 console.log('hola mundo')
