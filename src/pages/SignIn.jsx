// SignIn.jsx
import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate, Link } from 'react-router-dom'

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
    navigate('/landing')
  }

  return (
    <div className="sign-in-container">
      <video className="background-video" autoPlay loop muted>
        <source src="public/video/Untitled design.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="left">
        <div className="header">
          <h2 className="animation a1">Welcome Back</h2>
          <h4 className="animation a2">
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  dark:bg-green-700 dark:border-gray-600 dark:placeholder-white
            dark:text-white"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            required
            className="border-gray-300 text-gray-900 text-sm rounded-lg  dark:bg-green-700 dark:border-gray-600 dark:placeholder-white
            dark:text-white"
          />
          <h5>
            Don't have an account? <Link to="/register">Register</Link>
          </h5>
          <div className="button-div">
            <button
              disabled={!formValues.email || !formValues.password}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn
