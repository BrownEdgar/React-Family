import React, { useState } from "react";

export default function App() {
    const [price, setPrice] = useState([])
    const [foods, setFoods] = useState([
        {
            name: '🍔',
            price: 15,
            amount: 10,
          },
          {
            name: '🍨',
            price: 20,
            amount: 3,
          },
          {
            name: '🍿',
            price: 1,
            amount: 5,
          },
          {
            name: '🍵',
            price: 5,
            amount: 9,
          }
    ])
    const addId = () => {
        const added = foods.map((food,index) => {
            return (
                {...food, id: index + 1}
            )
        })
        setFoods(added)

    }
    const deleteWithId = (id) => {
        const deleted = foods.filter((food) => food.id !== id);
        setFoods(deleted);
    };      
    const raisePrice = () => {
        const raiseFood = foods.map(food => {
            if (food.name !== '🍔') {
                return (
                    {...food, price: food.price + 4}
                )
            }
            return food
        })
        setFoods(raiseFood)
    }
    const wholeAmount = () => {
        let price = 0
        foods.forEach(food => {
            price += food.price * food.amount
        })
        setPrice(price)
    }
    const decreasePrice = () => {
        const decreasedFood = foods.map(food => {
            if(food.name === '🍿' || food.name === '🍵') {
                return (
                    {...food, amount: food.amount - 1}
                )
            }
            return food
        }) 
        setFoods(decreasedFood)
    }
    const leastAmount = () => {
        const leastAmount = foods.reduce((min, max) => {
            return (
                max.amount < min.amount ? max : min
            )
        })
        setPrice(leastAmount.name)
    }
    const add = () => {
        const added = foods.map(food => {
            if (food.amount !== 0) {
                return (
                    {...food, inStock: 'true'}
                )
            }
            return food
        })
        setFoods(added)
    }
    const sortedArray = () => {
        const sorted = [...foods].sort((a,b) => {
            return b.price - a.price
        })
        setFoods(sorted)
    }
    const firstThird = () => {
        const raised = foods.map(food => {
            if(food.id === 1 || food.id === 3) {
                return (
                    {...food, price: (+food.price * 0.3) + +food.price}
                )
            }
            return food
        })
        setFoods(raised)
    }

    return (
        <div>
            <p>{price}</p>
            <pre>
                {JSON.stringify(foods, null, 1)}
            </pre>
            <button onClick={addId}>Add id</button>
            <button onClick={() => deleteWithId(3)}>Delete with id 3</button>
            <button onClick={raisePrice}>Raise the price by $4</button>
            <button onClick={wholeAmount}>The whole amount</button>
            <button onClick={decreasePrice}>Decrease by $1</button>
            <button onClick={leastAmount}>the least amount of food</button>
            <button onClick={add}>Add</button>
            <button onClick={sortedArray}>To sort</button>
            <button onClick={firstThird}>Raise the price by 30%</button>
        </div>
    )
}
