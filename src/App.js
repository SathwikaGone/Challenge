import React from "react";
import "./App.css";
import Rewards from "./Components/Rewards";
import Stringg from "./Components/challange2";
import Challange from "./Components/challange3";
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
      <h2>challange 1</h2>
      <p>
        A retailer offers a rewards program to its customers, awarding points
        based on each recorded purchase. A customer receives 2 points for every
        dollar spent over $100 in each transaction, plus 1 point for every
        dollar spent over $50 in each transaction (e.g. a $120 purchase = 2x$20
        + 1x\$50 = 90 points). Given a record of every transaction during a
        three month period, calculate the reward points earned for each customer
        per month and total.
      </p>
      <Rewards data={data} />
      <h2>challange 2</h2>
      <p>
        Given a string S consisting of N lowercase letters, returns the minimum
        number of letters that must be deleted to obtain a word in which every
        letter occurs a unique number of times. We only care about occurrences
        of letters that appear at least once in result. example: Given s=
        "aaaabbbb" should return 1 to make string "aaaabbb"
      </p>
      <Stringg />
      <h2>challange 3</h2>
      <p>
        Build a like button component using react 16. Requirements: format -
        "Like | 100" should have class "like-button" wrap num of likes in span
        with "likes-counter" class initial num of likes should be 100 on click
        button : num of likes must be incremented by 1 like button should have
        "liked" class in addition to "like-button" class. on reclick button: num
        of likes decreased by 1 "liked" class should be removed
      </p>
      <Challange />
    </div>
  );
}

export default App;
