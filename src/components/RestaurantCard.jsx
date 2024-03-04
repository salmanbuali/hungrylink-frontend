import { Link } from 'react-router-dom'

const Restaurant = ({ rest }) => {
  console.log(rest)
  return (
    <div>
      <div className="landingDivList">
        <Link to={`/menu/${rest._id}`}>
          <img src={rest.avatar} alt={rest.name} />
        </Link>
        <h4>{rest.name}</h4>
      </div>
    </div>
  )
}

export default Restaurant
