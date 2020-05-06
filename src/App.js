import React from "react";
import "./App.css";
import Rewards from "./Components/Rewards";

const data = [
  {
    fullName: "Mike",
    customerID: 1,
    transaction: [
      {
        amount: 60,
        date: "01-01-2020",
      },
      {
        amount: 180,
        date: "02-01-2020",
      },
      {
        amount: 20,
        date: "02-01-2020",
      },
      {
        amount: 72,
        date: "03-01-2020",
      },
      {
        amount: 1500,
        date: "03-01-2020",
      },
    ],
  },
  {
    fullName: "Petter",
    customerID: 2,
    transaction: [
      {
        amount: 1860,
        date: "02-01-2020",
      },
      {
        amount: 20,
        date: "02-01-2020",
      },
      {
        amount: 90,
        date: "02-01-2020",
      },
      {
        amount: 175,
        date: "03-01-2020",
      },
      {
        amount: 1480,
        date: "03-01-2020",
      },
    ],
  },
];
function App() {
  return (
    <div className="App">
      <Rewards data={data} />
    </div>
  );
}

export default App;
