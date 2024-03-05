import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import WebLogo from './WebLogo'
import '../styles/navBar.css'

const Navbar = ({ user, handleLogOut, cart }) => {
  const [showDropdown, setShowDropdown] = useState(false) // State for dropdown menu

  useEffect(() => {
    return
  }, [cart])

  let userOptions
  if (user) {
    userOptions = (
      <nav className="navBar">
        <div className="navBarLeft">
          <WebLogo className="navBarLogo" />
        </div>
        <div className="navBarMiddle">
          <Link to="/landing">Home</Link>
          <Link to="/profile">Profile</Link>
          {user?.type === 'restaurant' && user.restId.menu && (
            <Link to={`/menu/${user.restId._id}`}> Menu </Link>
          )}
          <Link to="/orders">Orders</Link>
          {user?.type === 'customer' && cart.length > 0 && (
            <Link to={`/cart`}> Cart </Link>
          )}
          <Link onClick={handleLogOut} to="/">
            Sign Out
          </Link>
        </div>
        <div className="navBarRight">
          <div className="userAvatar">
            <img src={user.avatar} alt={user.name} />
          </div>
          <div
            className="dropdown-icon"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <i className="fa fa-chevron-down"></i>
          </div>
        </div>
      </nav>
    )
  }

  const publicOptions = (
    <nav className="navBar">
      <div className="navBarLeft">
        <WebLogo className="navBarLogo" />
      </div>
      <div className="navBarMiddle">
        <Link to="/">HungryLink</Link>
        <Link to="/landing">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/signin">Sign In</Link>
      </div>
      <div className="navBarRight"></div>
    </nav>
  )

  return (
    <header>
      {user ? userOptions : publicOptions}
      {showDropdown && (
        <div className="dropdown-menu">
          <p className="dropdown-item">Signed in as</p>
          <p className="dropdown-item">{user.email}</p>
          <hr className="dropdown-divider" />
          <p className="dropdown-item">My Settings</p>
          <p className="dropdown-item logout" onClick={handleLogOut}>
            Log Out
          </p>
        </div>
      )}
    </header>
  )
}

export default Navbar
