// Los objetos es una lista de lementos pero cada elemento tiene un nombre clave

const obj = {
    nombre: "carlos",
    apellido: "suarez",
    edad: 3,
    comidasFavoritas: ['Pollo frito', 'vegetales'],
};

function imprimirElementoPorElementoObjecto(obj){
    const arr = Object.values(obj);
    for ( let i = 0; i < arr.length ; i++){
        console.log(arr[i])
    }
   
}
