let img = [
  './img/topBox/carousel/01.jpg',
  './img/topBox/carousel/02.jpg',
  './img/topBox/carousel/03.jpg',
  './img/topBox/carousel/04.jpg'
]
let topTabBoxIndex = 0
let topTabBoxDot = 0
let topTabBoxDots
let topTabBoxATag
let imgTag = document.createElement('img')
function mainTopTabBox() {
  topTabBoxATag = document.getElementsByClassName('carouselImg')[0]
  topTabBoxDots = document.getElementsByClassName('dots')[0]
  for (let i in img) {
    let li = document.createElement('li')
    li.id = `'topTabBoxDot${i}'`
    topTabBoxDots.appendChild(li)
  }
  topTabBoxDots.children[0].className = 'active'
  imgTag.src = img[topTabBoxIndex]
  topTabBoxATag.appendChild(imgTag)
  setInterval(() => {
    topTabBoxNext()
  }, 3500);
}
function topTabBoxNext() {
  if (topTabBoxIndex === img.length - 1) {
    topTabBoxIndex = 0
  } else {
    topTabBoxIndex++
  }
  for (let i of topTabBoxDots.children) {
    i.className = ''
  }
  topTabBoxDots.children[topTabBoxIndex].className = 'active'
  imgTag.src = img[topTabBoxIndex]
  topTabBoxATag.appendChild(imgTag)
}
function topTabBoxPrev() {
  if (topTabBoxIndex === 0) {
    topTabBoxIndex = img.length - 1
  } else {
    topTabBoxIndex--
  }
  for (let i of topTabBoxDots.children) {
    i.className = ''
  }
  topTabBoxDots.children[topTabBoxIndex].className = 'active'
  imgTag.src = img[topTabBoxIndex]
  topTabBoxATag.appendChild(imgTag)
}