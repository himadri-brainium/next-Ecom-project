import axios from 'axios'
import Link from 'next/link'

import React, { useEffect, useState } from 'react'

const Read = () => {

      const [data, setStore] = useState([]) //To store the data which we get from api as a array 
      const [tabledark, setTabledark] = useState('') //For toggling with dark mode

      function getData() {
            axios.get('https://636deabdb567eed48accca4e.mockapi.io/EmployeePortal')
                  .then((res) => {
                        // console.log(res.data)
                        setStore(res.data)
                  }

                  )
      }
      useEffect(() => {

            getData()
      }, [])  //whenever data is changed useeffect works 




  return (
    <div>
      <h1>Employee Details</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Aplication For</th>
            <th scope="col">Current Date</th>
            <th scope="col">Reason</th>
            <th scope="col">Apply Date</th>
            <th scope="col">Reporting Head</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {data.map((accessData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{accessData.id}</th>
                  <td>{accessData.date}</td>
                  <td>{accessData.aplication}</td>
                  <td>{accessData.reporting_head}</td>
                  <td>{accessData.date}</td>
                  <td>{accessData.reason}</td>
                  <td>
                    <button className="btn btn-success">Edit</button>
                  </td>
                  <td scope="col">
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => handelDelete(accessData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
      )
}

export default Read
