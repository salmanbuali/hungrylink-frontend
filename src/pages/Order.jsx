import OrderList from '../components/OrderList'
import { useState, useEffect } from 'react'
import Client from '../services/api'

const Order = ({ user }) => {
  const [allOrders, setAllOrders] = useState([])

  useEffect(() => {
    const getAllOrders = async () => {
      const response = await Client.get(`/rest/allorders/${user._id}`)
      setAllOrders(response.data)
      console.log(response.data)
    }
    getAllOrders()
  }, [])

  return (
    <>
      <div className="order-container">
        <h3>Your Past orders: </h3>
      </div>
      <div className="landingDiv">
        {allOrders.map((order) => (
          <div key={order._id}>
            <OrderList order={order} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Order
