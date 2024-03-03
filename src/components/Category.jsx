// import { useParams } from 'react-router-dom'
// import { useEffect, useState } from 'react'

const Category = ({ categories }) => {
  // const { restId } = useParams('restId')
  // const [category, setCategory] = useState([])

  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li>{category.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Category
