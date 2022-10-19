import React, { useState, useRef } from 'react'
import { Formik, Form, Field } from 'formik';
import { Input, Button, Row, Col, Grid, Spacer, Textarea, Tooltip } from '@nextui-org/react';
import Fade from 'react-reveal/Fade';
import Navbar from '../Navbar/Navbar';
import dynamic from 'next/dynamic'
import { basicSchema } from './registrationSchema';
import { database } from '../firebase';
import firebase from '../firebase';
import Select from 'react-select';
import { useEffect } from 'react';

// const current_time = () => {
//     return new Date().toLocaleString();
// }

// const tech_data = [
//     {
//         value: '3D Model Design',
//         label: '3D Model Design'
//     },
//     {
//         value: 'AI Model',
//         label: 'AI Model'
//     },
//     {
//         value: 'Android Artists',
//         label: 'Android Artists'
//     },
//     {
//         value: 'Best out of Goods',
//         label: 'Best out of Goods'
//     },
//     {
//         value: 'Car parts Assembly',
//         label: 'Car parts Assembly'
//     },
//     {
//         value: 'Circuit-o-Mania',
//         label: 'Circuit-o-Mania'
//     },
//     {
//         value: 'Data Science Visualization',
//         label: 'Data Science Visualization'
//     },
//     {
//         value: 'FloataRIG',
//         label: 'FloataRIG'
//     },
//     {
//         value: 'Laser Cutting',
//         label: 'Laser Cutting'
//     },
//     {
//         value: 'Lathe Wars',
//         label: 'Lathe Wars'
//     },
//     {
//         value: 'Model testing: Constructo',
//         label: 'Model testing: Constructo'
//     },
//     {
//         value: 'Model testing: Resilience',
//         label: 'Model testing: Resilience'
//     },
//     {
//         value: 'Codes & Boards',
//         label: 'Codes & Boards'
//     },
//     {
//         value: 'Weaving the Web',
//         label: 'Weaving the Web'
//     },
//     {
//         value: 'Drive the Bot',
//         label: 'Drive the Bot'
//     }
// ]

// const non_tech_data = [
//     {
//         value: 'Ideathon',
//         label: 'Ideathon'
//     },
//     {
//         value: 'Laser Tag',
//         label: 'Laser Tag'
//     },
//     {
//         value: 'Paint Your Galaxy',
//         label: 'Paint Your Galaxy'
//     },
//     {
//         value: 'Think Out Of The Space',
//         label: 'Think Out Of The Space'
//     },
//     {
//         value: 'Hunting Through Cosmos',
//         label: 'Hunting Through Cosmos'
//     },
//     // {
//     //     value: 'Tech MUN',
//     //     label: 'Tech MUN',
//     //     disabled: true
//     // },
//     {
//         value: 'Finish and Level Up',
//         label: 'Finish and Level Up'
//     },
//     {
//         value: 'Project Competition',
//         label: 'Project Competition'
//     },
//     {
//         value: 'Oscillopattern',
//         label: 'Oscillopattern'
//     }
// ]


// const all_events_data = tech_data.concat(non_tech_data);

// const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
//     ssr: false
// });

// const RegistrationForm = () => {

