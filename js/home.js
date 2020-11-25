// mostrar mas recomendaciones DESKTOP
let btnRecomendacion = document.querySelector("#masRecomendaciones").addEventListener("click", addRecomendaciones);

function addRecomendaciones(){
    let ocultar = document.querySelector("#divMostrar").classList.toggle("mostrar");
    if(ocultar){
    document.querySelector("#imgMas").src = "../img/menos.png";
    }else{
    document.querySelector("#imgMas").src = "../img/anadir.png";
    }
}

// mostrar mas recomendaciones MOBILE
let btnRecomendacionMob = document.querySelector("#masRecomendacionesMob").addEventListener("click", addRecomendacionesMob);

function addRecomendacionesMob(){
    let ocultar = document.querySelector("#divMostrarMob").classList.toggle("mostrar");
    if(ocultar){
    document.querySelector("#imgMasMob").src = "../img/menos.png";
    }else{
    document.querySelector("#imgMasMob").src = "../img/anadir.png";
    }
}

// --- LIKE DESKTOP ---
let i = 0;
let btnLike = document.querySelector("#btnLike").onclick = function () {
    i++;
    if(i % 2 != 0){
        document.querySelector("#imgCorazon").src = "../img/corazon_cel_lleno.png";
    }else{
        document.querySelector("#imgCorazon").src = "../img/corazon_blanco.png";
    }
}
