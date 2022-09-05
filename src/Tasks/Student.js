import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Studentdetail from "./Studentdetail";

const Student = () => {
  const [student, setStudent] = useState([]);
  const API = `Https://hamzakhan2121.github.io/jsonapi/student.json`;

  const fetchStudent = async (url) => {
    try {
      const request = await fetch(url);
      const response = await request.json();
      console.log(response.Student);
      setStudent(response.Student);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStudent(API);
  }, []);

  return (
    <section>
      <h1> Task : 02 </h1>
      <h style={{ marginLeft: "20rem" }}>
        <strong>Students</strong>
      </h>

      {student.map((current) => {
        return (
          <div key={current.ID} className="students">
            <br />
            <h>{`${current.FirstName} ${current.LastName}`}</h>
            <br />
            <h>Age : {current.Age}</h>
            <br />
            <h> Gender : {current.Gender}</h>
            <br />
            <h> Grade : {current.Grade}</h>
            <br />
            <h> City : {current.address.City}</h>
            <br />
            <h> City : {current.address.State}</h>
            <br />
            <h> City : {current.address.street}</h>

            <br />

            <br />
            <br />
          </div>
        );
      })}
      <NavLink
        to={"/Detail"}
        style={{
          textDecoration: "none",
          marginLeft: "20rem",
          backgroundColor: "green",
          color: "white",
          padding: "0.3rem",
          borderRadius: "0.1rem",
        }}
      >
        Detail
      </NavLink>
    </section>
  );
};

export default Student;
