import React, { useState, useEffect } from 'react'
import { useCardData } from './API.jsx' // Adjust the import path as necessary
import RemoveTour from './RemoveTour.js'
const Card = () => {
  const { data, error, loading } = useCardData()
  const [tourData, setTourData] = useState([])

  // first wait if data is then loaded it
  useEffect(() => {
    if (data) {
      // Ensure data is not null or undefined
      setTourData(data)
    }
  }, [data])

  // loading or error returns
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error...</div>

  // our app logic
  return (
    <div className="flex flex-col text-center items-center justify-center p-8 bg-zinc-400 gap-4 ">
      <button
        onClick={() => {
          setTourData(data)
        }}
        className="w-[140px] h-[40px] bg-slate-600 text-white"
      >
        rest
      </button>
      <div className="flex flex-col text-center items-center justify-center gap-4">
        {tourData.map((info) => {
          return (
            <div
              key={info.id}
              className="w-[340px] h-[700px] flex flex-col text-start justify-center items-center bg-zinc-300 overflow-auto p-2 gap-4"
            >
              <img src={info.image} alt="" />
              <h3>{info.name}</h3>
              <p className=" text-sm">{info.info}</p>
              <button
                onClick={() => {
                  RemoveTour(info.id, tourData, setTourData)
                }}
                className="w-[140px] h-[40px] bg-slate-600 text-white"
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
