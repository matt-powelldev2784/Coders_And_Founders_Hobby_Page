'use strict'
export const toggleNodesForTours = (tours) => {
  //remove old tour list dom nodes
  const toursContainer = document.getElementById('tours_container__ol')
  while (toursContainer.firstChild) {
    toursContainer.removeChild(toursContainer.firstChild)
  }

  //add updated tour list dom nodes
  tours.forEach((tourInfo) => {
    //create list item node
    const listItem = document.createElement('li')
    listItem.classList.add('tours_container__li')

    //create date node node
    const tourDate = document.createElement('div')
    tourDate.classList.add('tours__tour_date')
    const tourDateText = document.createTextNode(tourInfo.date)
    tourDate.appendChild(tourDateText)
    listItem.appendChild(tourDate)

    //create city and venue container node
    const placeConatiner = document.createElement('div')
    placeConatiner.classList.add('tours_place__flexbox')
    listItem.appendChild(placeConatiner)

    //create city node
    const tourCity = document.createElement('div')
    tourCity.classList.add('tours_place__city')
    const city = tourInfo.city.toUpperCase()
    const tourCityText = document.createTextNode(city)
    placeConatiner.appendChild(tourCity)
    tourCity.appendChild(tourCityText)

    //create venue node
    const tourVenue = document.createElement('div')
    tourVenue.classList.add('tours_place__tour_venue')
    const tourVenueText = document.createTextNode(tourInfo.venue)
    placeConatiner.appendChild(tourVenue)
    tourVenue.appendChild(tourVenueText)

    //add nodes to dom
    toursContainer.appendChild(listItem)
  })
}
