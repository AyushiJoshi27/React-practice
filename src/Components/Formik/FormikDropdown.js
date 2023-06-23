import { Field, useFormik } from 'formik'
import React from 'react'

export default function FormikDropdown() {
    const formik = useFormik({
        initialValues: {
            initialValues: {
                country: "",
                lastName: ""
            }
        },
        onSubmit: values => {
            console.log(values.country)
            console.log(values.lastName)
        },
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <br /><br />
            <label htmlFor='country'>Country</label>
            <select id="country" {...formik.getFieldProps('country')}>
                <option value="">Select an option</option>
                <option value="India">India</option>
                <option value="Brazil">Brazil</option>
                <option value="Indonasia">Indonasia</option>
                <option value="USA">USA</option>
            </select>
            <br /><br /><br /><br />
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleSubmit}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
            />
            <br /><br /><br /><br />
            <button type='submit'>submit</button>
        </form>
    )
}
