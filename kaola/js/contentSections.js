let contentSections
let contentSectionsright
let contentSectionsul
let contentSectionsdots
let contentSectionsindex = 0
let contentSectionsstop = false
let contentSectionstimerId = []
function mainContentSections() {
  contentSections = document.getElementById('contentSections')
  contentSectionsright = contentSections.children[0].children[1].children[2]
  contentSectionsul = document.getElementsByClassName('contentCarouselItem')
  contentSectionsdots = contentSectionsright.children[0].children[0].children
  for (let item of contentSectionsdots) {
    item.onmouseover = () => {
      contentSectionsstop = true
      for (let i of contentSectionstimerId) {
        clearInterval(i)
      }
      for (let i = 0; i < contentSectionsdots.length; i++) {
        if (contentSectionsdots[i] !== item) {
          contentSectionsdots[i].style.backgroundColor = '#e1e1e1'
          contentSectionsul[i].style.opacity = '0'
          contentSectionsul[i].style.zcontentSectionsIndex = '0'
        }
        if (contentSectionsdots[i] === item) {
          contentSectionsindex = i
          contentSectionsdots[i].style.backgroundColor = '#333'
          contentSectionsul[i].style.opacity = '1'
          contentSectionsul[i].style.zcontentSectionsIndex = '1'
        }
      }
    }
    item.onmouseout = () => {
      contentSectionsstop = false
      autoPlay()
    }
  }
  for (let i = 0; i < contentSectionsul.length; i++) {
    contentSectionsul[i].style.zcontentSectionsIndex = `${contentSectionsul.length - i}`
  }
  autoPlay()
}
function autoPlay(delay = 3500) {
  let timer = setInterval(() => {
    if (contentSectionsstop === true) {
      clearInterval(timer)
      return
    }
    contentNext()
  }, delay)
  if (!contentSectionstimerId.find(item => item === timer)) {
    contentSectionstimerId.push(timer)
  }
}
function contentNext() {
  contentSectionsindex++
  if (contentSectionsindex > contentSectionsdots.length - 1) contentSectionsindex = 0
  for (let i = 0; i < contentSectionsdots.length; i++) {
    if (contentSectionsindex !== i) {
      contentSectionsdots[i].style.backgroundColor = '#e1e1e1'
      contentSectionsul[i].style.opacity = '0'
      contentSectionsul[i].style.zcontentSectionsIndex = '0'
    }
    if (contentSectionsindex === i) {
      contentSectionsdots[i].style.backgroundColor = '#333'
      contentSectionsul[i].style.opacity = '1'
      contentSectionsul[i].style.zcontentSectionsIndex = '1'
    }
  }
}
