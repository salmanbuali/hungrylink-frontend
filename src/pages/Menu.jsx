import { useParams } from 'react-router-dom'
import Client from '../services/api'
import { useEffect, useState } from 'react'
const Menu = ({ user }) => {
  const { restId } = useParams('restId')
  const [userRestaurant, setuserRest] = useState({})
  const [restaurantDetails, setrestaurantDetails] = useState({})

  useEffect(() => {
    const axioscall = async () => {
      const response = await Client.get(`/rest/menu/${restId}`)
      console.log(response.data)
      setrestaurantDetails(response.data.restDetails)
      setuserRest(response.data.userRest)
      
    }
    axioscall()
  }, [])

  return (
    <div>
      <h2>{userRestaurant.name} menu</h2>
    </div>
  )
}

export default Menu
