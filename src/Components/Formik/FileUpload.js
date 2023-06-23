import { useFormik } from 'formik'
import React from 'react'

export default function FileUpload() {
    const formik = useFormik({
        initialValues: {
            file: null,
        },
        onSubmit: values => {
            const formData = new FormData();
            formData.append('file', values.file.name)
            console.log(values.file.name)
        }
    })

  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='file'>Upload file here</label>
            <input 
                type='file'
                id='file'
                onChange={(e) => {
                    formik.setFieldValue('file', e.currentTarget.files[0])
                }}
            />
            <br /><br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
