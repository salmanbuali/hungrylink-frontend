import { useNavigate } from 'react-router-dom'
import Client from '../services/api'
import { useState, useEffect } from 'react'

const Restaurant = ({ user, menuExist }) => {
  let navigate = useNavigate()

  const [resto, setResto] = useState(null)

  const createNewMenu = async () => {
    await Client.post('/rest/newMenu', user)
    const response = await Client.post('/rest/newMenu', user)
    console.log('creating resto', response)
    setResto(response.data)
    navigate(`/menu/${user.restId._id}`)
  }

  // useEffect(() => {
  //   if (menuExist === false) {
  //     createNewMenu()
  //   }
  // }, [])

  console.log(menuExist)

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
        {menuExist === false ? (
          <button onClick={createNewMenu}>Create Menu</button>
        ) : (
          <h2>Menu Already Exists</h2>
        )}
      </div>
    </>
  )
}

export default Restaurant
