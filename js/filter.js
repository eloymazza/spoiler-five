const imgFiltro = document.querySelector('#imgFiltro')
const filterContainer = document.querySelector('.filter-container')
let filterActive = false

imgFiltro.addEventListener('click', () => {
    if(filterActive) {
        imgFiltro.src = "../img/filtrar_gris.png"
        filterActive = false
        filterContainer.classList.add('d-sm-none')
    }
    else {
        imgFiltro.src = "../img/filtrar_cel.png"
        filterActive = true
        filterContainer.classList.remove('d-sm-none')
        filterContainer.classList.remove('d-none')
    }
})


const filterButtons = document.querySelectorAll('.filter-button')
const playlistGroups = document.querySelectorAll('.playlists-group')
const activeFilters = []

const toggleActive = (i) => {
    let filterName =  filterButtons[i].value
    if(filterButtons[i].classList.contains('active-filter-button')) {
        filterButtons[i].classList.remove('active-filter-button')
        activeFilters.splice(activeFilters.indexOf(filterName),1)
    }
    else {
        filterButtons[i].classList.add('active-filter-button')
        activeFilters.push(filterName)
    }
    filterResults()
}

const filterResults = () => {
    if(activeFilters.length > 0) {
        playlistGroups.forEach( (playlistGroup) => {
            let remove = true
            for (let index = 0; index < activeFilters.length; index++) {
                if(playlistGroup.classList.contains(activeFilters[index])) {
                    remove = false
                }
            }
            if(remove) {
                playlistGroup.classList.add('d-sm-none')
            }
            else {
                playlistGroup.classList.remove('d-sm-none')
            }
        })
    }
    if(activeFilters.length == 0) {
        playlistGroups.forEach( playlistGroup  => {
            playlistGroup.classList.remove('d-sm-none')
        });
    }
}

filterButtons.forEach((filterButton, i) => {
    filterButton.addEventListener('click', () => {
        toggleActive(i)
    })
}) 