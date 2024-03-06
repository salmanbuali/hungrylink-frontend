import User from '../components/User'
import Restaurant from '../components/Restaurant'

const Profile = ({ user, userUpdate }) => {
  return (
    <div>
      {user.type === 'customer' ? (
        <div className="profilePage">
          <div className="profileDiv h-1/2">
            <User userUpdate={userUpdate} user={user} />
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
