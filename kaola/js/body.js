function VPortChange() {
  let distanceOfVP = document.getElementById('newUserGift').children[0].getBoundingClientRect()
  let wrap = document.body.children[0]
  if (distanceOfVP.x <= 0) {
    wrap.style.transform = 'none'
    wrap.style.position = 'static'
    wrap.style.width = '1100px'
    wrap.style.paddingRight = '100px'
  }
  if (document.body.offsetWidth > 1100) {
    wrap.style.transform = 'translate(-50%)'
    wrap.style.position = 'absolute'
    wrap.style.width = '100vw'
    wrap.style.paddingRight = '0'
  } else {
    wrap.style.width = 'auto'
    wrap.style.paddingRight = '100px'
  }
}
function setWidth() {
  document.body.children[0].style.width = '100vw'
}