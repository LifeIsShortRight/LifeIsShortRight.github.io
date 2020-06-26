
let logoAndSearch
let logoAndSearchFixed
function mainLogoAndSearch() {
  logoAndSearch = document.getElementById('logoAndSearch')
  logoAndSearchFixed = document.getElementById('logoAndSearchFixed')
  window.addEventListener('scroll', () => {
    let top = document.documentElement.scrollTop || document.body.scrollTop
    if (logoAndSearch.offsetTop <= top) {
      logoAndSearch.children[0].style.display = 'none'
      logoAndSearchFixed.style.display = 'block'
      // logoAndSearchFixed.style.top = logoAndSearch.offsetTop - lRect().y + 'px'
    } else {
      logoAndSearch.children[0].style.display = 'block'
      logoAndSearchFixed.style.display = 'none'
    }
  })
}
