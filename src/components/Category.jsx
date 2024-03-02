import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Category = () => {
  const { restId } = useParams('restId')
  const [category, setCategory] = useState([])

  // useEffect(()=>{
  //   const getCategory = ()=>{
  //     const response =

  //   }
  // })

  return (
    <div>
      <h2>Categories</h2>
    </div>
  )
}

export default Category
