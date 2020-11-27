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

// efecto
let animado = document.querySelectorAll(".animado");    //todas las clases
function animar(){
  
    for(let i = 0; i < animado.length; i++){    
        animado[i].style.opacity = 1;
        animado[i].classList.add("mostrarIzq");
        }
}
window.addEventListener("load", animar);
