import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link"
const Details = () => {
  const router = useRouter();

  const [logindata, setLogindata] = useState([]);
  console.log("from state", logindata);
  const Matchdata = () => {
    const getuser = localStorage.getItem("User_all_data");

    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);

      console.log(user);
      setLogindata(user);
    }
  };

  const userlogout = () => {
    localStorage.removeItem("User_all_data");
    router.push("/components/loginformik");
  };

  useEffect(() => {
    Matchdata();
  }, []);


  const handleAplication=()=>{

    router.push("/components/Create")
  }   
  return (
    <>
      {logindata.length === 0 ? (
        "errror"
      ) : (
        <>
          <h1>Welcome {logindata.name}</h1>
          <button className="btn btn-warning" onClick={handleAplication}>My Aplication</button> <br/><br></br>
          <button onClick={userlogout} className="btn btn-danger">Logout</button>
        </>
      )}
    </>
  );
};

export default Details;
