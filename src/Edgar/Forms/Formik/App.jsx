import { useFormik } from 'formik'
import React from 'react'

export default function App() {

	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		}
	})
	console.log(formik)
	return (
		<div>
			<form>
				<input type="email" name='email' id='email' />
				<input type="password" name='password'  id='password'/>
			</form>
		</div>
	)
}
