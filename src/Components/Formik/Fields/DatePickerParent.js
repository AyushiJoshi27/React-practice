import React from 'react'
import { Formik, Form } from "formik";
import { DatePickerChild } from './DatePicker';

export default function DatePickerParent() {
  return (
    <div>
        <h1>React Formik with DatePicker</h1>
      <Formik
        initialValues={{ date: new Date() }}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        {(props) => (
          <Form>
            <div class="form-group">
              <DatePickerChild name="date" />
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
