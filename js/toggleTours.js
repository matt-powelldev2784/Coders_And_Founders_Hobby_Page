import { tourInfo } from './tourDates.js'
import { nextFiveTourDates } from './getFiveRecentTours.js'
import { toggleNodesForTours } from './addNodesForTours.js'

const state = {
  displayAllTours: false,
  headingText: { allTours: 'ALL TOURS', fiveTourDates: 'NEXT 5 TOUR DATES' },
  buttonText: {
    viewAllTours: 'View All Tours',
    viewFiveTourDates: 'View Next 5 Tours',
  },
}

export const toogleTourInfo = () => {
  const { displayAllTours } = state
  const tourInfoHeading = document.querySelector('.secondary_flexbox__h2')
  const toursButton = document.querySelector('.tours__btn_toggleTourInfo')

  const toggleToAllTours = () => {
    tourInfoHeading.textContent = state.headingText.allTours
    toursButton.textContent = state.buttonText.viewFiveTourDates
    toggleNodesForTours(tourInfo)
  }

  const toggleToFiveTours = () => {
    tourInfoHeading.textContent = state.headingText.fiveTourDates
    toursButton.textContent = state.buttonText.viewAllTours
    toggleNodesForTours(nextFiveTourDates)
  }

  displayAllTours ? toggleToFiveTours() : toggleToAllTours()

  state.displayAllTours = !displayAllTours
}
