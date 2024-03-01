import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate, Link } from 'react-router-dom'

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
      password: formValues.password
    })
    setFormValues({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
    navigate('/signin')
  }

  return (
    <div>
      <form className="signInForm" onSubmit={handleSubmit}>
        <div className="formDiv">
          <div className="inputDiv">
            <label htmlFor="name">Name: </label>
            <div className="inputs">
              <input
                onChange={handleChange}
                id="name"
                type="text"
                placeholder="John Smith"
                value={formValues.name}
                required
              />
            </div>
          </div>
          <div className="inputDiv">
            <label htmlFor="email">Email: </label>
            <div className="inputs">
              <input
                onChange={handleChange}
                id="email"
                type="email"
                placeholder="example@example.com"
                value={formValues.email}
                required
              />
            </div>
          </div>
          <div className="inputDiv">
            <label htmlFor="type">Type: </label>
            <div className="selectBox">
              <select
                id="type"
                onChange={handleChange}
                required
                value={formValues.type}
              >
                <option value="" selected disabled>
                  Select type of user
                </option>
                <option value="customer">Customer</option>
                <option value="restaurant">Restaurant</option>
              </select>
            </div>
          </div>
          <div className="inputDiv">
            <label htmlFor="avatar">Avatar/Logo: </label>
            <div className="inputs">
              <input
                onChange={handleChange}
                id="avatar"
                type="avatar"
                placeholder="Enter a valid image url"
                value={formValues.avatar}
                required
              />
            </div>
          </div>
          <div className="inputDiv">
            <label htmlFor="contact">Contact: </label>
            <div>
              <input
                onChange={handleChange}
                id="contact"
                type="contact"
                placeholder="+973 xxxx xxxx"
                value={formValues.contact}
                required
              />
            </div>
          </div>
          <div className="inputDiv">
            <label htmlFor="address">Address: </label>
            <div>
              <input
                onChange={handleChange}
                id="address"
                type="address"
                placeholder="Enter your address here"
                value={formValues.address}
                required
              />
            </div>
          </div>
          <div className="inputDiv">
            <label htmlFor="password">Password</label>
            <div className="inputs">
              <input
                onChange={handleChange}
                type="password"
                id="password"
                value={formValues.password}
                required
              />
            </div>
          </div>
          <div className="inputDiv">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="inputs">
              <input
                onChange={handleChange}
                type="password"
                id="confirmPassword"
                value={formValues.confirmPassword}
                required
              />
            </div>
          </div>
          <h5>
            Already have an account? <Link to="/signin">Sign In</Link>
          </h5>
          <div className="buttonDiv">
            <button
              disabled={
                !formValues.email ||
                (!formValues.password &&
                  formValues.confirmPassword === formValues.password) ||
                !formValues.confirmPassword ||
                !formValues.type ||
                !formValues.address ||
                !formValues.contact ||
                !formValues.avatar
              }
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Register
