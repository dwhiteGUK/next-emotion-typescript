import * as yup from "yup";

export const validationSchema = yup.object({
  firstName: yup.string()
    .required('First name is required')
    .max(80, 'First name is too long'),
  lastName: yup.string()
    .required('Last name is required')
    .max(80, 'Last name is too long'),
  email: yup.string()
    .required('Email address is required')
    .max(200, 'Email address is too long')
    .matches(
      /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
      {
        message: 'Email address is not valid',
        excludeEmptyString: true
      }
    ),    
  telephone: yup.string()
    .required('Contact number is required')
    .matches(
      /^(\(?\+?[0-9]*\)?)?[0-9_\- ()]*$/,
      'Contact number is not valid'
    ),    
  organization: yup.string()
    .required('Company name is required')
    .max(80, 'Company name is too long'),
  enquiryType: yup.string()
      .required('Enquiry type is required')
}).required();