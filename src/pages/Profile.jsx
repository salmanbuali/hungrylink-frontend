import User from '../components/User'

const Profile = ({user}) => {
  return (
    <>
      <div className="profileDiv">
        <User user={user} />
      </div>
    </>
  )
}

export default Profile
