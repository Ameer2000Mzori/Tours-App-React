import React from 'react'
import { useCardData } from './API.jsx' // Adjust the import path as necessary

const Card = () => {
  const { data, error, loading } = useCardData()

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error...</div>

  return (
    <div className="card">
      <div className="card-body">
        {data.map((info) => {
          return (
            <div key={info.id}>
              <img src={info.image} alt="" />
              <h3>{info.name}</h3>
              <p>{info.info}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Card
