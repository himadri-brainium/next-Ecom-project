import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import axios from 'axios'
import { useRouter } from 'next/router'

const Create = () => {




      //Input field validation
      const validSchema = yup.object({

            apli: yup.string().required("***Please enter your Aplication"),
            date: yup.date().required("***Please enter Date "),
            rh: yup.string().required("***Please Select your Reporting Head"),
            reason: yup
                  .string()
                  .min(8, "***Too small string")
                  .max(100, "***Too Large string")
                  .required("***Please enter your details"),
      });

      
     
      const router =useRouter()
      //Form Component
      return (
            <>
                  <Formik
                 
                        validationSchema={validSchema}
                        initialValues={{

                              apli: "",
                              date: "",
                              rh: "",
                              reason: "",
                        }}
                        onSubmit={(values, { resetForm }) => {
                              
                              // console.log(values);
                              localStorage.setItem("Empdata", JSON.stringify(values));
                              resetForm({ values: "" });
                              // console.log(values.apli)
                              const header = { "Access-Control-Allow-Origin": "*" }
                           
                              axios.post(
                                    'https://636deabdb567eed48accca4e.mockapi.io/EmployeePortal', {
                                    date: (values.date),
                                    aplication: (values.apli),
                                    reporting_head: (values.rh),
                                    reason: (values.reason),

                                    header
                              },

                              )
                              .then(()=>{
                                    router.push('/components/Read')
                              })
                        
                        }}

                  >
                        <Form>
                              <h1>Employee Form</h1>
                              <br />
                              <label><h5> Aplication Date :</h5></label>
                              <Field name="date" type="date" className='form-control' />
                              <ErrorMessage name="date" />
                              <br />
                              <label><h5>Reason :</h5></label>
                              <Field name="reason" as="textarea" className='form-control' />
                              <ErrorMessage name="reason" />
                              <br />

                              <label><h5>Aplication For :</h5></label>
                              <br />
                              <Field name="apli" value="Full Leave" type="radio" />
                              <label>Full Day Leave</label><br />
                              <Field name="apli" value="Work From Home" type="radio" />
                              <label>Work From Home</label><br />
                              <Field name="apli" value="Half Leave" type="radio" />
                              <label>Half Day Leave</label><br />
                              <Field name="apli" value="Extra WOrk" type="radio" />
                              <label>Extra Work</label><br />
                              <br />
                              <ErrorMessage name="apli" />

                              <br />
                              <label><h5>Select Reporting Head :</h5></label>
                              <Field name="rh" as="select" >
                                    <option>Select Repoting Head</option>
                                    <option value="Mr. Reporting Head1">Mr. Reporting Head1</option>
                                    <option value="Mr. Reporting Head2">Mr. Reporting Head2</option>
                                    <option value="Mr. Reporting Head3">Mr. Reporting Head3</option>
                              </Field>
                              <br />
                              <ErrorMessage name="rh" />
                              <br />
                              <br />

                              <button type='submit' className='btn btn-success' > Submit</button>

                                    
                        </Form>
                  </Formik>
            </>
      )
}

export default Create
