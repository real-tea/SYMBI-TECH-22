import React, { useState, useRef } from 'react'
import { Formik, Form, Field } from 'formik';
import { Input, Button, Row, Col, Grid, Spacer, Textarea, Tooltip } from '@nextui-org/react';
import Fade from 'react-reveal/Fade';
import Navbar from '../Navbar/Navbar';
import dynamic from 'next/dynamic'
import { basicSchema } from './registrationSchema';
import { database } from '../firebase';
import Select from 'react-select';

const tech_data = [
    {
        value: 'CodeWars',
        label: 'CodeWars'
    },
    {
        value: 'Ideathon',
        label: 'Ideathon'
    },
    {
        value: 'Best out of GOODS',
        label: 'Best out of GOODS'
    },
    {
        value: 'Android Artists',
        label: 'Android Artists'
    },
    {
        value: 'Weaving the Web',
        label: 'Weaving the Web'
    },
    {
        value: 'Drive the Bot',
        label: 'Drive the Bot'
    },
    {
        value: 'Circuit-o-Mania',
        label: 'Circuit-o-Mania'
    },
    {
        value: 'Data Science Visualization',
        label: 'Data Science Visualization'
    },
    {
        value: 'Lathe wars',
        label: 'Lathe wars'
    },
    {
        value: '3D model design',
        label: '3D model design'
    },
    {
        value: 'Laser Cutting',
        label: 'Laser Cutting'
    },
    {
        value: 'Al Model',
        label: 'Al Model'
    },
    {
        value: 'Car parts assembly',
        label: 'Car parts assembly'
    },
    {
        value: 'Laser tag',
        label: 'Laser tag'
    },
    {
        value: 'Model testing Constructo',
        label: 'Model testing Constructo'
    },
    {
        value: 'Model testing: Resilience',
        label: 'Model testing: Resilience'
    },
    {
        value: 'Paint your Galaxy',
        label: 'Paint your Galaxy'
    },
    {
        value: 'Hunting through the Cosmos',
        label: 'Hunting through the Cosmos'
    }
]

const non_tech_data = [
    {
        value: 'Think Out-Of-The-Space',
        label: 'Think Out-Of-The-Space'
    },
    {
        value: 'Finish and Level Up',
        label: 'Finish and Level Up'
    },
    {
        value: 'Tech MUN',
        label: 'Tech MUN'
    },
    {
        value: 'FloataRIG',
        label: 'FloataRIG'
    },
    {
        value: 'Project Competition',
        label: 'Project Competition'
    }
]

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
});

const RegistrationForm = () => {
    async function sendData(data, setSubmitting) {
        setSubmitting(true);
        await database.collection('responses').doc(`${data.fullname}_${data.contact}_${data.identityNo}`).set(data)
            .then(alert('Response submitted!'))
            .then(console.log(data)).then(setSelectedNonTech('')).then(setSelectedTech(''))
            .catch((e) => alert(e));
    }
    const [selectedTech, setSelectedTech] = useState('');
    const [selectedNonTech, setSelectedNonTech] = useState('');
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
                        initialValues={{ fullname: '', email: '', contact: '', college: '', identityNo: '', tech_event: '', non_tech_event: '', campusRef: '' }}
                        onSubmit={(values, { resetForm, setSubmitting }) => {
                            const data = {
                                fullname: values.fullname,
                                email: values.email,
                                contact: values.contact,
                                college: values.college,
                                identityNo: values.identityNo,
                                tech_event: JSON.stringify(selectedTech),
                                non_tech_event: JSON.stringify(selectedNonTech),
                                campusRef: values.campusRef
                            };
                            if (selectedNonTech.length < 2 || selectedTech.length < 3) {
                                alert('Select atleast 3 tech and 2 non-tech events');
                                setSubmitting(false);
                            } else {
                                sendData(data, setSubmitting);
                                resetForm(values);
                                handleReset();
                            }
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
                            <Form className='form-container' onSubmit={handleSubmit} autoComplete="off">
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
                                    placeholder="PRN (College ID)"
                                />
                                <p className="error-msg">{errors.identityNo && touched.identityNo && errors.identityNo}</p>
                                {/* Referal Number */}
                                <input
                                    type="text"
                                    name="campusRef"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.campusRef}
                                    placeholder="Campus Ambassador Referral Number (Optional)"
                                />
                                <p className="error-msg">{errors.campusRef && touched.campusRef && errors.campusRef}</p>
                                <p className='event-heading'>Technical Events (min.3)</p>
                                {/* Technical Events */}
                                <Field
                                    className="multi-select"
                                    name="multiTech"
                                    options={tech_data}
                                    component={Select}
                                    placeholder="Select Technical Events (min. 3)"
                                    isMulti={true}
                                    onChange={(e) => { setSelectedTech(e) }}
                                />
                                <p className="error-msg">{errors.tech_event && touched.tech_event && errors.tech_event && selectedTech.length <= 2 && 'Select atleast 3 tech events'}</p>
                                <p className='event-heading'>Non-Technical Events (min. 2)</p>
                                {/* Non Technical Events */}
                                <Field
                                    className="multi-select"
                                    name="multiNonTech"
                                    options={non_tech_data}
                                    component={Select}
                                    placeholder="Select Non Technical Events (min. 2)"
                                    isMulti={true}
                                    onChange={(e) => { setSelectedNonTech(e) }}
                                />
                                <p className="error-msg">{errors.non_tech_event && touched.non_tech_event && errors.non_tech_event && selectedNonTech.length <= 1 && 'Select atleast 2 non-tech events'}</p>
                                <button className="submit-btn" type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </Fade >
        </div >
    )
}

export default RegistrationForm;