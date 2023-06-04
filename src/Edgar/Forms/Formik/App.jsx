import { useState } from "react";
import { ErrorMessage, Field, Form, Formik, } from "formik"
import { v4 as uuidv4 } from 'uuid';
import * as yup from 'yup'
import "./App.scss"

const userSchema = yup.object({
	email: yup.string().email().required(),
	policy: yup.boolean().isTrue(),
	password: yup.string().min(8).max(18).matches(/^[A-Z]/, "Must by start with uppercase").required()
})


export default function App() {
	const [users, setUsers] = useState([])


	const handleSubmit = (values, formik) => {
		const user = {
			id: uuidv4(),
			...values
		}
		setUsers([...users, user])
		formik.resetForm();
	}

	return (
		<div className='parent'>
			<div className="parent__container">
				<Formik
					initialValues={{
						email: '',
						password: '',
						policy: ''
					}}
					validationSchema={userSchema}
					onSubmit={handleSubmit}
				>
					{
						(formik) => {
							console.log(formik.isValid)
							return (
								<Form>
									<div>
										<label htmlFor="email">Email</label>
										<Field type="text" id='email' name='email' />
										<ErrorMessage name='email'>
											{(err) => <p className="error">{err}</p>}
										</ErrorMessage>
									</div>
									<div>
										<label htmlFor="password">password</label>
										<Field type="password" id='password' name='password' />
										<ErrorMessage name='password' component='p' className="error" />
									</div>
									<div>
										<Field type="checkbox" id='policy' name='policy' />
										<label htmlFor="policy">Policy success control</label>
										<ErrorMessage name='policy' component='p' className="error" />
									</div>
									<h3>Забыли пароль?</h3>
									<div className="parent__buttons">
										<input type="submit" value='Регистрация' disabled={!formik.isValid}/>
									</div>
								</Form>
							)
						}
					}
				
				</Formik>

			</div>
			<pre>
				{JSON.stringify(users, null, 1)}
			</pre>
		</div >
	)
}
