import { useState, useEffect } from 'react'
import axios from 'axios'

export const useCardData = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          'https://course-api.com/react-tours-project'
        )
        if (res.statusText !== 'OK') {
          throw new Error('There was an error fetching the data')
        }
        console.log()
        const newData = res.data
        setData(newData)
      } catch (error) {
        setError(true)
        console.error(error)
      }
      setLoading(false)
    }

    fetchData()
  }, [])

  return { data, error, loading }
}
