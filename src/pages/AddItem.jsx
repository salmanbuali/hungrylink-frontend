// AddItem.jsx
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Client from '../services/api'
import { useParams } from 'react-router-dom'
import '../styles/AddItem.css'

const AddItem = ({ user }) => {
  let navigate = useNavigate()

  const { catId } = useParams('catId')

  console.log(catId)

  const [formValues, setFormValues] = useState({
    name: '',
    price: '',
    qty: '',
    desc: '',
    pic: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const item = { user, formValues, catId }
    console.log(item)
    await Client.post(`/rest/newItem`, item)
    setFormValues({ name: '', price: '', qty: '', desc: '', pic: '' })
    navigate(`/menu/${user.restId._id}`)
  }

  return (
    <div>
      <form className="max-w-sm mx-auto my-8" onSubmit={handleSubmit}>
        <label
          className="block mb-2 text-l font-medium text-gray-900 dark:text-black"
          htmlFor="name"
        >
          Item Name
          <input
            className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            onChange={handleChange}
            type="text"
            id="name"
          />
        </label>
        <label
          className="block mb-2 text-l font-medium text-gray-900 dark:text-black"
          htmlFor="price"
        >
          Price
          <input
            className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            onChange={handleChange}
            type="number"
            id="price"
          />
        </label>
        <label
          className="block mb-2 text-l font-medium text-gray-900 dark:text-black"
          htmlFor="qty"
        >
          Quantity
          <input
            className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            onChange={handleChange}
            type="number"
            id="qty"
          />
        </label>
        <label
          className="block mb-2 text-l font-medium text-gray-900 dark:text-black"
          htmlFor="desc"
        >
          Description
          <input
            className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light "
            onChange={handleChange}
            type="text"
            id="desc"
          />
        </label>
        <label
          className="block mb-2  text-l font-medium text-gray-900 dark:text-black"
          htmlFor="pic"
        >
          Picture
          <input
            className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            onChange={handleChange}
            type="text"
            id="pic"
          />
        </label>
        <button
          className=" rounded-md bg-gray-800 px-2.5 py-3 text-m font-medium text-white shadow-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-gray-800 mt-5 w-full"
          onClick={handleSubmit}
        >
          Add item
        </button>
      </form>
    </div>
  )
}

export default AddItem
