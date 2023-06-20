import React from 'react'
import ReactPaginate from 'react-paginate';


export default function Pagination({
	totalTodos,
	perPage,
	changePage 
}) {

	const arr = [];
	for (let i = 1; i < totalTodos / perPage; i++) {
		arr.push(i)
	}

	return (
		<div className='Pagination'>
				{
				arr.map((elem, index) => <button 
				key={index}
					onClick={() => changePage(elem)}
				>{elem}</button>)
				}
		</div>
	)
}
