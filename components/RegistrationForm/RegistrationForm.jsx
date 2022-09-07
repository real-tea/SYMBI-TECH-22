import React from 'react'
import { Formik } from 'formik';
const RegistrationForm = () => {
    return (
        <Formik
            initialValues={{ student_name: '', prn: '', email: '', event_name: '' }}
            onSubmit={(values, { resetForm, setSubmitting }) => {
                const data = {
                    student_name: values.student_name,
                    prn: values.prn,
                    email: values.email,
                    event_name: values.event_name
                };
                data.submittedAt = getTimeString();
                sendData(data, setSubmitting);
                setModalOpen(true);
                resetForm({ values: '' });
            }}
        // validationSchema={basicSchema}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <form className='form-container' onSubmit={handleSubmit} autoComplete="off">
                    {/* Student Name */}
                    <input
                        type="text"
                        name="student_name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.student_name}
                        placeholder="Student Name"
                    />
                    <p className="error-msg">{errors.student_name && touched.student_name && errors.student_name}</p>
                    {/* Email */}
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder="Email"
                    />
                    <p className="error-msg">{errors.email && touched.email && errors.email}</p>
                    {/* PRN */}
                    <input
                        type="number"
                        name="prn"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.prn}
                        placeholder="PRN"
                    />
                    <p className="error-msg">{errors.prn && touched.prn && errors.prn}</p>
                    {/* Event Name */}
                    <select
                        type="text"
                        name="event_name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.event_name}
                        placeholder="Select Event"
                    >
                        <option value=''>Select Batch</option>
                        <option value='2019-23'>Event 1</option>
                        <option value='2020-24'>Event 2</option>
                        <option value='2021-25'>Event 3</option>
                        <option value='2022-26'>Event 4</option>
                        <option value='STAFF'>Test</option>
                    </select>
                    <p className="error-msg">{errors.event_name && touched.event_name && errors.event_name}</p>
                    <button className="submit-btn" type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </form>
            )}
        </Formik>
    )
}

export default RegistrationForm