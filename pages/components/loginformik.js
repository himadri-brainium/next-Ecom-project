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
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Minimum eight characters, at least one letter and one number"
    )
    .required("Password is required"),
});

//Main component
const Loginformik = () => {
  const router = useRouter();
  return (
    <>
      <h1>Login Page</h1>

      <Formik
        validationSchema={validSchema}
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, { resetForm }) => {
          const getuserarr = localStorage.getItem("User data");

          if (getuserarr) {
            const { email, password } = values;

            if (getuserarr && getuserarr.length) {
              const userdata = JSON.parse(getuserarr);

              const userlogin =
                userdata.email === email && userdata.password === password;
              console.log(userlogin);

              if (!userlogin) {
                alert("Invalid Details");
              } else {
                {
                  alert("user login successfully");
                }

                localStorage.setItem("User_all_data", JSON.stringify(userdata));
                router.push("/components/details");
              }
            }
          } else {
            alert("You are not registered, Please register first")
            router.push("/components/register");
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

          <label>Password</label>
          <Field name="password" type="password" />
          <br />
          <ErrorMessage name="password" />
          <br />

          <button type="submit">Login</button>
          <br /><br />

          <p>If you have no account, then Register First</p>

          <Link href="/components/register">
            <button type="submit">Register</button>
          </Link>
          <br /><br />
          <span>
            <Link href="/components/forgotpassword">Click if you forgot your password</Link>
          </span>
        </Form>
      </Formik>
    </>
  );
};

export default Loginformik;
