import { useNavigate } from 'react-router-dom'
import Client from '../services/api'

const Restaurant = ({ user }) => {
  let navigate = useNavigate()
  const createNewMenu = async () => {
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
