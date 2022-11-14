import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useRouter } from "next/router";
import Link from "next/link";

const validSchema = yup.object({
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Minimum eight characters, at least one letter and one number"
    )
    .required("Password is required"),

  confirmpassword: yup
    .string()
    .required("Please retype your password")
    .oneOf([yup.ref("password")], "Your password do not match"),
});
const Resetpassword = () => {
  const router = useRouter();
  return (
    <>
      <h2>Reset Your Password</h2>
      <br />
      <br />
      <Formik
        validationSchema={validSchema}
        initialValues={{
          password: "",
          confirmpassword: "",
        }}
        onSubmit={(values, { resetForm }) => {
          const getuserarr = localStorage.getItem("User data");
          alert(
            "Password change is succcessfull, you are redirect to login page"
          );
          //console.log(values)
          const { password } = values;
          const userdata = JSON.parse(getuserarr);

          userdata.password = password;

          console.log(password);

          localStorage.setItem("User data", JSON.stringify(userdata));

          router.push("/components/loginformik");

          resetForm({ values: "" });
        }}
      >
        <Form>
          <label>Password</label>
          <Field name="password" type="password" />
          <br />
          <ErrorMessage name="password" />
          <br />
          <label>Conform Password</label>
          <Field name="confirmpassword" type="password" />
          <br />
          <ErrorMessage name="confirmpassword" />
          <br />

          <button type="submit">Save</button>
        </Form>
      </Formik>
    </>
  );
};

export default Resetpassword;