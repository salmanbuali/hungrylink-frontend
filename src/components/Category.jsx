import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as React from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Client from '../services/api'
import '../styles/Cart.css'
import '../styles/Category.css'
import { TrashIcon } from '@heroicons/react/16/solid'

const Category = ({
  categories,
  cart,
  setCart,
  rest_id,
  r_id,
  setr_id,
  toggleDelete,
  toggleUpdateQty,
  updateQty,
  user
}) => {
  const [value, setValue] = React.useState()

  const [items, setItems] = useState([])

  const [newQty, setNewQty] = useState(0)


  useEffect(() => {
    const getItems = async () => {
      const response = await Client.get(`/rest/cat/items/${categories}`)
      setItems(response.data)
    }
    getItems()
  }, [user, updateQty])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeOfQty = (e) => {
    if (e.target.value <= 0 || e.target.value === null) {
      return
    }
    setNewQty(e.target.value)
    console.log(newQty)
  }

  const addToCart = (item) => {

    if (cart.indexOf(item) !== -1) {
      console.log('Object found in the array!')
      return
    }

    item.userQty = 1

    setCart([...cart, item])
  }

  if (updateQty === true) {
    setTimeout(() => {
      toggleUpdateQty(!updateQty)
    }, 2000)
  }

  const updateItem = async (e, itemId) => {
    e.preventDefault()
    toggleUpdateQty(!updateQty)
    const request = {
      _id: itemId,
      newQty: newQty
    }
    const response = await Client.put(`/rest/updateItem`, request)
  }

  const handleDelete = async (categoryId) => {
    const response = await Client.delete('/rest/deleteCat', {
      data: {
        catId: categoryId
      }
    })
    toggleDelete((prev) => {
      return !prev
    })
    console.log(categoryId)
  }
  return (
    <div className="category-container">
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          {categories.map((category) => (
            <div key={category._id} className="category-wrapper">
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList
                  onChange={handleChange}
                  className="tab-list bg-green-600"
                >
                  <Tab
                    label={category.name}
                    value={category.name}
                    className="tab-item"
                  />
                  <div className="flex py-2 justify-between w-full">
                    {user?.type === 'restaurant' && user._id === rest_id && (
                      <button className="add-item-button rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        <Link
                          to={`/createitem/${category._id}`}
                          className="add-item-link flex items-center gap-2"
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
                              d="M12 4.5v15m7.5-7.5h-15"
                            />
                          </svg>
                          Add Item
                        </Link>
                      </button>
                    )}
                    {user?.type === 'restaurant' && user._id === rest_id && (
                      <button
                        type="button"
                        className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        onClick={() => {
                          handleDelete(category._id)
                        }}
                      >
                        <div className="flex items-center justify-end">
                          <TrashIcon className="size-7" /> <span>Delete</span>
                        </div>
                      </button>
                    )}
                  </div>
                </TabList>
              </Box>

              <TabPanel value={category.name} className="tab-panel">
                <div className="items-container">
                  {category.items.map(
                    (item) =>
                      item.qty > 0 && (
                        <div
                          key={item._id}
                          className="flex items-center flex-col border p-4 gap-4 rounded-2xl shadow-lg"
                        >
                          <img
                            src={item.pic}
                            alt="item pic"
                            className="item-img"
                          />
                          <p className="item-description">
                            <strong>{item.name}</strong>
                            <br /> BHD {item.price} <br />{' '}
                            <span className="text-sm"> {item.desc} </span>
                          </p>

                          {user?._id === rest_id && (
                            <div className="flex items-center flex-col">
                              <form>
                                <label> Quantity: {item.qty} </label> <br />
                                <p>
                                  New Qty:
                                  <input
                                    className="rounded-md border border-gray-300 py-1.5 text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-center ml-1"
                                    type="number"
                                    id="newQty"
                                    min="1"
                                    max="100"
                                    onChange={handleChangeOfQty}
                                  />
                                </p>
                                <div className="flex items-center">
                                  <button
                                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 mx-8 mt-3 hover:bg-gray-50"
                                    onClick={(e) => updateItem(e, item._id)}
                                  >
                                    Update
                                  </button>
                                  {updateQty && (
                                    <span class="absolute w-3 h-3 me-3 bg-green-500 rounded-full mt-2"></span>
                                  )}
                                </div>
                              </form>
                            </div>
                          )}

                          {user && user.type !== 'restaurant' && (
                            <button
                              className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                              onClick={() => addToCart(item)}
                            >
                              <div className="flex flex-row align-middle justify-center gap-2 p-1">
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
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                  />
                                </svg>
                                Add to Cart
                              </div>
                            </button>
                          )}
                        </div>
                      )
                  )}
                </div>
              </TabPanel>
            </div>
          ))}
        </TabContext>
      </Box>
    </div>
  )
}

export default Category
