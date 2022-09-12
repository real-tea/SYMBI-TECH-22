import React, { useState } from 'react'
import { Formik } from 'formik';
import { Input, Button, Row, Col, Grid, Spacer, Textarea, Tooltip } from '@nextui-org/react';
import Fade from 'react-reveal/Fade';
import Navbar from '../Navbar/Navbar';
import dynamic from 'next/dynamic'
import { basicSchema } from './registrationSchema';
import { database } from '../firebase';
import { Modal } from '../Modal/Modal';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
});


const RegistrationForm = () => {
    // const showModal = useState(true);

    async function sendData(data, setSubmitting) {
        setSubmitting(true);
        await database.collection('responses').doc(`${data.fullname}_${data.contact}_${data.identityNo}_${data.event}`).set(data)
            .then(alert('Response submitted!'))
            .then(console.log(data))
            .catch((e) => alert(e));
    }
    return (
        <div>
            <AnimatedCursor
                innerSize={15}
                outerSize={40}
                color='255, 255, 255'
                outerAlpha={0.2}
                innerScale={0.6}
                outerScale={2}
                trailingSpeed={7} />
            <Navbar />
            <Fade duration={2000} delay={300} small>
                <div>
                    <Formik
                        className='formik-form'
                        initialValues={{ fullname: '', email: '', contact: '', college: '', identityNo: '', event: '' }}
                        onSubmit={(values, { resetForm, setSubmitting }) => {
                            const data = {
                                fullname: values.fullname,
                                email: values.email,
                                contact: values.contact,
                                college: values.college,
                                identityNo: values.identityNo,
                                event: values.event
                            };
                            sendData(data, setSubmitting);

                            resetForm(values);
                        }}
                        validationSchema={basicSchema}
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
                                    name="fullname"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.fullname}
                                    placeholder="Full Name"
                                    className='input-field'
                                />
                                <p className="error-msg">{errors.fullname && touched.fullname && errors.fullname}</p>
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
                                {/* Contact */}
                                <input
                                    type="number"
                                    name="contact"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.contact}
                                    placeholder="Contact Number"
                                />
                                <p className="error-msg">{errors.contact && touched.contact && errors.contact}</p>
                                {/* College */}
                                <input
                                    type="text"
                                    name="college"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.college}
                                    placeholder="College"
                                />
                                <p className="error-msg">{errors.college && touched.college && errors.college}</p>
                                {/* IdentityNo */}
                                <input
                                    type="text"
                                    name="identityNo"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.identityNo}
                                    placeholder="Identity Number (College ID or Aadhaar)"
                                />
                                <p className="error-msg">{errors.identityNo && touched.identityNo && errors.identityNo}</p>
                                {/* Event Name */}
                                <select
                                    type="text"
                                    name="event"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.event}
                                    placeholder="Select Event"
                                >
                                    <option className='option' value=''>Select Event</option>
                                    <option className='option' value='CodeWars'>CodeWars</option>
                                    <option className='option' value='Ideathon'>Ideathon</option>
                                    <option className='option' value='Best out of GOODS'>Best out of GOODS</option>
                                    <option className='option' value='Android Artists'>Android Artists</option>
                                    <option className='option' value='Weaving the Web'>Weaving the Web</option>
                                    <option className='option' value='Drive the Bot'>Drive the Bot</option>
                                    <option className='option' value='Circuit-o-Mania'>Circuit-o-Mania</option>
                                    <option className='option' value='Data Science Visualization'>Data Science Visualization</option>
                                    <option className='option' value='Lathe wars'>Lathe wars</option>
                                    <option className='option' value='3D model design'>3D model design</option>
                                    <option className='option' value='Laser Cutting'>Laser Cutting</option>
                                    <option className='option' value='Al Model'>Al Model</option>
                                    <option className='option' value='Car parts assembly'>Car parts assembly</option>
                                    <option className='option' value='Laser tag'>Laser tag</option>
                                    <option className='option' value='Model testing Constructo'>Model testing Constructo</option>
                                    <option className='option' value='Model testing: Resilience'>Model testing: Resilience</option>
                                    <option className='option' value='Paint your Galaxy'>Paint your Galaxy</option>
                                    <option className='option' value='Hunting through the Cosmos'>Hunting through the Cosmos</option>
                                    <option className='option' value='Think Out-Of-The-Space'>Think Out-Of-The-Space</option>
                                    <option className='option' value='Finish and Level Up'>Finish and Level Up</option>
                                    <option className='option' value='Tech MUN'>Tech MUN</option>
                                    <option className='option' value='FloataRIG'>FloataRIG</option>
                                    <option className='option' value='Project Competition'>Project Competition</option>
                                </select>
                                <p className="error-msg">{errors.event && touched.event && errors.event}</p>
                                <button className="submit-btn" type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </form>
                        )}
                    </Formik>
                </div>
            </Fade >
        </div >
    )
}

export default RegistrationForm;