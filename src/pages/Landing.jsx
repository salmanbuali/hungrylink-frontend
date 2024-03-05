import { useState, useEffect } from 'react'
import Client from '../services/api'
import RestaurantCard from '../components/RestaurantCard'

const Landing = ({ user }) => {
  const [restDetails, setRestDetails] = useState([])

  useEffect(() => {
    const getRestDetails = async () => {
      const response = await Client.get(`/rest/allrest`)
      setRestDetails(response.data)
    }
    getRestDetails()
  }, [])

  return (
    <>
      <div>
        <h2>Restaurants</h2>
        <div className="landingDiv">
          {restDetails.length > 0 &&
            restDetails.map((rest) => (
              <div key={rest._id}>
                <RestaurantCard rest={rest} />
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default Landing
