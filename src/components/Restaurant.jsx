import { Link } from 'react-router-dom'

const Restaurant = ({ user }) => {
  console.log(user)
  return (
    <>
      <div className="restDiv">
        <h2>Restaurant Profile</h2>
        <h4>{user.name}</h4>
        <img src={user.avatar} alt={user.name} />
        <h4>Account Type: {user.type}</h4>
        <h6>contact: {user.contact}</h6>
      </div>
      <div>
        {!user.menu && (
          <button>
            <Link to="/createmenu">Create Menu</Link>
          </button>
        )}
      </div>
    </>
  )
}

export default Restaurant
