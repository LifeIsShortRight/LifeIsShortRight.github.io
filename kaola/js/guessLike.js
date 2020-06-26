
let guessLike
let guessLikeDescription
function mainGuessLike() {
  guessLike = document.getElementById('guessLike')
  guessLikeDescription = guessLike.children[0].children[1].getElementsByClassName('description')
  for (let i of guessLikeDescription) {
    if (i.innerHTML.length > 50) {
      i.innerHTML = i.innerHTML.substr(0, 51) + '...'
    }
  }
}