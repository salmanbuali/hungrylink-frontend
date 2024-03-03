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

  // console.log(userRestaurant)
  // console.log(restaurantDetails)
  return (
    <div>
      {user && restId === user.restId._id && (
        <button>
          <Link to="/createcategory">Add Category</Link>
        </button>
      )}
      <h2>{userRestaurant.name} menu</h2>
      {restaurantDetails?.menu?.categoryId?.length > 0 ? (
        <Category categories={restaurantDetails.menu.categoryId} />
      ) : <p>No categories</p>}

      {/* { restaurantDetails ? (
         (<Category categories={restaurantDetails.menu.categoryId}/>)):(console.log('error')) } */}
    </div>
  )
}

export default Menu
