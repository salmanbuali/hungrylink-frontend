import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Client from '../services/api'

const AddItem = ({ user }) => {
  let navigate = useNavigate()

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
    const item = { user, formValues }
    console.log(item)
    await Client.post(`/rest/newItem`, item)
    setFormValues({ name: '', price: '', qty: '', desc: '', pic: '' })
    navigate(`/menu/${user.restId._id}`)
  }

  return (
    <div className="itemForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Item Name:
          <input onChange={handleChange} type="text" id="name" />
        </label>
        <label htmlFor="price">
          Price:
          <input onChange={handleChange} type="number" id="price" />
        </label>
        <label htmlFor="qty">
          Quantity:
          <input onChange={handleChange} type="number" id="qty" />
        </label>
        <label htmlFor="desc">
          Description:
          <input onChange={handleChange} type="text" id="desc" />
        </label>
        <label htmlFor="pic">
          Picture:
          <input onChange={handleChange} type="text" id="pic" />
        </label>
        <button onClick={handleSubmit}>Add item</button>
      </form>
    </div>
  )
}

export default AddItem
