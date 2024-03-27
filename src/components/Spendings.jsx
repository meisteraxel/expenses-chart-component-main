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
            <div className="popup">
              <p>${item.amount}</p>
            </div>
            <div
              className="bar"
              style={{ height: `${item.amount * 2}px` }}
            ></div>
          </div>
        ))}
      </div>
      <div className="days">
        {data.map((item) => (
          <p>{item.day}</p>
        ))}
      </div>
      <hr />
    </div>
  );
}

export default Spending;
