import * as Yup from "yup";
import InnerPageBanner from "../../components/innerPageBanner/InnerPageBanner";
import bannerImage from "../../images/contactBanner.png";
import arrow from "../../images/submitArrow.svg";
import PageTitle from "../../components/pageTitle/PageTitle";
import formImage from "../../images/careerFormImg.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./career.scss";
import uploadIcon from "../../images/uploadFile.svg";
import { useState } from "react";

const Career = () => {
  const [uplpadedFileName, setUploadedFileName] = useState("");

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    name: Yup.string().required("Name is required"),
    phone: Yup.number().required("Phone number is required"),
    message: Yup.string().required("Message is required"),
    image: Yup.mixed().required("File is required"),
  });

  return (
    <>
      <PageTitle
        pageTitle={"Ahmedabad - Solar Panel Manufacturing Company | Raaj Solar"}
      />
      <div className="career">
        <InnerPageBanner heading={"Career"} image={bannerImage} />
        <div className="careerForm">
          <div className="contactUsForm">
            <div className="form-section">
              <h2 className="contactformtitle">How To Reach US</h2>

              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  phone: "",
                  image: "",
                  message: "",
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                  try {
                    const formData = new FormData();
                    formData.append("name", values.name);
                    formData.append("email", values.email);
                    formData.append("phone", values.phone);
                    formData.append("image", values.image);
                    formData.append("message", values.message);
                    console.log("Form Data", formData);
                    console.log("file", values.image.name);
                    const response = await fetch(
                      "http://localhost:8000/sendmail",
                      {
                        method: "POST",
                        body: formData,
                      }
                    );

                    console.log(formData);
                    console.log("response", response);
                  } finally {
                    setSubmitting(false);
                    resetForm();
                    document.getElementById("formFile").value = "";
                  }
                }}
              >
                {({ isSubmitting, setFieldValue, handleChange }) => (
                  <Form>
                    <div className="contactFormField">
                      <Field
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="error"
                      />
                    </div>

                    <div className="contactFormField">
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="contactFormField">
                      <Field
                        type="number"
                        name="phone"
                        placeholder="Phone"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="contactFormField fileFiled">
                      <div className="fileIconWithText">
                        <input
                          type="file"
                          name="image"
                          onChange={(event) => {
                            setFieldValue(
                              "image",
                              event.currentTarget.files[0]
                            );
                            setUploadedFileName(
                              event.currentTarget.files[0].name
                            );
                          }}
                          className="uploadFile"
                          id="formFile"
                        />
                        <p>{uplpadedFileName === "" ? "Upload File" : uplpadedFileName }</p>
                      </div>
                      <ErrorMessage
                        name="image"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="contactFormField">
                      <Field
                        type="text"
                        name="message"
                        placeholder="Message"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="error"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-block btn-danger"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending Message..." : "Send Message"}
                      <img src={arrow} alt="submitArrow" />
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className="image">
            <img src={formImage} alt="careerFormImage" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
