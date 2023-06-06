import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import './App.scss';

const initialValues = {
  name: '',
  phone: '',
  arrivalDate: '',
  departureDate: '',
  adults: '',
  children: ''
};

export default function App() {
  const [bookingList, setBookingList] = useState([]);


  const handleSubmit = (values, { resetForm }) => {
    const maxPeople = +values.adults + +values.children;
    if (maxPeople > 2) {
      alert('Sorry you cannot register...');
    }

    const newBooking = {
      id: uuidv4(),
      ...values
    };

    setBookingList(prevList => [...prevList, newBooking]);
    resetForm();
  };

  return (
    <div className="container">
      <div className="container-wrapper">
        <div className="container-form">
          <h2>Book a Room</h2>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validateOnBlur={true}
            validateOnChange={false}
          >
            {formik => (
              <Form>
                <div>
                  <Field type="text" id="name" name="name" placeholder="Name" />
                  <ErrorMessage name="name" component="p" className="error" />
                </div>
                <div>
                  <Field type="tel" id="phone" name="phone" placeholder="Phone" />
                  <ErrorMessage name="phone" component="p" className="error" />
                </div>
                <div>
                  <Field type="date" className="icon" id="arrivalDate" name="arrivalDate" placeholder="Arrival Date" />
                  <ErrorMessage name="arrivalDate" component="p" className="error" />
                </div>
                <div>
                  <Field type="date" className="icon" id="departureDate" name="departureDate" placeholder="Departure Date" />
                  <ErrorMessage name="departureDate" component="p" className="error" />
                </div>
                <div className="w-50">
                  <Field as="select" id="adults" name="adults">
                    <option value="" disabled>Adults</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </Field>
                  <ErrorMessage name="adults" component="p" className="error" />
                </div>
                <div className="w-50">
                  <Field as="select" id="children" name="children">
                    <option value="" disabled>Children</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </Field>
                  <ErrorMessage name="children" component="p" className="error" />
                </div>
                <div className="last">
                  <button type="submit">Check in</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}