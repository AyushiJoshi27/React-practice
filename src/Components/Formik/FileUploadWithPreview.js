import { useFormik } from 'formik'
import React, { useState } from 'react'

export default function FileUploadWithPreview() {
    const [fileData, setFileData] = useState('');
    
    const formik = useFormik({
        initialValues: {
            file: null,
        },
        onSubmit: values => {
            const formData = new FormData();
            formData.append('file', values.file);
        }
    })

    const fileHandler = (e) => {
        console.log(e.currentTarget.files[0]);
        const obj = e.currentTarget.files[0]
        formik.setFieldValue('file', obj) ;

        const fileUrl = URL.createObjectURL(obj);
        console.log(fileUrl);
        setFileData(fileUrl)
    }

  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='file'>Upload file here</label>
            <br/><br/>
            <input 
                type='file'
                id='file'
                onChange={fileHandler}
            />
            <br /><br /><br /><br />
            {fileData ? 
            <img src={fileData} alt={fileData} height="100px" width="100px" /> 
            : ""}
            <br /><br /><br /><br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
