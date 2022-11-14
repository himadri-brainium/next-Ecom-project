import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useRouter } from "next/router";
import Link from "next/link";

//Validation of input fields
const validSchema = yup.object({
  email: yup
    .string()
    .matches(
      /^([a-z\d\.]+)@([a-z\d-]+)\.([a-z]{2,8})$/,
      "Email is in not valid match"
    )
    .required("please enter your email"),
});

const Forgotpassword = () => {
    const router = useRouter();
  return (
    <>
      <h1> forgot password form</h1>

      <Formik
        validationSchema={validSchema}
        initialValues={{
          email: "",
        }}
        onSubmit={(values, { resetForm }) => {
          const getuserarr = localStorage.getItem("User data");

          if (getuserarr) {
            const { email } = values;

            if (getuserarr && getuserarr.length) {
              const userdata = JSON.parse(getuserarr);

              const userlogin = userdata.email === email;
              console.log(userlogin);

              if (!userlogin) {
                alert("Invalid email id is provided ");
              } else {
                {
                  alert("Password reset email is send, please check your email");
                  console.log(email);
                  router.push("/components/resetpassword");
                }
              }
            }
          }
          resetForm({ values: "" });
        }}
      >
        <Form>
          <label>Email</label>
          <Field name="email" type="email" />
          <br />
          <ErrorMessage name="email" />
          <br />
          <br />

          <button type="submit">Send</button>
        </Form>
      </Formik>
    </>
  );
};

export default Forgotpassword;