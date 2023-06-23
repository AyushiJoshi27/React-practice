import { useFormik } from 'formik'
import React from 'react'

export default function TextareaFormik() {
    const formik = useFormik({
        initialValues: {
            username: "",
        },
        onSubmit: values => {
            console.log(values.username);
        }
    })
  return (
    <form onSubmit={formik.handleSubmit}>
        <textarea 
            name="username"
            value={formik.values.username}
            onChange={formik.handleSubmit}
            type="text"
        />
        <button type="submit">Submit</button>
    </form>
  )
}
