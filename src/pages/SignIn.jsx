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
    setFormValues({ email: '', password: '' })
    setUser(payload)
    navigate('/feed')
  }

  return (
    <div>
      <form className="signInForm" onSubmit={handleSubmit}>
        <div className="formDiv">
          <h1>Sign In</h1>
          <div className="inputDiv">
            <label htmlFor="email">Email</label>
            <div className="inputs">
              <input
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="example@example.com"
                value={formValues.email}
                required
              />
              <i className="bx bx-user-circle"></i>
            </div>
          </div>
          <div className="inputDiv">
            <label htmlFor="password">Password</label>
            <div className="inputs">
              <input
                onChange={handleChange}
                type="password"
                name="password"
                value={formValues.password}
                required
              />
              <i className="bx bx-lock-alt"></i>
            </div>
          </div>
          <h5>
            Dont have an account? <Link to="/register">Register</Link>
          </h5>
          <div className='buttonDiv'>
            <button disabled={!formValues.email || !formValues.password}>
              Sign In
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignIn
