import Client from '../services/api'
import { useNavigate } from 'react-router-dom'
import CartItem from './CartItem'
import '../styles/Cart.css'

const Cart = ({ user, cart, setCart, r_id }) => {

  let navigate = useNavigate()


  const buy = async () => {
    const request = { cart, user, r_id }
    await Client.post('/rest/newOrder', request)
    setCart([])
    navigate('/orders')
  }

  const handleClick = (id, qty) => {
    qty = parseInt(qty)
    const arrayCart = [...cart]
    const itemFound = arrayCart.find((item) => item._id === id)
    if (qty > itemFound.qty || qty === 0 || !qty) {
      return
    }
    itemFound.userQty = qty
    setCart(arrayCart)
  }

  return (
    <div className="flex flex-col gap-3 items-center">
      <div className="item-cart-div-s">
        {cart.map((item) => (
          // <div className="item-cart-s" key={item._id}>
          //   <img className="cart-item-pic" src={item.pic} alt="item pic" />
          //   <p>
          //     <strong>{item.name}</strong>
          //   </p>
          //   <p>Price: BHD {item.price}</p>
          //   <label htmlFor="qty">Quantity: </label>
          //   <input
          //     className="block max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          //     id="qty"
          //     type="number"
          //     min="1"
          //     value={item.userQty}
          //     max={item.qty}
          //     onChange={(e) => {
          //       handleClick(item._id, e.target.value)
          //     }}
          //   />
          // </div>
          <CartItem item={item} handleClick={handleClick} />
        ))}
      </div>
      <button
        className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={() => {
          buy()
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
          />
        </svg>
        Pay
      </button>
    </div>
  )
}

export default Cart
