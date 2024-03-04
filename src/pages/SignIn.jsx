import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate, Link } from 'react-router-dom'
import '../styles/Form.css'

const SignIn = ({ setUser }) => {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    console.log(payload)
    setFormValues({ email: '', password: '' })
    setUser(payload)
    navigate('/')
  }

  return (
    <div className="sign-in-container">
      <video className="background-video" autoPlay loop muted>
        <source src="public/video/Untitled design.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="left">
        <div className="header">
          <h2 class="animation a1">Welcome Back</h2>
          <h4 class="animation a2">
            Log in to your account using email and password
          </h4>
        </div>
        <form className="sign-in-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            required
          />
          <h5>
            Don't have an account? <Link to="/register">Register</Link>
          </h5>
          <div className="button-div">
            <button disabled={!formValues.email || !formValues.password}>
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn
