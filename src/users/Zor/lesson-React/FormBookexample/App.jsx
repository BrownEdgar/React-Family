import { useState } from 'react'
import { Form, Formik, ErrorMessage, Field } from 'formik'
import './App.scss'

const initialValue = {
  name: '',
  phone: '',
  arrivalDate: '',
  depatrureDate: '',
  adults: '',
  children: ''
}

export default function App() {

  const {bookingList, setbookingList} = useState([])
  console.log(bookingList);
  const handleSubmit = (values, {formReset}) => {
    const list = {
      id: uuidv4();
      ...values
    }
  }

  return (
    <div className='container'>
      <div className='container__wrapper'>
        <div className='container__form'>
          <h2>Book a Room</h2>
        <Formik
          initialValues={initialValue}
          onSubmit={handleSubmit}
          validateOnBlur={true}
          validateOnChange={false}
        >
      
      
        {
          (formik) => {
            return (
              <Form>
                <div>
                  <Field type="text" id='name' name="name" placeholder="name"/>
                  <ErrorMessage name='name' component='p' className="error"/>
                  
                </div>
                <div>
                  <Field type="tel" id='phone' name="phone" placeholder="phone"/>
                  <ErrorMessage name='phone' component='p' className="phone"/>
                  
                </div>
                <div>
                  <Field type="date" id='arrivalDate' name="arrivalDate" placeholder="arrivalDate"/>
                  <ErrorMessage name='arrivalDate' component='p' className="error"/>
                  
                </div>
                <div>
                  <Field type="text" id='depatrureDate' name="depatrureDate" placeholder ="depatrureDate"/>
                  <ErrorMessage name='depatrureDate' component='p' className="error"/>
                  
                </div>
                <div className='w-50'>
                  <Field as="select" id='adults' name="adults" placeholder ="adults"/>
                    <option value="" selected disabled >adults</option>
                    <option value="1"></option>
                    <option value="2"></option>
                    <option value="3"></option>
                    <option value="4"></option>
                    <Field />
                  <ErrorMessage name='adults' component='p' className="error"/>
                  
                </div>
                <div className='w-50'>
                  <Field as="select" id='children' name="children" placeholder ="children">
                    <option value="" selected disabled >children</option>
                    <option value="1"></option>
                    <option value="2"></option>
                    <option value="3"></option>
                    <option value="4"></option>
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
