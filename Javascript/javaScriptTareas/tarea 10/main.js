const database = [
    {
       name: "michael estiben",
       module: "kata_js",
       exams: "10,20,30,50,70,100",
       is_active: false,
    },
    {
       name: "Nahara Casanova",
       module: "kata_intro_web",
       exams: "15,50,70,100",
       is_active: true,
    },
    {
       name: "Felipe Plaza",
       module: "kata_intro_web",
       exams: "70,20,30,50,70,100,00",
       is_active: true,
    },
    {
       name: "Franco Martinez",
       module: "kata_intro_web",
       exams: "30,100,100,100,70,100",
       is_active: true,
    },
    {
       name: "Francisca Fuentes",
       module: "kata_js",
       exams: "40,100,30,50,70,100",
       is_active: true,
    },
    {
       name: "Diego Angulo",
       module: "kata_js",
       exams: "00,30,55,90,100",
       is_active: true,
    },
]
alumnos_aprobados = []

//function conseguirTipoSuscripciones(suscripcion){
  // if(tipoDeSuscripciones[suscripcion] ){
    //   console.log(tipoDeSuscripciones[suscripcion]);
      // return;
  // }
   //console.warn('Ese tipo de suscripcion no existe')
//}
   for (let i = 0; i < database.length; i++){
      const name = database[i].name
      const module = database[i].module
      const active = database[i].is_active
      const exams = database[i].exams.split(',')
      const examsNumber= []

      for(index = 0; index < exams.length; index++){
         examsNumber.push(+exams[index]);

      }
      if(active === true){
         if(examsNumber.length >= 5){

            
            console.log( 'Es activo', name);
         }
      }
   
      
   };
