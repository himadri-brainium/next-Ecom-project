import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Link from "next/link";

//Input field validation
const validSchema = yup.object({
  name: yup.string().required("Please enter your name"),
  phone: yup
    .number()
    .min(1000000000, "not valid phone number")
    .max(9999999999, "not valid phone number")
    .required("Please enter phone number"),

  email: yup
    .string()
    .matches(
      /^([a-z\d\.]+)@([a-z\d-]+)\.([a-z]{2,8})$/,
      "Email is in not valid match"
    )
    .required("please enter your email"),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Minimum eight characters, at least one letter and one number"
    )
    .required("Password is required"),

  confirmpassword: yup
    .string()
    .required('Please retype your password.')
    .oneOf([yup.ref('password')], 'Your passwords do not match.'),

  gender: yup.string().required("Please enter Gender"),
  date: yup.date().required("Please enter your DOB"),
  post: yup.string().required("Please enter your post"),
  about: yup
    .string()
    .min(20, "Too small string")
    .max(30, "Too Large string")
    .required("Please enter your details"),

});

//Main component
const Register = () => {
  return (
    <>
      <h1>Register Page</h1>

      <Formik
        validationSchema={validSchema}
        initialValues={{
          name: "",
          phone: "",
          email: "",
          password: "",
          gender: "",
          date: "",
          post: "",
          about: "",
        }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          localStorage.setItem("User data", JSON.stringify(values));
          // router.push("/components/loginformik");
          resetForm({ values: "" });
        }}
      >
        <Form>
          <label>Name</label>
          <Field name="name" type="text" />
          <br />
          <ErrorMessage name="name" />
          <br />
          <label>Phone</label>
          <Field name="phone" type="number" />
          <br />
          <ErrorMessage name="phone" />
          <br />
          <label>Email</label>
          <Field name="email" type="email" />
          <br />
          <ErrorMessage name="email" />
          <br />
          <label>Password</label>
          <Field name="password" type="password" />
          <br />
          <ErrorMessage name="password" />
          <br />
          <label>Confirm Password</label>
          <Field name="confirmpassword" type="password"
            placeholder="confirm your password..." />
          <span><ErrorMessage name="confirmpassword" /></span><br/>
          <label>Gender</label>
          <br />
          <label>Male</label>
          <Field name="gender" value="male" type="radio" />
          <label>Female</label>
          <Field name="gender" value="female" type="radio" />
          <br />
          <ErrorMessage name="gender" />
          <br />
          <label>Date of Birth</label>
          <Field name="date" type="date" />
          <br />
          <ErrorMessage name="date" />
          <br />
          <label>Select Position </label>
          <Field name="post" as="select">
            <option>Select from here</option>
            <option value="T">Trainee</option>
            <option value="JR">Jr software developer</option>
            <option value="SR">Sr software developer</option>
          </Field>
          <br />
          <ErrorMessage name="post" />
          <br />
          <label>About</label>
          <Field name="about" as="textarea" />
          <br />
          <ErrorMessage name="about" />
          <br />
          <button type="submit">Submit</button>
          <br /><br />
          <p> If you already Have an Account</p>{" "}
          <span>
            <Link href="/components/loginformik">Log In</Link>
          </span>
        </Form>
      </Formik>
    </>
  );
};

export default Register;
