import { useNavigate } from 'react-router-dom'
import Client from '../services/api'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Restaurant = ({ user }) => {
  let navigate = useNavigate()

  const [menus, setMenus] = useState(null)

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

  return (
    <>
      <div className="restDiv">
        <h2>Restaurant Profile</h2>
        <h4>{user.name}</h4>
        <img src={user.avatar} alt={user.name} />
        <h4>Account Type: {user.type}</h4>
        <h6>Contact: {user.contact}</h6>
      </div>
      <div>
        {menus === false ? (
          <button onClick={createNewMenu}>Create Menu</button>
        ) : (
          <Link to={`/menu/${user.restId._id}`}>View Menu</Link>
        )}
      </div>
    </>
  )
}

export default Restaurant
