// mostrar mas recomendaciones
let btnRecomendacion = document.querySelector("#masRecomendaciones").addEventListener("click", addRecomendaciones);

function addRecomendaciones(){
    let ocultar = document.querySelector("#divMostrar").classList.toggle("mostrar");
    if(ocultar){
    document.querySelector("#imgMas").src = "../img/menos.png";
    }else{
    document.querySelector("#imgMas").src = "../img/anadir.png";
    }
}