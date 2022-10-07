if (tipoDeSuscripcio == "Free"){
    console.log ("Solo puedes tomar los cursos gratis");
}else if (tipoDeSuscripcio == "Basic"){
    console.log("puedes tomar casi todos los cursos de platzi durante un mes ");

}else if (tipoDeSuscripcio == "Expert"){
    console.log("puedes tomar casi todos los cursos de platzi durante un año");
}else if (tipoDeSuscripcio == "ExpertDuo"){
    console.log("tu y alguien mas puede tomar el curso de platzi durante un año");
}else {
    console.log("No haz elegido tu suscripcion ideal")
}

function conseguirTipoSuscripcion(suscripcion){
    if (suscripcion == "Free"){
        console.log ("Solo puedes tomar los cursos gratis");
        return;
    }

    if (suscripcion == "Basic"){
        console.log("puedes tomar casi todos los cursos de platzi durante un mes ");
        return;
    }
    if (suscripcion == "Expert"){
        console.log("puedes tomar casi todos los cursos de platzi durante un año");
        return;
    }

    if (suscripcion == "ExpertDuo"){
        console.log("tu y alguien mas puede tomar el curso de platzi durante un año");
        return;
    }
    console.warn('Este tipo de suscripcion no existe')
}

const tipoDeSuscripciones = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: 'puedes tomar casi todos los cursos de platzi durante un mes',
    expert: 'puedes tomar casi todos los cursos de platzi durante un año',
    expertDuo: 'tu y alguien mas puede tomar el curso de platzi durante un año'
};

function conseguirTipoSuscripciones(suscripcion){
    if(tipoDeSuscripciones[suscripcion] ){
        console.log(tipoDeSuscripciones[suscripcion]);
        return;
    }
    console.warn('Ese tipo de suscripcion no existe')
}