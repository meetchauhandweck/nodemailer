import { useFormik } from "formik";
import Select from "react-select";
import { FormSchemas } from "../../schemas";
import { useState } from "react";
const ProductFormItem = () => {
  const [resetSelect, setResetSelect] = useState(null);
  const [submitBtn, setSubmitBtn] = useState(false);
  console.log("btn", submitBtn);
  const initialValue = {
    name: "",
    email: "",
    phone: "",
    message: "",
    select: "",
  };
  const options = [
    { value: "business inquiry", label: "Business Inquiry" },
    { value: "product inquiry", label: "Product inquiry" },
    { value: "feedback", label: "Feedback" },
    { value: "other", label: "Other" },
  ];
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValue,
    validationSchema: FormSchemas,
    onSubmit: (value, action) => {
      console.log("value", value);
      setSubmitBtn(true);
      const sendEmail = async () => {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("phone", values.phone);
        formData.append("select", values.select);
        formData.append("message", values.message);
        console.log(formData);

        const res = await fetch(`http://localhost:8000/secondmail`, {
          method: "POST",
          body: formData,
        });

        console.log("responsive", res);
        if (res.status === 200) {
          setResetSelect(null);
          action.resetForm();
          setSubmitBtn(false);
        }
      };
      sendEmail();
    },
  });
  console.log(values);
  return (
    <div className="contact_form second">
      <div className="contact_form_wrapper">
        <h2 style={{ color: "#0D4292" }}>HOW TO REACH US</h2>
        <form onSubmit={handleSubmit}>
          <div className="form_wrapper">
            <div className="field">
              <input
                type="name"
                name="name"
                onChange={handleChange}
                value={values.name}
                placeholder="Full Name"
              />
              {touched.name && errors.name && (
                <p className="error">{errors.name}</p>
              )}
            </div>
            <div className="field">
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
                placeholder="Email"
              />
              {touched.email && errors.email && (
                <p className="error">{errors.email}</p>
              )}
            </div>
            <div className="field">
              <input
                type="text"
                name="phone"
                onChange={handleChange}
                value={values.phone}
                placeholder="Phone Number"
              />
              {touched.phone && errors.phone && (
                <p className="error">{errors.phone}</p>
              )}
            </div>
            <div className="field">
              <Select
                options={options}
                value={resetSelect}
                onChange={(option) => {
                  let event = {
                    target: {
                      name: "select",
                      label: option.label,
                      value: option ? option.label : "",
                    },
                  };
                  setResetSelect(option);
                  handleChange(event);
                }}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: "#d1d1d1",
                    primary: "#d1d1d1",
                  },
                })}
              />
            </div>
            {touched.select && errors.select && (
              <p className="error">{errors.select}</p>
            )}
            {errors.color && (
              <div className="input-feedback">{errors.color}</div>
            )}

            <div className="field">
              <input
                type="text"
                name="message"
                onChange={handleChange}
                value={values.message}
                placeholder="Message"
                // style={{ paddingTop: "70px" }}
                className="message_field"
              />
              {touched.message && errors.message && (
                <p className="error">{errors.message}</p>
              )}
            </div>
          </div>
          <div className="common_button_outer2">
            <button type="submit" className="submit_btn">
              {submitBtn ? "Sending Message..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ProductFormItem;
