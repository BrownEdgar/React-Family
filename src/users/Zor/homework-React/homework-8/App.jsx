import { useState} from 'react'
import './App.scss'

const foods = [
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
]

export default function App() {
  const [arrfoods, setArrfoods] = useState(foods)
  const [result, setResult] = useState()

  const createId = () => {
    const foodsId = [...arrfoods]
      foodsId.map( (elem, index) => {
      elem.id = index + 1
    })
    setArrfoods(foodsId)
  }

  const increasePrice = () => {
    const foodsPrice = [...arrfoods]
    foodsPrice.map( (elem, index) => {
       if (index > 0) {
        elem.price = elem.price + 4
      }
    })
    setArrfoods(foodsPrice)
  }

  const totalPrice = () => {
    let n = 0
    arrfoods.forEach( elem => {
      n = n + elem.price * elem.amount
    })
    setResult(n)
  }

  const decreaseAmount = () => {
    const foodsAmount = [...arrfoods]
    foodsAmount.map( (elem) => {
      if (elem.name === '🍵' && elem.amount > 0 || elem.name === '🍿' && elem.amount > 0) {
        elem.amount = elem.amount - 1
      }
    })
    setArrfoods(foodsAmount)
  }

  const minAmount = () => {
    let x = 0
    let foodMin = ''
    arrfoods.forEach( (elem, index) => {
      if (index === 0) {
        x = elem.amount
        foodMin = elem.name
      } else if (x > elem.amount) {
        x = elem.amount
        foodMin = elem.name
      }
    })
    setResult(foodMin)
  }

  const hasFoodStoke = () => {
    const foodStoke = [...arrfoods].map( elem => {
      if (elem.amount > 0) {
        elem.inStoke = 'true'
      } else {
        delete elem.inStoke;
				return elem
      }
    })
    setArrfoods(foodStoke);
  }

  const foodsSort = () => {
    setArrfoods([...arrfoods.sort( (a, b) => b.price - a.price)])
  }

  const fooodsDiscount = () => {
    const foodsDis = [...arrfoods]
    foodsDis.map( elem => {
      if (elem.id === 1 || elem.id === 3) {
        elem.price = Math.trunc((elem.price * 30/ 100) + elem.price)
      }
    })
    setArrfoods(foodsDis)
  }
  
  return (
    <div className='container'>
      <nav>
        <button onClick={createId}>Добавление id</button>
        <button onClick={increasePrice}>Увеличение цены на 4$</button>
        <button onClick={totalPrice}>Общая цена</button>
        <button onClick={decreaseAmount}>Уменьшение на 1</button>
        <button onClick={minAmount}>Наименьшее кол-во еды</button>
        <button onClick={hasFoodStoke}>Если кол-во больше 0</button>
        <button onClick={foodsSort}>Сортировка</button>
        <button onClick={fooodsDiscount}>Акция +30%, плати больше кушай меньше</button>
        
      </nav>
      <h3>Result: <span>{result}</span></h3>
      
      <Component data={arrfoods}/>
    </div>
  )
}

function Component(props) {
  return (
    <div className='flex'>
      {
        props.data.map( elem => {
          return (
            <div key={elem.name} className='flex__item'>
              <h2 className='flex__title'>{elem.name}</h2>
              <p className='flex__price'>Price: {elem.price}</p>
              <p className='flex__amount'>Amount: {elem.amount}</p>
              <p className='flex__stoke'>{elem.inStoke}</p>
              <span className='flex__id'>{elem.id}</span>
            </div>
          )
        })
      }
    </div>
  )
}