import React, { useState, useEffect } from "react";

const Studentdetail = () => {
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
      <h1>Student Detail</h1>

      <table>
        <tr>
          <th>ID :</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Age</th>
          <th>Gender</th>
          <th>City</th>
          <th>State</th>
          <th>Street</th>
        </tr>
        {student.map((current) => {
          return (
            <tr key={current.ID}>
              <td>{current.ID}</td>
              <td>{current.FirstName}</td>
              <td>{current.LastName}</td>
              <td>{current.Age}</td>
              <td>{current.Gender}</td>
              <td>{current.address.City}</td>

              <td>{current.address.State}</td>
              <td>{current.address.street}</td>
            </tr>
          );
        })}
      </table>
    </section>
  );
};

export default Studentdetail;
