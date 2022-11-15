import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const Update = () => {
  const [id, setID] = useState(0);
// const [application, setApplication] = useState(true);
 const [date, setDate] = useState("");
 const [reason, setReason] = useState("");
  //const [reportinghead, setReportinghead] = useState("")

  const router = useRouter();

  useEffect(() => {
    setID(localStorage.getItem("Id")),
    //setApplication(localStorage.getItem("Application")),
    setDate(localStorage.getItem("Date"));
    setReason(localStorage.getItem("Reason"));
    //setReportinghead(localStorage.getItem("Reporting Head"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(id);

    axios
      .put(`https://636deabdb567eed48accca4e.mockapi.io/EmployeePortal/${id}`, {
      date:date,
      reason:reason

      })
      .then(() => {
        router.push("/components/Read1");
      });
  };

  return (
    <>
      <h2>Employee Update form</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Aplication Date :</label>
          <input
            type="date"
            name="date"
            className="form-control"
             value={date}
             onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Reason</label>
          <input
            name="reason"
            type="textarea"
            className="form-control"
             value={reason}
             onChange={(e) =>setReason(e.target.value)}
          />
        </div>

        <div>
          <label className="form-label">
            <h5>Aplication For :</h5>
          </label>
          <br/>
          <input type="radio"  name="apli" value="Full Leave"  />
          <label>Full Day Leave</label>
          <br />
          <input type="radio" name="apli" value="Work From Home" />
          <label>Work From Home</label>
          <br />
          <input type="radio" name="apli" value="Half Leave"/>
          <label>Half Day Leave</label>

          <br />
          <input type="radio" name="apli" value="Extra WOrk"/>
          <label>Extra Work</label>
          <br />
          <br />
        </div>



      <div>
      <label>
            <h5>Select Reporting Head :</h5>
          </label>

          <select name="rh" >
          <option>Select Repoting Head</option>
            <option value="Mr. Reporting Head1">Mr. Reporting Head1</option>
            <option value="Mr. Reporting Head2">Mr. Reporting Head2</option>
            <option value="Mr. Reporting Head3">Mr. Reporting Head3</option>
  </select>
      </div>


        <button
          type="submit"
          className="btn btn-primary"
           onClick={handleUpdate}
        >
          Update
        </button>
      </form>
    </>
  );
};

export default Update;
