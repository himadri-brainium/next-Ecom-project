import React, { useState, useEffect } from "react";

import { useFormik } from 'formik';
import * as yup from 'yup'; // Since the schema can be defined independently

const FaqPage = () => {
  //main array of objects state
  const [pdata, setPdata] = useState([]); // On submitted Data store here

  //input field state
  const [ans, setAns] = useState("");
  const [qus, setQus] = useState("");
    //   Form validation state
    const [errors, setErrors] = useState({});
      //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");


  const submithandleData = (e) => {
    e.preventDefault(); // default behaviour

    //creating an object
    let myData = {
      ans,
      qus
    };

    setPdata([...pdata, myData]);      //myData set in pdata argument 

    setAns("");    // empty array
    setQus("");
   
  };

  //saving data in local storage 
  useEffect(() => {
  localStorage.setItem("pdata", JSON.stringify(pdata));}, [pdata] 
  );

    return (
        <>
            <h2>Faq Page</h2>
            <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
                <form className="w-50"  onSubmit={submithandleData} >
                    <div className="mb-3">
                          <label htmlFor="qus" className="form-label">
                          Qus
                          </label>
                          <input
                          type="text"
                          name="qus"
                          className="form-control"
                          placeholder="John Doe"
                          onChange={(e) => setQus(e.target.value)}
                          value={qus} 

                          />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="ans" className="form-label">
                        Ans
                        </label>
                        <textarea
                        name="ans"
                        className="form-control"
                        placeholder="Your message ..."
                        onChange={(e) => setAns(e.target.value)}
                        value={ans}
                        />
                        <div className="text-danger"></div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Send
                    </button>
                </form> 
              </div>

              {pdata.length > 0 && 
              <div className="view-container">
                <h1>Demo Content</h1>

                  <div className="col-12 table-responsive">
                    <table className="table">
                      <thead>
                        <tr class="bg-light">
                          <th>Qus</th>
                          <th>Ans</th>
                        </tr>
                      </thead>
                      <tbody>
                      {pdata.map((item, i) => (
                        <tr className="tableBody" key={i}>
                                <td>{item.ans}</td>
                                <td>{item.qus}</td>
                        </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
              </div>
              }
        </>
    )

}

export default FaqPage;
