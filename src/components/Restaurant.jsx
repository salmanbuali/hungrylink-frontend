import { useNavigate } from 'react-router-dom'
import Client from '../services/api'
import { useState, useEffect } from 'react'

const Restaurant = ({ user }) => {
  let navigate = useNavigate()

  const [menuExist, setMenuExist] = useState(false)

  const createNewMenu = async () => {
    setMenuExist(true)
    console.log(menuExist)
    await Client.post('/rest/newMenu', user)
    navigate(`/menu/${user.restId._id}`)
  }

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
        {!user.restId.menu && (
          <button onClick={createNewMenu}>Create Menu</button>
        )}
      </div>
    </>
  )
}

export default Restaurant
