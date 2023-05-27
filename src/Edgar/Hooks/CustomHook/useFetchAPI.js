import axios from 'axios';
import { useState, useEffect } from 'react';


const DB_URL = import.meta.env.VITE_DB_URL;

export default function useFetchAPI(target, options={}) {
	const [data, setData] = useState([]);
	const [params] = useState(options)

	useEffect(() => {
		axios({
			baseURL: DB_URL,
			url: target,
			params,
		}
		)
		.then(res => setData(res.data))
		.catch(err => setData([err.message]))
	}, [])
	

	return data;
	
}
