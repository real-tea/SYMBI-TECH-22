import * as yup from 'yup';

export const basicSchema = yup.object().shape({
    fullname: yup.string().required('*Required'),
    email: yup.string().email('*Please enter a valid email').required('*Required'),
    contact: yup.string().required('*Required'),
    college: yup.string().required('*Required'),
    identityNo: yup.string().required('*Required'),
    group_details: yup.string()
});