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