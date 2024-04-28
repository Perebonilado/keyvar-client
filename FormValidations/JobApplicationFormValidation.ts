import * as yup from "yup";

export const JobApplicationFormValidation = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Please provide a valid email address"),
  experience: yup
    .string()
    .required("Please provide valid information about your experience"),
  phone: yup.string().required("Phone number is required"),
});
