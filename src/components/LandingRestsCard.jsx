import { Link } from 'react-router-dom'
const LandingRestsCard = ({ rest, r_id, setr_id }) => {
  console.log(rest)
  return (
    <div
      key={rest.restId._id}
      className="w-64 min-h-72 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow items-center"
    >
      <div className="flex flex-col p-6">
        <Link
          to={`/menu/${rest.restId._id}`}
          className="m-0"
          onClick={()=>setr_id(rest._id)}
        >
          <img
            className="mx-auto h-24 w-24 flex-shrink-0 rounded-lg"
            src={rest.avatar}
            alt=""
          />
        </Link>
        <h3 className="mt-6 text-sm font-medium text-gray-900">{rest.name}</h3>
        <dl className="mt-1 flex flex-col justify-between">
          <dd className="mt-3 flex flex-wrap justify-center">
            {rest.restId.cuisine.map((cuis, i) => (
              <span
                key={i}
                className="inline-flex items-center rounded-full bg-green-50 m-0.5 px-1 py-1 text-xs font-thin text-green-700 ring-1 ring-inset ring-green-600/20"
              >
                {cuis}
              </span>
            ))}
          </dd>
        </dl>
      </div>
    </div>
  )
}

export default LandingRestsCard
