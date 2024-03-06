const CartItem = ({ item, handleClick }) => {
  return (
    <ul
      role="list"
      className="divide-y divide-gray-200 ml-40 mr-40 border-b border-t border-gray-200 "
    >
      <li key={item.id} className="flex py-3 items-center">
        <div className="flex-shrink-0">
          <img
            src={item.pic}
            alt={item.name}
            className=" h-24 rounded-lg object-cover object-center"
          />
        </div>

        <div className="relative ml-4 flex flex-1 flex-col justify-between">
          <div>
            <div className="flex justify-between sm:grid sm:grid-cols-2">
              <div className="pr-6">
                <h3 className="text-sm">
                  <p className="text-black text-lg">{item.name}</p>
                </h3>
              </div>

              <p className="text-right italic text-m text-gray-900">
                BHD {item.price}
              </p>
            </div>

            <div className="mt-4 flex items-center sm:absolute sm:left-1/2 sm:top-0 sm:mt-0 sm:block">
              <label htmlFor="qty" className="sr-only">
                Quantity
              </label>
              <input
                id="qty"
                type="number"
                min="1"
                value={item.userQty}
                max={item.qty}
                onChange={(e) => {
                  handleClick(item._id, e.target.value)
                }}
                className="block max-w-full rounded-md border border-gray-300 py-1.5 text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-center"
              />
            </div>
          </div>
        </div>
      </li>
    </ul>
  )
}

export default CartItem
