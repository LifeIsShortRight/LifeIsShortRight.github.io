let hotBrandProgressBar
let hotbrandLi
let hotBrandIndex = 0
function mainHotBrand() {
  hotBrandProgressBar = document.getElementsByClassName('hotBrandProgressBar')[0]
  hotbrandLi = document.getElementsByClassName('hotBrandCarousel')[0].children
  let length = hotbrandLi.length
  while (--length >= 0) {
    hotbrandLi[length].style.zhotBrandIndex = hotbrandLi.length - length
    if (hotBrandIndex !== length) hotbrandLi[length].style.opacity = '0'
  }
  setInterval(() => {
    hotBrandNext()
  }, 3500);
}
function hotBrandPrev() {
  hotBrandIndex--
  if (hotBrandIndex < 0) hotBrandIndex = hotbrandLi.length - 1
  hotBrandProgressBar.style.width = 100 * ((hotBrandIndex + 1) / hotbrandLi.length) + '%'
  for (let i = 0; i < hotbrandLi.length; i++) {
    if (hotBrandIndex !== i) {
      hotbrandLi[i].style.opacity = '0'
      hotbrandLi[i].style.zhotBrandIndex = '-1'
    }
    if (hotBrandIndex === i) {
      hotbrandLi[i].style.opacity = '1'
      hotbrandLi[i].style.zhotBrandIndex = '1'
    }
  }

}
function hotBrandNext() {
  hotBrandIndex++
  if (hotBrandIndex > hotbrandLi.length - 1) hotBrandIndex = 0
  hotBrandProgressBar.style.width = 100 * ((hotBrandIndex + 1) / hotbrandLi.length) + '%'
  for (let i = 0; i < hotbrandLi.length; i++) {
    if (hotBrandIndex !== i) {
      hotbrandLi[i].style.opacity = '0'
      hotbrandLi[i].style.zhotBrandIndex = '-1'
    }
    if (hotBrandIndex === i) {
      hotbrandLi[i].style.opacity = '1'
      hotbrandLi[i].style.zhotBrandIndex = '1'
    }
  }
}