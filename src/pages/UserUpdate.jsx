import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Client from '../services/api'

const UserUpdate = ({ user }) => {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    name: '',
    avatar: '',
    contact: '',
    address: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value })
  }

  // await Client.post('/auth/register', data)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await Client.put(`/auth/userupdate/${user._id}`, {
      name: formValues.name,
      avatar: formValues.avatar,
      contact: formValues.contact,
      address: formValues.address
    })
    setFormValues({
      name: '',
      avatar: '',
      contact: '',
      address: ''
    })
    navigate('/profile')
  }

  return (
    <>
      <div>
        <h3>Update Your Details</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            id="name"
            value={formValues.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Avatar"
            id="avatar"
            value={formValues.avatar}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Contact"
            id="contact"
            value={formValues.contact}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Address"
            id="address"
            value={formValues.address}
            onChange={handleChange}
            required
          />
          <button>Update</button>
        </form>
      </div>
    </>
  )
}

export default UserUpdate
