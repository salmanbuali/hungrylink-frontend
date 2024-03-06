import { useState, useEffect } from 'react'
import Client from '../services/api'
import RestaurantCard from '../components/RestaurantCard'
import LandingRestsCard from '../components/LandingRestsCard'

const Landing = ({ user, r_id, setr_id }) => {
  const [checkBoxValues, setCheckBoxValues] = useState([])
  const [restDetails, setRestDetails] = useState([])
  const [searchedItems, setSearchedItems] = useState('')
  const [searchedArray, setSearchedArray] = useState([])

  const allcuisines = [
    'American',
    'Bahraini',
    'Chinese',
    'Desserts',
    'Fast Food',
    'Indian',
    'Irish',
    'Italian',
    'Japanese',
    'Korean',
    'Lebanese',
    'Mediterranean',
    'Mexican',
    'Thai',
    'Turkish',
    'Persian',
    'Breakfast',
    'Asian',
    'Oriental',
    'Egyptian',
    'Bakery',
    'Cafeteria',
    'Continental',
    'Juices',
    'Vegan'
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
      <div className="flex justify-center py-2">
        <input
          type="text"
          placeholder="Search for restaurant"
          className="block w-1/2 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleInputChange}
        />
      </div>

      <div className="flex flex-row gap-2 flex-wrap justify-center mx-80">
        {allcuisines.map((cuis, i) => (
          <div key={i}>
            <input
              id={cuis}
              value={cuis}
              type="checkbox"
              onChange={handleChange}
            />
            <label htmlFor={cuis} className="pl-1">
              {cuis}
            </label>
          </div>
        ))}
      </div>
      <div>
        <div className="flex flex-center flex-wrap justify-center gap-2">
          {searchedArray.map((searched) => (
            // <div key={searched._id}>
            //   <RestaurantCard rest={searched} r_id={r_id} setr_id={setr_id} />
            // </div>

            <div key={searched._id}>
              <LandingRestsCard rest={searched} r_id={r_id} setr_id={setr_id} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Landing
