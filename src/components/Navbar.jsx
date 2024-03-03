import { Link } from 'react-router-dom'
// import { useEffect } from 'react'

const Navbar = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav className="navBar">
        <Link>
          <img src={user.avatar} alt={user.name} />
          Welcome
          {user.name}!
        </Link>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        {user.type === 'restaurant' && user.restId.menu && (
          <Link to={`/menu/${user.restId._id}`}> Menu </Link>
        )}
        <Link to="/orders">View All Orders</Link>
        <Link onClick={handleLogOut} to="/">
          Sign Out
        </Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav className="navBar">
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/signin">Sign In</Link>
    </nav>
  )

  return <header>{user ? userOptions : publicOptions}</header>
}

export default Navbar