//     async function sendData(data, setSubmitting) {
//         setSubmitting(true);
//         // Set current time
//         data.submission_time = current_time();
//         // Filter event names from Tech & Non-tech events
//         const temp_event_data = data.events;
//         var new_event_data = [];
//         for (var i = 0; i < temp_event_data.length; i++) {
//             new_event_data.push(temp_event_data[i].value);
//         }
//         // Set filtered events to original data values
//         data.events = new_event_data;
//         JSON.stringify(data.events);
//         // Sent data
//         await database.collection('new_responses').doc(data.id).set(data)
//             .then(alert('Response submitted!'))
//             .then(console.log(data)).then(setSelectedEvents(''))
//             .catch((e) => alert(e));
//     }
//     // const [selectedTech, setSelectedTech] = useState('');
//     // const [selectedNonTech, setSelectedNonTech] = useState('');
//     const [selectedEvents, setSelectedEvents] = useState('');
//     const [registrationFee, setRegistrationFee] = useState(0);
//     useEffect(() => {
//         const calculateFee = () => {
//             // var tech_fee = 0, non_tech_fee = 0;
//             // if (selectedTech.length < 3) {
//             //     tech_fee += selectedTech.length * 60;
//             // } else if (selectedTech.length % 3 < 3) {
//             //     tech_fee += (parseInt(selectedTech.length / 3) * 150) + (parseInt(selectedTech.length % 3) * 60)
//             // }
//             // if (selectedNonTech.length < 3) {
//             //     non_tech_fee += selectedNonTech.length * 60;
//             // } else if (selectedNonTech.length % 3 < 3) {
//             //     non_tech_fee += (parseInt(selectedNonTech.length / 3) * 150) + (parseInt(selectedNonTech.length % 3) * 60)
//             // }
//             const fee = selectedEvents.length >= 1 ? 100 : 0;
//             return fee;
//         }
//         setRegistrationFee(calculateFee());
//     }, [selectedEvents])
//     const id = firebase.firestore().collection('stack_over').doc().id
//     return (
//         <div>
//             <AnimatedCursor
//                 innerSize={15}
//                 outerSize={40}
//                 color='255, 255, 255'
//                 outerAlpha={0.2}
//                 innerScale={0.6}
//                 outerScale={2}
//                 trailingSpeed={7} />
//             <Navbar />
//             <Fade duration={2000} delay={300} small>
//                 <div>
//                     <Formik
//                         className='formik-form'
//                         initialValues={{ id: id, fullname: '', email: '', contact: '', college: '', identityNo: '', events: '', campusRef: '', registration_fee: '', group_details: '', submission_time: '' }}
//                         onSubmit={(values, { resetForm, setSubmitting }) => {
//                             const data = {
//                                 id: id,
//                                 fullname: values.fullname,
//                                 email: values.email,
//                                 contact: values.contact,
//                                 college: values.college,
//                                 identityNo: values.identityNo,
//                                 group_details: values.group_details,
//                                 // tech_event: selectedTech,
//                                 // non_tech_event: selectedNonTech,
//                                 events: selectedEvents,
//                                 campusRef: values.campusRef,
//                                 registration_fee: registrationFee,
//                                 submission_time: ''
//                             };
//                             sendData(data, setSubmitting);
//                             resetForm({ values: '' });
//                             handleReset();
//                         }}
//                         validationSchema={basicSchema}
//                     >
//                         {({
//                             values,
//                             errors,
//                             touched,
//                             handleChange,
//                             handleBlur,
//                             handleSubmit,
//                             isSubmitting,
//                         }) => (
//                             <Form className='form-container' onSubmit={handleSubmit} autoComplete="off">
//                                 {/* Student Name */}
//                                 <input
//                                     type="text"
//                                     name="fullname"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                     value={values.fullname}
//                                     placeholder="Full Name"
//                                     className='input-field'
//                                 />
//                                 <p className="error-msg">{errors.fullname && touched.fullname && errors.fullname}</p>
//                                 {/* Email */}
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                     value={values.email}
//                                     placeholder="Email"
//                                 />
//                                 <p className="error-msg">{errors.email && touched.email && errors.email}</p>
//                                 {/* Contact */}
//                                 <input
//                                     type="number"
//                                     name="contact"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                     value={values.contact}
//                                     placeholder="Contact Number"
//                                 />
//                                 <p className="error-msg">{errors.contact && touched.contact && errors.contact}</p>
//                                 {/* College */}
//                                 <input
//                                     type="text"
//                                     name="college"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                     value={values.college}
//                                     placeholder="College"
//                                 />
//                                 <p className="error-msg">{errors.college && touched.college && errors.college}</p>
//                                 {/* IdentityNo */}
//                                 <input
//                                     type="text"
//                                     name="identityNo"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                     value={values.identityNo}
//                                     placeholder="PRN (College ID)"
//                                 />
//                                 <p className="error-msg">{errors.identityNo && touched.identityNo && errors.identityNo}</p>
//                                 {/* Group Details */}
//                                 <input
//                                     type="text"
//                                     name="group_details"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                     value={values.group_details}
//                                     placeholder="Group Name (Only for Team Registrations)"
//                                 />
//                                 <p className="error-msg">{errors.group_details && touched.group_details && errors.group_details}</p>
//                                 {/* Referal Number */}
//                                 <input
//                                     type="text"
//                                     name="campusRef"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                     value={values.campusRef}
//                                     placeholder="Campus Ambassador Referral Number (Optional)"
//                                 />
//                                 <p className="error-msg">{errors.campusRef && touched.campusRef && errors.campusRef}</p>
//                                 {/* Technical Events */}
//                                 {/* <Select
//                                     className="multi-select"
//                                     name="multiTech"
//                                     options={tech_data}
//                                     // component={Select}
//                                     placeholder="Select Technical Events"
//                                     isMulti={true}
//                                     onChange={(e) => { setSelectedTech(e) }}
//                                     value={selectedTech}
//                                 />
//                                 <p className="error-msg">{errors.tech_event && touched.tech_event && errors.tech_event && selectedTech.length <= 2 && 'Select atleast 3 tech events'}</p>
//                                 <p className='event-heading'>Non-Technical Events</p> */}
//                                 {/* Non Technical Events */}
//                                 {/* <Field
//                                     className="multi-select"
//                                     name="multiNonTech"
//                                     options={non_tech_data}
//                                     component={Select}
//                                     placeholder="Select Non Technical Events"
//                                     isMulti={true}
//                                     onChange={(e) => { setSelectedNonTech(e) }}
//                                     value={selectedNonTech}
//                                 />
//                                 <p className="error-msg">{errors.non_tech_event && touched.non_tech_event && errors.non_tech_event && selectedNonTech.length <= 1 && 'Select atleast 2 non-tech events'}</p> */}
//                                 <p className='event-heading'>Select Events</p>
//                                 {/* Select Events */}
//                                 <Field
//                                     className="multi-select"
//                                     name="multiNonTech"
//                                     options={all_events_data}
//                                     component={Select}
//                                     placeholder="Select Events"
//                                     isMulti={true}
//                                     onChange={(e) => { setSelectedEvents(e), console.log(selectedEvents); }}
//                                     value={selectedEvents}
//                                     isOptionDisabled={(e) => selectedEvents.length >= 5 ? true : false}
//                                 />
//                                 <p className='registration-fee'>{"Registration Fee: ₹" + registrationFee}</p>
//                                 <p className='caption'>{selectedEvents.length >= 5 && "Max. 5 events at a time. If you want to register in more than 5, submit the form again."}</p>
//                                 <button className="submit-btn" type="submit" disabled={isSubmitting}>
//                                     Submit
//                                 </button>
//                             </Form>
//                         )}
//                     </Formik>
//                 </div>
//             </Fade >
//         </div >
//     )
// }

const RegistrationForm = () => {
    return (
        <>
            <Navbar />
            <div className='registrations-closed'>Registrations are closed for SymbiTech'22. See you next year!</div>
        </>
    )
}

export default RegistrationForm;