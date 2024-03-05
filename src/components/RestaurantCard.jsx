import { Link } from 'react-router-dom'

const Restaurant = ({ rest }) => {
  console.log(rest)
  return (
    <div>
      <div className="landingDivList">
        <Link to={`/menu/${rest.restId._id}`}>
          <img src={rest.avatar} alt={rest.name} />
        </Link>
        <h4>{rest.name}</h4>
        <div>
          {rest.restId.cuisine.map((cuis) => (
            <p>{cuis}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Restaurant
