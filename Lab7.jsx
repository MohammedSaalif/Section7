import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Lab7.css";



export const Lab7 = () => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/unknown")
      .then((res) => {
        setResult(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h2>Color List</h2>
      {result ? (
        <table border={1}>
          <thead>
            <tr style={{ textAlign: "center", fontWeight: "bold", backgroundColor: "yellow" }}>
              <td>ID</td>
              <td>Name</td>
              <td>Year</td>
              <td>Color</td>
              <td>Pantone Value</td>
            </tr>
          </thead>
          <tbody>
            {result.map((element) => (
              <tr key={element.id} style={{ backgroundColor: element.color, color: "#fff" }}>
                <td>{element.id}</td>
                <td>{element.name}</td>
                <td>{element.year}</td>
                <td>{element.color}</td>
                <td>{element.pantone_value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

