import { Link } from 'react-router-dom'
import * as React from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'

const Category = ({ categories, cart, setCart }) => {
  const [value, setValue] = React.useState()

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  console.log(categories)
  return (
    <div className="categories-div-s">
      {/* <ul>
        {categories.map((category) => (
          <li>
            <div key={category._id}></div>
            {category.name}
            
          </li>
        ))}
      </ul> */}

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
                <button>
                  <Link to={`/createitem/${category._id}`}>Add Items</Link>
                </button>
                <br />
                {category.items.map((item) => (
                  <div>
                    {console.log(category.items)}
                    <div key={item._id}></div>
                    <img src={item.pic} alt="item pic" />
                    <p>
                      <strong>{item.name}</strong>
                      <br /> BHD {item.price} - {item.desc}
                    </p>
                  </div>
                ))}
              </TabPanel>
            </>
          ))}
        </TabContext>
      </Box>
    </div>
  )
}

export default Category
