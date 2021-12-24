import * as yup from "yup";

export const validationSchema = yup.object({
  location: yup.string()
    .required('Location is required')
    .max(150, 'Location is too long'),  
}).required();