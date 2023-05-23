import React, { useState } from 'react';

const foody = [
  {
    name: '🍔',
    price: 30,
    amount: 10,
  },
  {
    name: '🍨',
    price: 20,
    amount: 3,
  },
  {
    name: '🍿',
    price: 10,
    amount: 5,
  },
  {
    name: '🍵',
    price: 5,
    amount: 9,
  },
];

const App = () => {
  const [value, setValue] = useState(0);
  const [food, setFood] = useState(foody);

  const addId = () => {
    setFood(prevFood =>
      prevFood.map((item, index) => ({ ...item, id: index + 1 }))
    );
  };

  const deleteId = id => {
    setFood(prevFood => prevFood.filter(item => item.id !== id));
  };

  const increasePrices = () => {
    setFood(prevFood =>
      prevFood.map(item =>
        item.name !== '🍔' ? { ...item, price: item.price + 4 } : item
      )
    );
  };

  const TotalPrice = () => {
    const totalPrice = food.reduce((total, item) => total + (item.price * item.amount), 0);
    setValue(totalPrice);
  };

  const decreaseAmount = () => {
    setFood(prevFood =>
      prevFood.map(item =>
        item.name === '🍿' || item.name === '🍵' ? { ...item, amount: item.amount - 1 } : item
      )
    );
  };

  const LeastAmount = () => {
    const sortedFoods = [...food].sort((a, b) => a.amount - b.amount);
    const leastAmountFood = sortedFoods[0];
    setValue(leastAmountFood.amount);
  };

  const addInStock = () => {
    setFood(prevFood =>
      prevFood.map(item => ({ ...item, inStock: item.amount !== 0 }))
    );
  };

  const sortByPrice = () => {
    const sortedFoods = [...food].sort((a, b) => b.price - a.price);
    setFood(sortedFoods);
  };

  const increasePriceById = () => {
    setFood(prevFood =>
      prevFood.map(item =>
        (item.id === 1 || item.id === 3) ? { ...item, price: item.price + (item.price * 0.3) } : item
      )
    );
  };

  return (
    <div>
      <button onClick={addId}>Add ID</button>
      {food.map(item => (
        <button  onClick={() => deleteId(item.id)} key={item.id}>
          Delete {item.name}
        </button>
      ))}
      <button onClick={increasePrices}>Increase Prices</button>
      <button onClick={TotalPrice}> Total Price</button>
      <button onClick={decreaseAmount}>Decrease 🍿 and 🍵 Amounts</button>
      <button onClick={LeastAmount}>Find Food with Least Amount</button>
      <button onClick={addInStock}>Add InStock Property</button>
      <button onClick={sortByPrice}>Sort by Price</button>
      <button onClick={() => increasePriceById(1)}>Increase Price for ID 1</button>
      <button onClick={() => increasePriceById(3)}>Increase Price for ID 3</button>
      <p>Total value: {value}</p>
      <pre>{JSON.stringify(food, null, 2)}</pre>
    </div>
  );
};

export default App;