let newUserGift
let leftIndex
let rightIndex
function mainLeftIndex() {
  newUserGift = document.getElementById('newUserGift')
  leftIndex = document.getElementById('leftIndex')
  rightIndex = document.getElementById('rightIndex')
  leftIndexDisplay()

  window.addEventListener('scroll', () => {
    let top = document.documentElement.scrollTop || document.body.scrollTop
    if (newUserGift.offsetTop <= top) {
      if (parseInt(leftIndex.style.top) !== 66) {
        leftIndex.style.position = 'fixed'
        leftIndex.style.top = '66px'
      }
      rightIndex.style.position = 'fixed'
      rightIndex.style.top = '66px'
      rightIndexDisplay()
    } else {

      if (parseInt(leftIndex.style.top) !== 780) {
        leftIndex.style.position = 'absolute'
        leftIndex.style.top = '780px'
        leftIndex.style.right = '1320px'
      }
      rightIndex.style.position = 'absolute'
      rightIndex.style.top = '780px'
      rightIndex.style.left = newUserGift.children[0].offsetWidth + (document.body.offsetWidth - newUserGift.children[0].offsetWidth) / 2 + 15 + 'px'

    }
  })
}
function rightIndexDisplay() {
  let rightIndex = document.getElementById('rightIndex')
  let newUserGift = document.getElementById('newUserGift')
  // let margin = document.body.offsetWidth - newUserGift.children[0].offsetWidth
  // if (document.body.offsetWidth <= 1090) {
  rightIndex.style.left = (newUserGift.children[0].offsetWidth + 25) + (document.scrollingElement.getBoundingClientRect().x) + 'px'
  if (document.body.offsetWidth > 1100) {
    rightIndex.style.left = newUserGift.children[0].offsetWidth + ((document.body.offsetWidth - newUserGift.children[0].offsetWidth) / 2) + 15 + 'px'
    // } else {
  }
  //   rightIndex.style.left = newUserGift.children[0].offsetWidth + ((document.body.offsetWidth - newUserGift.children[0].offsetWidth) / 2) + 15 + 'px'
  // }
}
function leftIndexDisplay() {
  let leftIndex = document.getElementById('leftIndex')
  if (document.body.offsetWidth <= 1090) {
    leftIndex.style.display = 'none'
  } else {
    leftIndex.style.display = 'block'
  }
}
