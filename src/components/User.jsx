// import { useState, useEffect } from 'react'
// import axios from 'axios'

const User = ({user}) => {
  // const [user, setUsers] = useState({})

  // useEffect(() => {
  //   const getUser = async () => {
  //     const response = await axios.get()
  //     console.log(response)
  //     setUsers(response.data)
  //   }
  //   getUser()
  // }, [])

  return (
    <div>
      <h3>User info</h3>
      <div>
          <h2>{user.email}</h2>
      </div>
    </div>
  )
}

export default User
