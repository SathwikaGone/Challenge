import React from "react";
export default function Result(props) {
  return (
    <div>
      <h3> 3 months reward points:</h3>
      {props.MonthRewards.map((item, index) => (
        <p key={index}>
          {props.Months[index++]}: {item}
        </p>
      ))}
      {<p> Total: {props.Total !== 0 ? props.Total : "N/A"}</p>}
    </div>
  );
}
