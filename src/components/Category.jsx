import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as React from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Client from '../services/api'

const Category = ({ user, categories, cart, setCart, rest_id, r_id, setr_id }) => {
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

  return (
    <div className="categories-div-s">

      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          {categories.map((category) => (
            <>
              <div key={category._id}></div>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange}>
                  <Tab label={category.name} value={category.name} />
                </TabList>
              </Box>
              <TabPanel value={category.name}>
                {(user?.type === 'restaurant' && user._id === rest_id) && (
                  <button>
                    <Link to={`/createitem/${category._id}`}>Add Items</Link>
                  </button>
                )}
                <br />
                <div className="items-div-s">
                  {category.items.map(
                    (item) =>
                      item.qty > 0 && (
                        <div key={item._id}>
                          <img
                            src={item.pic}
                            alt="item pic"
                            className="item-img-s"
                          />
                          <p>
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

                          {(user?.type != "restaurant") && <button onClick={() => addToCart(item)}>
                            Add to Cart
                          </button>}
                        </div>
                      )
                  )}
                </div>
              </TabPanel>
            </>
          ))}
        </TabContext>
      </Box>
    </div>
  )
}

export default Category
