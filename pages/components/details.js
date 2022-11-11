import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
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

  return (
    <>
      {logindata.length === 0 ? (
        "errror"
      ) : (
        <>
          <h1>Welcome {logindata.name}</h1>
          <button className="btn btn-primary">My Aplication</button> <br/><br></br>
          <button onClick={userlogout} className="btn btn-danger">Logout</button>
        </>
      )}
    </>
  );
};

export default Details;
