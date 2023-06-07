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
let minDate = new Date().toLocaleDateString().split('.').reverse().join('-')
let gridDate = new Date(minDate)
gridDate.setMonth(gridDate.getMonth() + 6)

let maxDate = `${gridDate.getDate()}-${(gridDate.getMonth() + 1)}-${+ gridDate.getFullYear()}`
maxDate = maxDate.split('-')
if (maxDate[0] < 10) maxDate[0] = '0' + maxDate[0]
if (maxDate[1] < 10) maxDate[1] = '0' + maxDate[1]
maxDate = maxDate.reverse().join('-')

export default function App() {
  const [bookingList, setbookingList] = useState([])

  const handleSubmit = (values) => {
    const list = {
      id: uuidv4(),
      ...values
    }
    
    if (bookingList.length > 2) {
      let a = 0
      bookingList.forEach( elem => {
        if (new Date(elem.depatrureDate) > new Date(values.arrivalDate)) {
          a = a + 1
        }
      })
      if (a > 2) {
        return
      }
    }
    setbookingList([...bookingList, list])
  }

  return (
    <div className='container'>
      <div className='container-wrapper'>
        <div className='container-form'>
          <h2>Book a Room</h2>
          <Formik
            initialValues={initialValues}
						onSubmit={handleSubmit}
						validateOnBlur={true}
						validateOnChange={false}
          >
            {
              () => {
                return (
                  <Form>
                    <div>
                      <Field type="text" id='name' name="name" placeholder="name"/>
                      <ErrorMessage name='name' component='p' className="error"/>
                    </div>
                    <div>
                      <Field type="tel" id='phone' name="phone" placeholder="phone"/>
                      <ErrorMessage name='phone' component='p' className="error"/>
                    </div>
                    <div>
                      <Field
                        type="date"
                        id='arrivalDate'
                        name="arrivalDate"
                        placeholder ="arrivalDate"
                        min={minDate}
                        max={maxDate}
                      />
                      <ErrorMessage name='arrivalDate' component='p' className="error"/>
                    </div>
                    <div>
                      <Field
                        type="date"
                        id='depatrureDate'
                        name="depatrureDate"
                        placeholder ="depatrureDate"
                        min={minDate}
                        max={maxDate}
                      />
                      <ErrorMessage name='depatrureDate' component='p' className="error"/>
                    </div>
                    <div className='w-50'>
                      <Field as="select" id='adults' name="adults">
                        <option value="" defaultValue='0' disabled >Adults</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        </Field>
                      <ErrorMessage name='adults' component='p' className="error"/>
                    </div>
                    <div className='w-50'>
                      <Field as="select" id='children' name="children">
                        <option value="" defaultValue='0' disabled >Children</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </Field>
                      <ErrorMessage name='children' component='p' className="error"/>
                    </div>
                    <div className='last'>
                      <input type="submit" />
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
