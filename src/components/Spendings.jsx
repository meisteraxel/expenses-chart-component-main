import React from "react";
import "../style.css";
import data from "../assets/data.json";

function Spending() {
  return (
    <div className="spending-container">
      <h2>Spending - Last 7 days</h2>
      <div className="charts">
        {data.map((item) => (
          <div>
            <p>{item.day}</p>
            <div
              className="bar"
              style={{ height: `${item.amount * 5}px` }}
            ></div>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}

export default Spending;
