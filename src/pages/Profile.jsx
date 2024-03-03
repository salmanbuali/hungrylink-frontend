import User from '../components/User'
import Restaurant from '../components/Restaurant'

const Profile = ({ user}) => {

  return (
    <div>
      {user.type === 'customer' ? (
        <div className="profilePage">
          <div className="profileDiv">
            <User user={user} />
          </div>
        </div>
      ) : (
        <div>
          <Restaurant user={user} />
        </div>
      )}
    </div>
  )
}

export default Profile
