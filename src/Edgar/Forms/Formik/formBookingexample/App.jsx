import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.scss'

const initialValues = {
	name: '',
	phone: '',
	arrivalDate: '',
	depatrureDate: '',
	adults: '',
	children: ''
}

export default function App() {

	const [bookingList, setBookingList] = useState([]);
	console.log(bookingList)

	const handleSubmit = (values, { formReset }) => {
		const list = {
			id: uuidv4(),
			...values
		}
		setBookingList([...bookingList, list]);
	}
	return (
		<div className='container'>
			<div className="container-wrapper">
				<div className='container-form'>
					<h2>Book a Room</h2>
					<Formik
						initialValues={initialValues}
						onSubmit={handleSubmit}
						validateOnBlur={true}
						validateOnChange={false}
					>
						{
							(formik) => {
								return (
									<Form>
										<div>
											<Field type='text' id='name' name='name' placeholder="Name"/>
											<ErrorMessage name='name' component='p' className='error' />
										</div>
										<div>
											<Field type='tel' id='phone' name='phone' placeholder="Phone" />
											<ErrorMessage name='phone' component='p' className='error' />
										</div>
										<div>
											<Field type='date' id='arrivalDate' name='arrivalDate' placeholder="Arrival Date" />
											<ErrorMessage name='arrivalDate' component='p' className='error' />
										</div>
										<div>
											<Field type='date' id='depatrureDate' name='depatrureDate' placeholder="depatrure Date" />
											<ErrorMessage name='depatrureDate' component='p' className='error' />
										</div>
										<div className='w-50'>
											<Field as="select" id='adults' name='adults'>
												<option value="" selected disabled>Adults</option>
												<option value="1">1</option>
												<option value="2">2</option>
												<option value="3">3</option>
												<option value="4">4</option>
											</Field>
											<ErrorMessage name='adults' component='p' className='error' />
										</div>
										<div className='w-50'>
											<Field as="select" id='children' name='children'>
												<option value="" selected disabled>Children</option>
												<option value="1">1</option>
												<option value="2">2</option>
												<option value="3">3</option>
												<option value="4">4</option>
											</Field>
											<ErrorMessage name='children' component='p' className='error' />
										</div>
										<div className='last'>
											<input type="submit" value='check availability' />
										</div>
									</Form>
								)
							}
						}

					</Formik>
				</div>
		
			</div>

		</div>
	)
}
