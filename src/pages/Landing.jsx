import { useState, useEffect } from 'react'
import Client from '../services/api'
import RestaurantCard from '../components/RestaurantCard'

const Landing = ({ user }) => {
  const [checkBoxValues, setCheckBoxValues] = useState([])
  const [restDetails, setRestDetails] = useState([])
  const [searchedItems, setSearchedItems] = useState('')
  const [searchedArray, setSearchedArray] = useState([])

  const allcuisines = [
    'chinese',
    'american',
    'korean',
    'italian',
    'arabic',
    'fastfood'
  ]

  const handleChange = (e) => {
    if (e.target.checked) {
      setCheckBoxValues((prev) => [...prev, e.target.id])
    } else {
      const uncheck = (value) => {
        return value !== e.target.id
      }
      setCheckBoxValues((prev) => prev.filter(uncheck))
    }
  }

  const handleInputChange = (event) => {
    setSearchedItems(event.target.value)
  }

  useEffect(() => {
    const getRestDetails = async () => {
      const response = await Client.get(`/rest/allrest`)
      setRestDetails(response.data)
      setSearchedArray(response.data)
    }
    getRestDetails()
  }, [])

  useEffect(() => {
    handleSearch()
  }, [checkBoxValues, searchedItems])

  const handleSearch = () => {
    const newRestDetailsArray = restDetails
      .filter((va) => {
        if (!searchedItems) return true
        return va.name.toLowerCase().includes(searchedItems.toLowerCase())
      })
      .filter((cuis) => {
        if (checkBoxValues.length === 0) return true
        return checkBoxValues.some((value) =>
          cuis.restId.cuisine.includes(value)
        )
      })
    setSearchedArray(newRestDetailsArray)
  }
  
  return (
    <>
      <div>
        <input type="text" onChange={handleInputChange} />
      </div>
      <div>
        {allcuisines.map((cuis) => (
          <div>
            <input
              id={cuis}
              value={cuis}
              type="checkbox"
              onChange={handleChange}
            />
            <label htmlFor={cuis}>{cuis}</label>
          </div>
        ))}
      </div>
      <div>
        <h2>Restaurants</h2>
        <div className="landingDiv">
          {searchedArray.map((searched) => (
            <div key={searched._id}>
              <RestaurantCard rest={searched} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Landing