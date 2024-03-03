// import { useParams } from 'react-router-dom'
// import { useEffect, useState } from 'react'

const Category = ({ categories }) => {
  // const { restId } = useParams('restId')
  // const [category, setCategory] = useState([])

  return (
    <div className="categories-div-s">
      <ul>
      {categories.map((category) => (    
          <li><div key={category._id}></div>{category.name}</li>
      ))}
      </ul>
    </div>
  )
}

export default Category
