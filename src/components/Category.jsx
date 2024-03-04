// import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Client from '../services/api'

const Category = ({ categories }) => {
  // const { restId } = useParams('restId')
  // const [category, setCategory] = useState([])
  console.log(categories)

  const [items, setItems] = useState([])

  useEffect(() => {
    const getItems = async () => {
      const response = await Client.get(`/rest/cat/items/${categories}`)
      console.log('where itens', response)
      setItems(response.data)
    }
    getItems()
  }, [])

  return (
    <div className="categories-div-s">
      <ul>
        {categories.map((category) => (
          <li>
            <div key={category._id}></div>
            {category.name}
            <button>
              <Link to={`/createitem/${category._id}`}>Add Items</Link>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Category
