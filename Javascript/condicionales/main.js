const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
    case "Free":
    console.log ("Solo puedes tomar los cursos gratis");
    break;
    case "Basic":
        console.log("puedes tomar casi todos los cursos de platzi durante un mes ");
        break;
    case "Expert":
        console.log("puedes tomar casi todos los cursos de platzi durante un año");
        break;
    case "ExpertDuo":
        console.log("tu y alguien mas puede tomar el curso de platzi durante un año");
        break;
        
}