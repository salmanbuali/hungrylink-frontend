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
      setrestaurantDetails(response.data.restDetails)
      setuserRest(response.data.userRest)
      console.log(user)
    }
    axioscall()
  }, [])

  return (
    <div>
      {((user) && restId === user.restId._id) && <button>Add Category</button>}
      <h2>{userRestaurant.name} menu</h2>
    </div>
  )
}

export default Menu
