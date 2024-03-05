import Client from '../services/api'
import '../styles/Cart.css'

const Cart = ({ user, cart, setCart, r_id }) => {
  const buy = async () => {
    const request = { cart, user, r_id }
    console.log(request)
    await Client.post('/rest/newOrder', request)
  }

  const handleClick = (id, qty) => {
    qty = parseInt(qty)
    const arrayCart = [...cart]
    const itemFound = arrayCart.find((item) => item._id === id)
    if (qty > itemFound.qty) {
      return
    }
    itemFound.userQty = qty
    setCart(arrayCart)
  }

  return (
    <>
      <div className="item-cart-div-s">
        {cart.map((item) => (
          <div className="item-cart-s" key={item._id}>
            <img className="cart-item-pic" src={item.pic} alt="item pic" />
            <p>
              <strong>{item.name}</strong>
            </p>
            <p>Price: BHD {item.price}</p>
            <label htmlFor="qty">Quantity: </label>
            <input
              id="qty"
              type="number"
              min="1"
              value={item.userQty}
              max={item.qty}
              onChange={(e) => {
                handleClick(item._id, e.target.value)
              }}
            />
          </div>
        ))}
      </div>
      <button onClick={buy}>Order</button>
    </>
  )
}

export default Cart
