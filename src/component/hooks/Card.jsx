import React, { useState, useEffect } from 'react'
import { useCardData } from './API.jsx' // Adjust the import path as necessary

const Card = () => {
  const { data, error, loading } = useCardData()
  const [tourData, setTourData] = useState([])

  // using effect to first wait for data then show the tours data
  useEffect(() => {
    if (data) {
      // Ensure data is not null or undefined
      setTourData(data)
    }
  }, [data])

  const removeTour = (id) => {
    const newTours = tourData.filter((tour) => tour.id !== id)
    setTourData(newTours)
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error...</div>

  return (
    <div>
      <div>
        {tourData.map((info) => {
          return (
            <div key={info.id}>
              <img src={info.image} alt="" />
              <h3>{info.name}</h3>
              <p>{info.info}</p>
              <button
                onClick={() => {
                  removeTour(info.id)
                }}
              >
                remove
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Card
