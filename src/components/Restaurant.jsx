import { useNavigate } from 'react-router-dom'
import Client from '../services/api'
import { useState, useEffect } from 'react'

const Restaurant = ({ user }) => {
  let navigate = useNavigate()


  const createNewMenu = async () => {
    await Client.post('/rest/newMenu', user)
    navigate(`/menu/${user.restId._id}`)
  }

  // useEffect(() => {
  //   if (menuExist === false) {
  //     createNewMenu()
  //   }
  // }, [])


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
        {user.restId.menu === null ? (
          <button onClick={createNewMenu}>Create Menu</button>
        ) : (
          <h2>Menu Already Exists</h2>
        )}
      </div>
    </>
  )
}

export default Restaurant
