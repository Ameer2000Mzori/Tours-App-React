const RemoveTour = (id, tourData, setTourData) => {
  const newTours = tourData.filter((tour) => tour.id !== id)
  setTourData(newTours)
}

export default RemoveTour
