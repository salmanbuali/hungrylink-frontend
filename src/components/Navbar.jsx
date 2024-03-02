import { Link } from 'react-router-dom'

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
        <Link onClick={handleLogOut} to="/">
          Sign Out
        </Link>
        <Link to="profile">Profile</Link>
        <Link to="orders">View All Orders</Link>
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
