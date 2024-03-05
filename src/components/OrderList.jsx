const OrderList = ({ order }) => {
  return (
    <div className="landingDivList">
      <h6>
        {order.items.map((o) => (
          <div key={o._id}>
            <p>{o.name}</p>
            <img src={o.pic} alt={o.pic} />
            <p>{o.price}</p>
            {/* <p>
              {o.createdAt.toLocaleDateString(en - US, {
                month: short,
                year: numeric
              })}
            </p> */}
          </div>
        ))}
      </h6>
      <h6>{order.total}</h6>
    </div>
  )
}

export default OrderList
