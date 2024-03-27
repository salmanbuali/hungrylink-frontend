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
      <div className="user-card flex flex-col justify-between">
        <div className="w-1/2 pt-4">
          <img
            className="rounded-3xl  border shadow-md"
            src={user.avatar}
            alt={user.name}
          />
        </div>
        <div className="flex flex-col pb-10 text-center">
          <h4 className="py-1">
            <span className="font-semibold">User Name :</span> {user.name}
          </h4>
          <h4 className="py-1">
            <span className="font-semibold">Account Type :</span> {user.type}
          </h4>
          <h6 className="py-1">
            <span className="font-semibold">Contact :</span> {user.contact}
          </h6>
          <div className="py-6">
            {menus === false ? (
              <button
                className=" rounded-md bg-gray-800 px-2.5 py-3 text-m font-medium text-white shadow-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-gray-800 mt-5 w-full"
                onClick={createNewMenu}
              >
                Create Menu
              </button>
            ) : (
              <button className=" rounded-md bg-gray-800 px-2.5 py-3 text-m font-medium text-white shadow-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-gray-800 mt-5 w-full">
                {' '}
                <Link to={`/menu/${user.restId._id}`}>View Menu</Link>
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="cuisine-container">
        {cuisines === false ? (
          <>
            <div className="flex justify-center pb-6">
              <button
                className=" rounded-md bg-gray-800 px-2.5 py-3 text-m font-medium text-white shadow-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-gray-800 mt-5 w-1/3"
                onClick={addCuis}
              >
                Add Cuisines
              </button>
            </div>
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
          </>
        ) : (
          <div className="text-center pt-16">
            <h5 className=" font-bold text-2xl pb-4 ">Your Cuisines</h5>
            <ul className="underline underline-offset-4">
              {cuisines.map((cuisine, index) => (
                <li className="p-2" key={index}>
                  {cuisine}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Restaurant
