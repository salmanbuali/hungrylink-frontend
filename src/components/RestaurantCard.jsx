import { Link } from 'react-router-dom'

const RestaurantCard = ({ rest, r_id, setr_id }) => {
  
  return (
    <div>
      <div className="landingDivList flex items-center">
        <Link to={`/menu/${rest.restId._id}`} className="m-0" onClick={()=>setr_id(rest.restId._id)}>
          <img src={rest.avatar} alt={rest.name} />
        </Link>
        <h4>{rest.name}</h4>
        <div>
          {rest.restId.cuisine.map((cuis, i) => (
            <p key={i}>{cuis}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RestaurantCard
