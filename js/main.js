import { nextFiveTourDates } from './getFiveRecentTours.js'
import { toggleNodesForTours } from './addNodesForTours.js'
import { toogleTourInfo } from './toggleTours.js'

toggleNodesForTours(nextFiveTourDates)

const toggleTourInfoBtn = document.querySelector('.btn_toggleTourInfo')
toggleTourInfoBtn.addEventListener('click', toogleTourInfo)
