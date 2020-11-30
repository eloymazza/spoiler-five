const stars = document.querySelectorAll('.star')
const commentsContainer = document.querySelector('.comments-container')
const voteHelpText = document.querySelector('.vote-text')
const vote = document.querySelector('#vote')

let voted = false

const handleVote = (i) => {
    stars[i].classList.add('vote-animation')
    voted = true
    setTimeout( () => {
        commentsContainer.classList.remove('hide')
    }, 1500)
}

const fullfillStars = (pos) => {
    stars.forEach( (star) => {
        star.src = '../img/estrella_va.png'        
    })
    for (let i = 0; i <= pos; i++) {
        stars[i].src = '../img/estrella.png'        
    }
}

stars.forEach((star, i) => {
    star.addEventListener('mouseover', () => {
        if(voted) return
        fullfillStars(i)
    })
    star.addEventListener('click', () => {
        if(voted) return
        handleVote(i)
    })

})

vote.addEventListener('click', () => {
<<<<<<< Updated upstream
    voteHelpText.innerText = 'Gracias por tu calificacion!'
    commentsContainer.classList.add("hide")
})


let a = 1
=======
    vote.classList.add("load");
    let time = setTimeout(function(){
        voteHelpText.innerText = 'Gracias por tu calificacion!'
        commentsContainer.classList.add("hide")
        let content = commentContent.value
        document.cookie = `content=${content}`
        document.cookie = `stars=${voteStars}`
        console.log(document.cookie)
    }, 2500);
})

// vote.addEventListener('click', () => {
//     voteHelpText.innerText = 'Gracias por tu calificacion!'
//     commentsContainer.classList.add("hide")
//     let content = commentContent.value
//     document.cookie = `content=${content}`
//     document.cookie = `stars=${voteStars}`
//     console.log(document.cookie)
// })

>>>>>>> Stashed changes
