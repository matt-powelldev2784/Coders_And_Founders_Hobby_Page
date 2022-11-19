import { nextFiveTourDates } from './getFiveRecentTours.js'
import { toggleNodesForTours } from './addNodesForTours.js'
import { toogleTourInfo } from './toggleTours.js'

toggleNodesForTours(nextFiveTourDates)

const toggleTourInfoBtn = document.querySelector('.tours__btn_toggleTourInfo')
toggleTourInfoBtn.addEventListener('click', toogleTourInfo)

const todayDate = new Date().toString().substring(0, 15)
const footer = document.querySelector('.footer__date')
footer.textContent = todayDate
