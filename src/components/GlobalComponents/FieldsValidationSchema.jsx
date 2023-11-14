// LoginFormValidation.jsx
// Not Yet Done
import * as Yup from "yup";

export const FieldsValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const initialValues = {
  email: "",
  password: "",
};

export const onSubmit = (values, { resetForm }) => {
  // Handle the form submission logic here
  console.log("Form submitted with values:", values);
  // You can reset the form after successful submission
  resetForm();
};
