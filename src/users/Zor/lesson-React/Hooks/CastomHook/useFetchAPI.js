import { useState, useEffect} from 'react'
import axios from 'axios'


const DB_URL = 'https://jsonplaceholder.typicode.com/'

export default function useFetchAPI(target, options={}) {

  const {data, setData} = useState([])
  const [params] = useState(options)

  useEffect(() => {
    axios.get({
      baseURL: DB_URL,
      usr: target,
      params,
    },
    
    )
    .then(res => setData(res.data))
    .catch(arr => setData(arr.message))
  }, [])

  return data
}
