import moment from 'moment'

const OrderList = ({ order }) => {
  return (
    <div className="landingDivList">
      <h6>
        {order.items.map((o) => (
          <div key={o._id}>
            <p>
              {o.name} : BHD {o.price}
            </p>
            {/* <img src={o.pic} alt={o.pic} /> */}
          </div>
        ))}
      </h6>
      <h5>BHD {order.total}</h5>
      <p>{moment(order.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
    </div>
  )
}

export default OrderList
