'use strict'
import { nextFiveTourDates } from './getFiveRecentTours.js'
import { toggleNodesForTours } from './addNodesForTours.js'
import { toogleTourInfo } from './toggleTours.js'

setInterval(() => {
  console.log('window.innerWidth', window.innerWidth)
  console.log('window.innerHeight', window.innerHeight)
}, 3000)

toggleNodesForTours(nextFiveTourDates)

const toggleTourInfoBtn = document.querySelector('.tours__btn_toggleTourInfo')
toggleTourInfoBtn.addEventListener('click', toogleTourInfo)

const renderCurrentDate = () => {
  const todayDate = new Date().toString().substring(0, 15)
  const footer = document.querySelector('.footer__date')
  footer.textContent = todayDate
}
renderCurrentDate()
setInterval(renderCurrentDate, 10000)
