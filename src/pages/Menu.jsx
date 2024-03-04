import { useParams, Link } from 'react-router-dom'
import Client from '../services/api'
import { useEffect, useState } from 'react'
import Category from '../components/Category'


const Menu = ({ user, cart, setCart, r_id, setr_id}) => {

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

  return (
    <div className="Menu-div-s">
      <h2>{userRestaurant.name} menu</h2>

      {restaurantDetails._id === user?.restId?._id && (
        <button className="add-category-button">
          <Link to="/createcategory">Add Category</Link>
        </button>
      )}
      {restaurantDetails?.menu?.categoryId?.length > 0 ? (
        <Category categories={restaurantDetails.menu.categoryId} cart={cart} setCart={setCart} setr_id={setr_id} r_id={r_id} rest_id={userRestaurant._id}/>
      ) : (
        <p>No categories</p>
      )}
    </div>
  )
}

export default Menu
