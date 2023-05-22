import {useEffect, useState } from 'react'
import "./App.scss"
export default function App() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => setProducts(data.products))
    },[])
    return (
        <div>
            {
                products.map(product => {
                    return (
                        <div className='User' key={product.id}>
                            <img src={product.images[0]} alt="" />
                            <div className='User__info'>
                                <h2><span>title</span> {product.title}</h2>
                                <h2><span>description</span> {product.description.slice(1, 10)}</h2>
                                <h2><span>price</span> {product.price}</h2>
                                <h2><span>stock</span> {product.stock}</h2>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
