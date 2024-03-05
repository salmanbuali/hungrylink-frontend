// Restaurant.js
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

  const addCuis = async () => {
    const request = {
      checkBoxValues,
      _id: user._id
    }
    await Client.post('/rest/newcuis', request)
    navigate(`/menu/${user.restId._id}`)
  }

  useEffect(() => {
    const getCuis = async () => {
      const response = await Client.get(`/rest/cuis/${user._id}`)
      setCuisines(response.data)
    }
    getCuis()
  }, [])

  return (
    <div className="Restaurant">
      <div className="user-card">
        <img src={user.avatar} alt={user.name} />
        <div className="user-info">
          <h4>{user.name}</h4>
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
      <div>
        {menus === false ? (
          <button onClick={createNewMenu}>Create Menu</button>
        ) : (
          <Link to={`/menu/${user.restId._id}`}>View Menu</Link>
        )}
      </div>
      <div>
        {cuisines === false ? (
          <div>
            <label htmlFor="">Chinese</label>
            <input
              id="chinese"
              value="chinese"
              type="checkbox"
              onChange={handleChange}
            />
            <label htmlFor="">American</label>
            <input
              id="american"
              value="american"
              type="checkbox"
              onChange={handleChange}
            />
            <label htmlFor="">Korean</label>
            <input
              id="korean"
              value="korean"
              type="checkbox"
              onChange={handleChange}
            />
            <label htmlFor="">Italian</label>
            <input
              id="italian"
              value="italian"
              type="checkbox"
              onChange={handleChange}
            />
            <label htmlFor="">Arabic</label>
            <input
              id="arabic"
              value="arabic"
              type="checkbox"
              onChange={handleChange}
            />
            <label htmlFor="">Fast Food</label>
            <input
              id="fastfood"
              value="fastfood"
              type="checkbox"
              onChange={handleChange}
            />
            <div>
              <button onClick={addCuis}>add Cuisines</button>
            </div>
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
    </div>
  )
}

export default Restaurant
