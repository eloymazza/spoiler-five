const searchInput = document.querySelector('.searchDesk')
const searchResults = document.querySelector('.search-results')


document.addEventListener('keyup', () => {
    if(searchInput.value.length > 2) {
        searchResults.classList.remove('d-none')
    } 
    else {
        searchResults.classList.add('d-none')
    }
})