'use strict'
import { tourInfo } from './tourDates.js'

const getNextFiveTourDates = (tourInfo) => {
  const tourMostRecentDateFirst = tourInfo.sort((a, b) => {
    return new Date(a.date) - new Date(b.date)
  })

  const futureTourDates = tourMostRecentDateFirst.filter((tourInfo) => {
    const today = new Date()
    const tourDate = new Date(tourInfo.date)
    return tourDate >= today
  })

  const nextFiveTourDates = futureTourDates.filter((tourInfo, i) => {
    if (i < 5) {
      return tourInfo
    }
  })

  return nextFiveTourDates
}

export const nextFiveTourDates = getNextFiveTourDates(tourInfo)
