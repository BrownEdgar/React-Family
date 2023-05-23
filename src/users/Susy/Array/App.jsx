import React, { useState } from "react"
import "./App.css"

export default function App() {
    const [value,setValue] = useState([])
    const [food,setFood] = useState([
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
    ]);

    const addId = () => {
        const foods = food.map((food,index) => {
            return {
                ...food,
                id:index+1
            }
        })
        setFood(foods)
    };

    const deleteId = (id) => {
        const foods = food.filter((food) => food.id !== id);
        setFood(foods);
    };

    const increasing = () => {
        const foods = food.map((food) => {
            if(food.name !== '🍔'){
                return {
                    ...food,
                    price : +food.price + 4
                }
            }else{
                return {
                ...food
                }
            }
        })
        setFood(foods)
    };

    const neededMoney = () => {
        let val = 0;
        food.forEach((food) => {
            val += +food.price
        })
        setValue(val)
    };

    const subAmount = () => {
        const foods = food.map((food) => {
            if(food.name !== '🍔' && food.name !== '🍨'){
                return {
                    ...food,
                    amount:+food.amount - 1
                }
            }else{
                return{
                    ...food
                }
            }
        })
        setFood(foods)
    };

    const minimumAmount = () => {
        const min = food.reduce((a, b) =>
            a.amount < b.amount ? a : b
        );
        setValue(min.name);
    }; 

    const addInStoke = () => {
        const foods = food.map((food) => {
            if(food.amount !== 0){
                return {
                    ...food,
                    inStoke: 'true'
                }
            }else{
                return{
                    ...food
                }
            }
        })
        setFood(foods)
    };

    const sorting = () => {
        const foods = [...food].sort((a,b) => {
            return a.price - b. price
        })
        setFood(foods)
    };

    const addWithPersent = () => {
        const foods = food.map((food)=> {
            if(food.id !== 2 && food.id !== 4){
                return {
                    ...food,
                    price: ((+food.price * 30 )/100) + +food.price
                }
            }else{
                return {
                    ...food
                }
            }
        })
        setFood(foods)
    };

    return (
        <div>
            <button onClick={addId}>AddId</button>
            {food.map((food) => (
                <button disabled = {!food.id} onClick={() => deleteId(food.id)}>Delete{food.name}</button>
            ))}
            <button onClick={increasing}>Increasing</button>
            <button onClick={neededMoney}>NeededMoney</button>
            <button onClick={subAmount}>SubAmount</button>
            <button onClick={minimumAmount}>Minimum</button>
            <button onClick={addInStoke}>AddInStoke</button>
            <button onClick={sorting}>Sorting</button>
            <button disabled = {!food.id} onClick={addWithPersent}>AddWithPersent</button>
            <p>Total value : {value}</p>
            <pre>{JSON.stringify(food,null,1)}</pre>
        </div>
    )
}

