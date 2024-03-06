import moment from 'moment'

const OrderList = ({ order }) => {
  console.log(order)
  return (
    <div className="grid grid-rows-1 grid-cols-4 my-5 border rounded-lg shadow-lg bg-gray-100 text-center items-center">
      <div>
        <img
          className="max-w-16 my-1 ml-20"
          src={order.from.avatar}
          alt={order.from.name}
        />
      </div>
      <h5 className="font-extrabold items-center text-left ">
        {order.from.name}
      </h5>
      <div className="items-center text-left">
        <div>
          <h6>
            {order.items.map((o) => (
              <div key={o._id}>
                <p className="m-1">
                  {o.name} : BHD {o.price}
                </p>
              </div>
            ))}
          </h6>
        </div>
      </div>
      <div>
        <div className="flex flex-col">
          <h5 className="m-1 font-bold">Total: BHD {order.total}</h5>
          <h5 className="">
            {moment(order.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
          </h5>
        </div>
      </div>
    </div>
  )
}

export default OrderList
