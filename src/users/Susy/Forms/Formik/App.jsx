import {useState} from "react";
import { Formik , Form , Field, ErrorMessage } from "formik";
import {v4 as uuidv4} from 'uuid';
import './App.scss'

const initialValues = {
    name: '',
    phone: '',
    arrivalDate: '',
    departureDate: '',
    adults: '',
    children: ''
}

export default function App() {

    const [bookinglist,setBookinglist] = useState([])
    console.log(bookinglist)

    const handleSubmit = (values, {formReset}) => {

        const children = bookinglist.some(booking => booking.children === "4");

        if (values.children === "4" && children) {
            alert("Cannot book for a family with 4 children again");
            return;
        }

        const list = {
            id: uuidv4(),
            ...values
        }
        setBookinglist([...bookinglist,list])
        formReset()
        
    }
    return (
        <div className="container">
            <div className="container-wraper">
            <div className="container-form">
                <h2>BOOK A ROOM</h2>
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
                                    <Field type='text' id='name' name='name' placeholder='name'/>
                                    <ErrorMessage name='name' component='p' className='error' />
                                </div>
                                <div>
                                    <Field type='tel' id='phone' name='phone' placeholder='phone'/>
                                    <ErrorMessage name='phone' component='p' className='error' />
                                </div>
                                <div>
                                    <Field type='date' id='arrivalDate' name='arrivalDate' placeholder='arrivalDate'/>
                                    <ErrorMessage name='arrivalDate' component='p' className='error' />
                                </div>
                                <div>
                                    <Field type='date' id='departureDate' name='departureDate' placeholder='departureDate'/>
                                    <ErrorMessage name='departureDate' component='p' className='error' />
                                </div>
                                <div className='w-50'>
                                <div>
                                    <Field as='select' id='adults' name='adults'>
                                        <option value="" selected disabled>adults</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </Field>
                                    <ErrorMessage name='adults' component='p' className='error' />
                                </div>
                                <div>
                                    <Field as='select' id='children' name='children'>
                                        <option value="" selected disabled>children</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </Field>
                                    <ErrorMessage name='children' component='p' className='error' />
                                </div>
                                </div>
                                <div className='last'>
                                    <input type='submit' value='CHECK AVAILABILITY'/>
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