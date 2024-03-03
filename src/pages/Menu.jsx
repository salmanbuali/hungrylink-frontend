import { useParams, Link } from 'react-router-dom'
import Client from '../services/api'
import { useEffect, useState } from 'react'
import Category from '../components/Category'

const Menu = ({ user }) => {
  const { restId } = useParams('restId')
  const [userRestaurant, setuserRest] = useState({})
  const [restaurantDetails, setrestaurantDetails] = useState({})

  useEffect(() => {
    const axioscall = async () => {
      const response = await Client.get(`/rest/menu/${restId}`)
      setrestaurantDetails(response.data.restDetails)
      setuserRest(response.data.userRest)
    }
    axioscall()
  }, [])

  console.log(user.restId)
  
  return (
    <div>
      {user && restId === user.restId._id && (
        <button>
          <Link to="/createcategory">Add Category</Link>
        </button>
      )}
      <h2>{userRestaurant.name} menu</h2>
      <Category />
    </div>
  )
}

export default Menu
