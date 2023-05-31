import { useState } from 'react'

export default function App() {
  const [city, setCity] = useState({
    barselona: false,
    paris: false,
    rome: false
  })

  const handleChang = (e) => {
    const {value, checked, name} = e.target;

    setCity({...city, [name]: checked})



    // if (checked) {
    //   setCity([...city, value])
    // } else {
    //   setCity(city.filter(elem => elem !== value))
    // }
  }

  return (
    <div>
      <form>
        <div>
          <input 
          type="checkbox"
          id='barselona'
          name='barselona'
          value='Barselona'
          onChange={handleChang}
          />
          <label htmlFor="barselona">Barselona</label>
        </div>
        <div>
          <input 
          type="checkbox"
          id='paris'
          name='paris'
          value='Paris'
          onChange={handleChang}
          />
          <label htmlFor="paris">Paris</label>
        </div>
        <div>
          <input 
          type="checkbox"
          id='rome'
          name='rome'
          value='Rome'
          onChange={handleChang}
          />
          <label htmlFor="rome">Rome</label>
        </div>
      </form>
      {/* <h1>{city.join(' | ')}</h1> */}
      <h1>{JSON.stringify(city, null, 1)}</h1>
    </div>
  )
}
