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


const Category = ({
  categories,
  cart,
  setCart,
  rest_id,
  r_id,
  setr_id,
  toggleDelete,
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
  }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeOfQty = (e) => {
    setNewQty( e.target.value )
    console.log(newQty)
  }

  const addToCart = (item) => {
    setr_id(rest_id)
    if (cart.indexOf(item) !== -1) {
      console.log('Object found in the array!')
      return
    }
    item.userQty = 1
    setCart([...cart, item])
  }

  const updateItem = async (e, itemId) => {
    e.preventDefault()
    console.log(itemId)
    const request = {
      _id: itemId,
      newQty: newQty
    }
    console.log(request)
    const response = await Client.put(`/rest/updateItem`, request)
    console.log(response)
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
  // const getItems = async () => {
  //   const response = await Client.get(`/rest/cat/items/${categories}`)
  //   setItems(response.data)
  // }
  return (
    <div className="category-container">
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          {categories.map((category) => (
            <div key={category._id} className="category-wrapper">
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} className="tab-list">
                  <Tab
                    label={category.name}
                    value={category.name}
                    className="tab-item"
                  />
                  {(user?.type === 'restaurant' && user._id === rest_id) && (
                  <button className="add-item-button">
                    <Link
                      to={`/createitem/${category._id}`}
                      className="add-item-link"
                    >
                      Add Item
                    </Link>
                  </button>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      handleDelete(category._id)
                    }}
                  >
                    Delete
                  </button>
                </TabList>
              </Box>

              <TabPanel value={category.name} className="tab-panel">
            
                <div className="items-container">
                  {category.items.map(
                    (item) =>
                      item.qty > 0 && (
                        <div key={item._id}>
                          <img
                            src={item.pic}
                            alt="item pic"
                            className="item-img"
                          />
                          <p className="item-description">
                            <strong>{item.name}</strong>
                            <br /> BHD {item.price} - {item.desc}
                          </p>

                          {(user?._id === rest_id) && (<div>
                            <form>
                              <label htmlFor="newQty">New Quantity</label>
                              <input type="number" id='newQty' min='1' max='100' onChange={handleChangeOfQty} />
                              <button onClick={(e) => updateItem(e, item._id)}>Update</button>
                            </form> 
                            </div> )}

                          {(user && user?.type != "restaurant") && <button onClick={() => addToCart(item)}>
                            Add to Cart
                          </button>}
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
