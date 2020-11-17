let btnFiltrar = document.querySelector("#btnFiltrar").addEventListener("click", filtrar);

function filtrar(){
    let mostrarFiltro = document.querySelector("#filtro").classList.toggle("filtro-bl")

    if(mostrarFiltro){
        document.querySelector("#imgFiltro").src = "../img/filtrar_cel.png";
    }else{
        document.querySelector("#imgFiltro").src = "../img/filtrar_gris.png";
    }
}