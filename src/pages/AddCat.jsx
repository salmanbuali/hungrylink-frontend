import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Client from '../services/api'
import '../styles/AddCat.css'

const AddCat = ({ user }) => {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({ name: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formValues.name === '') {
      return
    }
    const cat = { user, categoryName: formValues.name }
    console.log(cat)
    const response = await Client.post(`/rest/newCategory`, cat)
    console.log(response)
    navigate(`/menu/${user.restId._id}`)
  }

  return (
    <div>
      <form className="menuForm" onSubmit={handleSubmit}>
        <label htmlFor="name">
          Category Name:
          <input onChange={handleChange} type="text" id="name" />
        </label>
        <button onClick={handleSubmit}>Add Category</button>
      </form>
    </div>
  )
}

export default AddCat
