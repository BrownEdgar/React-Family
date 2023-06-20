import axios from "axios";
import { useState, useEffect } from "react";
import Todos from "./Todos";
import './App.css'
import Pagination from "./Pagination";

export default function App() {
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1)
    const [perPage,setPerPage] = useState(30)

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/todos')
            .then(res => setProducts(res.data))
    },[])

    const changePage = (number) => setPage(number)

    const productsCurrentSlice = products.slice(perPage * (page - 1), perPage * page)

    return (
        <div>
            <Todos todos={productsCurrentSlice} />
            <hr />
            <Pagination 
                totalTodos={products.length} 
                perPage={perPage} 
                changePage={changePage}/>
        </div>
    )

}