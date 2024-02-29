import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        {/* <Link to="profile">Profile</Link>
        <Link to="orders">View All Orders</Link> */}
      </nav>
    </header>
  )
}

export default Navbar