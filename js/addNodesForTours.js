export const addNodesForTours = (tours) => {
  tours.forEach((tourInfo) => {
    //create list item
    const listItem = document.createElement('li')
    listItem.classList.add('tours_container__li')

    //add date node
    const tourDate = document.createElement('div')
    tourDate.classList.add('tours_container__ol__li___tour_date')
    const tourDateText = document.createTextNode(tourInfo.date)
    listItem.appendChild(tourDate)
    tourDate.appendChild(tourDateText)
    document.getElementById('tours_container__ol').appendChild(listItem)

    //add city and venie container node
    const placeConatiner = document.createElement('div')
    placeConatiner.classList.add('tours_container__ol__li__place_container')
    listItem.appendChild(placeConatiner)
    document.getElementById('tours_container__ol').appendChild(listItem)

    //add city node
    const tourCity = document.createElement('div')
    tourCity.classList.add('tours_container__ol__li__tour_city')
    const city = tourInfo.city.toUpperCase()
    const tourCityText = document.createTextNode(city)
    placeConatiner.appendChild(tourCity)
    tourCity.appendChild(tourCityText)
    document.getElementById('tours_container__ol').appendChild(listItem)

    //add venue node
    const tourVenue = document.createElement('div')
    tourVenue.classList.add('tours_container__ol__li__tour_venue')
    const tourVenueText = document.createTextNode(tourInfo.venue)
    placeConatiner.appendChild(tourVenue)
    tourVenue.appendChild(tourVenueText)
    document.getElementById('tours_container__ol').appendChild(listItem)
  })
}
