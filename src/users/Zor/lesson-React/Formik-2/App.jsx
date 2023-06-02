import { useState } from 'react'
import { useFormik } from 'formik';
import {v4 as uuidv4 } from 'uuid'
import * as yup from 'yup'

const userSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string.min(8).max(18).matches(/^[A-Z]/, "Mast by start with uppercase").required()
})

export default function App() {
  const [users, setUsers] = useState([])

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit(values, formik) {
      const user = {
        id: uuidv4(),
        ...values
      }
      setUsers([...users, user])
      formik.resetForm()
    },
    validationSchema: userSchema,
  })

  return (
    <div className='parent'>
      <div className='parent__container'>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input 
              type="text"
              id='email'
              name='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {
              (formik.touched.email && formik.errors.email) ? <p className='error'>{formik.errors.email}</p> : null
            }
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input 
              type="text"
              id='password'
              name='password'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {
              (formik.touched.password && formik.errors.password) ? <p className='error'>{formik.errors.password}</p> : null
            }
          </div>
          <h3>Забыл пароль?</h3>
          <div className='parent__buttons'>
            <button>Войти</button>
            <input type='submit' value='Регистрация'/>
          </div>
        </form>
      </div>
    </div>
  )
}
