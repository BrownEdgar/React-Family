import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Todos from './Todos'
import Pagination from './Pagination'

export default function App() {
  const [products,setProducts] = useState([])
  const [page,setPage] = useState(1)
  const [perPage,setPerPage] = useState(12)


  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/todos')
    .then(res => setProducts(res.data))
  },[])
  const productCurrentSlice = products.slice(perPage * (page - 1 ) , perPage * page)
  

  const changePage = (number) => {
    setPage(number)
  }
  return (
    <div>
      <Todos todos = {productCurrentSlice} />
      <hr />
      <Pagination totalTodos = {products.length} changePage={changePage}  perPage={perPage}/>
    </div>
  )
}
