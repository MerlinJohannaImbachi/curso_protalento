//los arrays es una lista de elementos
 const arrays = [1, "jajajja",  true, false, {nombre: 'lala', apellido:'cala'}];
 
 
 function imprimirPrimerElementoArray(arrays){
    console.log(arrays[0])
}

function imprimirElementoPorElemento(arrays){
    for ( let i = 0; i < arrays.length ; i++){
       console.log(arrays[i])
    }
}