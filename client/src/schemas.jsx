import * as Yup from "yup";
export const FormSchemas = Yup.object({
  name: Yup.string().required("Full name is required"),
  message: Yup.string().required("Message is required"),
  email: Yup.string().email().required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  select: Yup.string().required("Select option"),
});

export const ProductFormSchemas = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  message: Yup.string().required("Message is required"),
  email: Yup.string().email().required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  selectOption: Yup.string().required("Required"),
});

export const ContactSchema = Yup.object({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .min(10, "Phone number too short!")
    .required("Phone number is required"),
  file: Yup.string().required("Select file"),
  message: Yup.string().min(5, "Message too short!").required("Required"),
});
