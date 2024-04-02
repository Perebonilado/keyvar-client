import * as yup from "yup";

export const SubscriptionFormValidation = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Please provide a valid email address"),
});
