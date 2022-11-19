import { tourInfo } from './tourDates.js'
import { nextFiveTourDates } from './getFiveRecentTours.js'
import { toggleNodesForTours } from './addNodesForTours.js'

const state = {
  displayAllTours: false,
}

export const toogleTourInfo = () => {
  const { displayAllTours } = state
  displayAllTours
    ? toggleNodesForTours(nextFiveTourDates)
    : toggleNodesForTours(tourInfo)

  state.displayAllTours = !displayAllTours
}
