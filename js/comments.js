const userCommentText = document.getElementById('user-comment-text')
const userCommentStars = document.querySelectorAll('.star-voted')

let cookie = document.cookie
cookie = cookie.split(';')
let content = cookie[0].split('=')[1]
let votedStars = cookie[1].split('=')[1]

userCommentText.innerHTML = content || 'Example'

for (let i = 0; i < votedStars; i++) {
    userCommentStars[i].src = '../img/estrella.png'
    
}