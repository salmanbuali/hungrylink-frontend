import { useParams, Link } from 'react-router-dom'
import Client from '../services/api'
import { useEffect, useState } from 'react'
import Category from '../components/Category'
import '../styles/Menu.css'

const Menu = ({ user, cart, setCart, r_id, setr_id }) => {
  const { restId } = useParams('restId')
  const [userRestaurant, setuserRest] = useState({})
  const [restaurantDetails, setrestaurantDetails] = useState({})
  const [deleteCat, toggleDelete] = useState(false)
  const [updateQty, toggleUpdateQty] = useState(false)


  useEffect(() => {
    const axioscall = async () => {
      const response = await Client.get(`/rest/menu/${restId}`)
      setrestaurantDetails(response.data.restDetails)
      setuserRest(response.data.userRest)
    }
    axioscall()
  }, [deleteCat, updateQty])

  return (
    <div className="Menu-div-s">
      <div className="Menu-container">
        <h2>{userRestaurant.name} menu</h2>
        {restaurantDetails._id === user?.restId?._id && (
          <button className="Menu-category-button">
            <Link to="/createcategory">Add Category</Link>
          </button>
        )}
      </div>


      <div className="category-container">
        {restaurantDetails?.menu?.categoryId?.length > 0 ? (
          <Category
            categories={restaurantDetails.menu.categoryId}
            cart={cart}
            setCart={setCart}
            setr_id={setr_id}
            r_id={r_id}
            rest_id={userRestaurant._id}
            toggleDelete={toggleDelete}
            toggleUpdateQty={toggleUpdateQty}
            updateQty={updateQty}
            user={user}
            
          />
        ) : (
          <p>No categories</p>
        )}
      </div>
    </div>
  )
}

export default Menu
