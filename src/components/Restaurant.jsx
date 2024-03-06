import { useNavigate } from 'react-router-dom'
import Client from '../services/api'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Restaurant.css'

const Restaurant = ({ user }) => {
  let navigate = useNavigate()

  const [menus, setMenus] = useState(null)
  const [cuisines, setCuisines] = useState([])

  const createNewMenu = async () => {
    await Client.post('/rest/newMenu', user)
    navigate(`/menu/${user.restId._id}`)
  }

  useEffect(() => {
    const getNewMenu = async () => {
      const response = await Client.get(`/rest/newMenu/${user._id}`)
      setMenus(response.data)
    }
    getNewMenu()
  }, [])

  const [checkBoxValues, setCheckBoxValues] = useState([])

  const handleChange = (e) => {
    if (e.target.checked) {
      setCheckBoxValues((prev) => [...prev, e.target.id])
    } else {
      const uncheck = (value) => {
        return value !== e.target.id
      }
      setCheckBoxValues((prev) => prev.filter(uncheck))
    }
  }

  const [addedCuis, setAddedCuis] = useState(false)

  const addCuis = async () => {
    const request = {
      checkBoxValues,
      _id: user._id
    }
    await Client.post('/rest/newcuis', request)
    setAddedCuis(!addedCuis)
  }

  useEffect(() => {
    const getCuis = async () => {
      const response = await Client.get(`/rest/cuis/${user._id}`)
      setCuisines(response.data)
    }
    getCuis()
  }, [addedCuis])

  const cuisineOptions = [
    'American',
    'Bahraini',
    'Chinese',
    'Desserts',
    'Fast Food',
    'Indian',
    'Irish',
    'Italian',
    'Japanese',
    'Korean',
    'Lebanese',
    'Mediterranean',
    'Mexican',
    'Thai',
    'Turkish',
    'Persian',
    'Breakfast',
    'Asian',
    'Oriental',
    'Egyptian',
    'Bakery',
    'Cafeteria',
    'Continental',
    'Juices',
    'Vegan'
  ]

  return (
    <div className="Restaurant">
      <div className="user-card">
        <img src={user.avatar} alt={user.name} />
        <div className="user-info">
          <h4>User Name: {user.name}</h4>
          <h4>Account Type: {user.type}</h4>
          <h6>Contact: {user.contact}</h6>
          <div>
            {menus === false ? (
              <button onClick={createNewMenu}>Create Menu</button>
            ) : (
              <Link to={`/menu/${user.restId._id}`}>View Menu</Link>
            )}
          </div>
        </div>
      </div>
      <div className="cuisine-container">
        <div className="button-container">
          <button onClick={addCuis}>Add Cuisines</button>
        </div>
        {cuisines === false ? (
          <div className="checkbox-wrapper">
            {cuisineOptions.map((cuisine, index) => (
              <div className="checkbox-group" key={index}>
                <label htmlFor={`cuisine-${index}`}>{cuisine}</label>
                <input
                  id={cuisine}
                  value={cuisine}
                  type="checkbox"
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h5>Your Cuisines</h5>
            <ul>
              {cuisines.map((cuisine, index) => (
                <li key={index}>{cuisine}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="pastorders-container">
        <h5>Your ORDERS</h5>
      </div>
    </div>
  )
}

export default Restaurant
