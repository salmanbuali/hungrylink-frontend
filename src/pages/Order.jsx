import OrderList from '../components/OrderList'
import { useState, useEffect } from 'react'
import Client from '../services/api'

const Order = ({ user, cart }) => {
  const [allOrders, setAllOrders] = useState([])

  useEffect(() => {
    const getAllOrders = async () => {
      const response = await Client.get(`/rest/allorders/${user._id}`)
      setAllOrders(response.data)
    }
    getAllOrders()
  }, [cart])

  return (
    <>
      <div className="">
        <h3 className=" text-center font-bold mt-7 text-3xl">
          Your Past Orders
        </h3>
      </div>
      <div className="flex justify-center">
        <div className="w-4/5">
          {allOrders.map((order) => (
            <div key={order._id}>
              <OrderList order={order} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Order
