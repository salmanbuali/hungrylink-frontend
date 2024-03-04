import { useState, useEffect } from 'react'
import Client from '../services/api'

const Landing = ({ user }) => {
  const [restDetails, setRestDetails] = useState({})

  useEffect(() => {
    const getRestDetails = async () => {
      const response = await Client.get(`/menu/${user.restId._id}`)
      console.log(response)
    }
    getRestDetails()
  }, [])

  return (
    <>
      <div>
        <h2>landing</h2>
      </div>
    </>
  )
}

export default Landing
