// import { useParams } from 'react-router-dom'
// import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Category = ({ categories }) => {
  // const { restId } = useParams('restId')
  // const [category, setCategory] = useState([])
  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li>
            <p>{category.name}</p>
            <button>
              <Link to="/createitem">Add Items</Link>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Category
