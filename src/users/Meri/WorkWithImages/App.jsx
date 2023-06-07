import React, { useEffect, useState } from 'react';
import "./App.scss";

export default function App() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => setUsers(data.users));

    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <div>
      <div className='User'>
        {users.map(user => (
          <div key={user.id} className='User__info'>
            <h2><span>title</span> {user.title}</h2>
            <h2><span>description</span> {user.description}</h2>
            <h2><span>price</span> {user.price}</h2>
            <h2><span>stock</span> {user.stock}</h2>
            <img src={user.image} alt="" />
          </div>
        ))}
      </div>

      <div>
        {products.map(product => (
          <div className='User' key={product.id}>
            <img src={product.images[0]} alt="" />
            <div className='User__info'>
              <h2><span>title</span> {product.title}</h2>
              <h2><span>description</span> {product.description.slice(1, 10)}</h2>
              <h2><span>price</span> {product.price}</h2>
              <h2><span>stock</span> {product.stock}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}