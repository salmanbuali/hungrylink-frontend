import { Link } from 'react-router-dom'

const User = ({ user }) => {
  // const [user, setUsers] = useState({})

  // useEffect(() => {
  //   const getUser = async () => {
  //     const response = await axios.get()
  //     console.log(response)
  //     setUsers(response.data)
  //   }
  //   getUser()
  // }, [])

  return (
    <div className="userBackground">
      <div className="userInfoGrid">
        <div className="userTopHalf">
          <h2>User Details Dashboard</h2>
          <h3>Hello {user.name}!</h3>
          <p>
            This is your profile page. Here you can edit your details and view
            your past orders.
          </p>
          <button>
            <Link to={`/updateuser/${user._id}`}>Update your Details</Link>
          </button>
        </div>
        <div className="userDetails">
          <h2>Account Details</h2>
          <div className="detailsContainer">
            <div className="detailsColumn">
              <div>
                <h3>User Name</h3>
                <p>{user.name}</p>
              </div>
              <div>
                <h3>Account Type</h3>
                <p>{user.type}</p>
              </div>
            </div>
            <div className="detailsColumn">
              <div>
                <h3>Contact</h3>
                <p>{user.contact}</p>
              </div>
              <div>
                <h3>Address</h3>
                <p>{user.address}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="userProfile">
          <img src={user.avatar} alt={user.name} />
          <p>Additional info like description/past orders</p>
        </div>
      </div>
    </div>
  )
}

export default User
