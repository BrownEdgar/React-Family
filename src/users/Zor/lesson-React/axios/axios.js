import axios from 'axios'

const instanse = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})

export default instanse