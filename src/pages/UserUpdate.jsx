import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Client from '../services/api'

const UserUpdate = ({ user, setUser }) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await Client.put(`/auth/userupdate/${user._id}`, {
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
    setUser(response.data)
    navigate('/profile')
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <h3 className=" text-center font-bold mt-7 text-3xl pb-3">
          Update Your Details
        </h3>
        <form className="w-1/3" onSubmit={handleSubmit}>
          <input
            className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light w-full"
            type="text"
            placeholder="Name"
            id="name"
            value={formValues.name}
            onChange={handleChange}
            required
          />
          <input
            className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light w-full"
            type="text"
            placeholder="Avatar"
            id="avatar"
            value={formValues.avatar}
            onChange={handleChange}
            required
          />
          <input
            className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light w-full"
            type="text"
            placeholder="Contact"
            id="contact"
            value={formValues.contact}
            onChange={handleChange}
            required
          />
          <input
            className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light w-full"
            type="text"
            placeholder="Address"
            id="address"
            value={formValues.address}
            onChange={handleChange}
            required
          />
          <button className=" rounded-md bg-gray-800 px-2.5 py-3 text-m font-medium text-white shadow-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-gray-800 mt-5 mb-4 w-full">
            Update
          </button>
        </form>
      </div>
    </>
  )
}

export default UserUpdate
