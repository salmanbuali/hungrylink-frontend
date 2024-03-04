import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate, Link } from 'react-router-dom'
import '../styles/Form.css'

const Register = () => {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    type: '',
    avatar: '',
    contact: '',
    address: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      name: formValues.name,
      email: formValues.email,
      type: formValues.type,
      avatar: formValues.avatar,
      contact: formValues.contact,
      address: formValues.address,
      password: formValues.password
    })
    setFormValues({
      name: '',
      email: '',
      type: '',
      avatar: '',
      contact: '',
      address: '',
      password: '',
      confirmPassword: ''
    })
    navigate('/signin')
  }

  return (
    <div className="register-container">
      <video className="background-video" autoPlay loop muted>
        <source src="public/video/Untitled design.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 class="animation a1">Sing Up to Start the DELICIOUSNESS!</h2>
        <h4 class="animation a2">
          Please fill in all of the information Below
        </h4>
        <input
          type="text"
          placeholder="Name"
          id="name"
          value={formValues.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          value={formValues.email}
          onChange={handleChange}
          required
        />
        <div className="select-box">
          <select
            id="type"
            onChange={handleChange}
            required
            value={formValues.type}
            className="select-box"
          >
            <option value="" disabled>
              Select type of user
            </option>
            <option value="customer">Customer</option>
            <option value="restaurant">Restaurant</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Avatar/Logo"
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
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={formValues.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          id="confirmPassword"
          value={formValues.confirmPassword}
          onChange={handleChange}
          required
        />
        <h5>
          Already have an account? <Link to="/signin">Sign In</Link>
        </h5>
        <div className="button-div">
          <button
            disabled={
              !formValues.email ||
              !formValues.password ||
              formValues.password !== formValues.confirmPassword
            }
          >
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register
