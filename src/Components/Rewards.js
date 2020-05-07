import React, { Component } from "react";
import Result from "./Result";
export default class Rewards extends Component {
  state = {
    name: "",
    data: this.props.data,
    Total: 0,
    MonthRewards: [],
    Months: ["January", "February", "March"],
    showVal: false,
    err: "",
  };

  handleChange = (e) => {
    console.log("reset");
    this.setState({ name: e.target.value, Total: 0, err: "", showVal: false });
  };
  handleReset = (e) => {
    this.setState({ name: "", Total: 0, MonthRewards: [], showVal: false });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, data } = this.state;
    let monthNum = ["01", "02", "03"];
    let MonthTot = [];
    let userTransactions = data.filter(
      (item) => item.fullName.toLowerCase() === name.toLowerCase()
    );
    if (userTransactions.length > 0) {
      let total = this.ToTAmount(userTransactions[0].transaction);
      for (let i = 0; i < 3; i++) {
        let Monthly = userTransactions[0].transaction.filter(
          (item) => item.date.substring(0, 2) === monthNum[i]
        );
        MonthTot.push(this.ToTAmount(Monthly));
      }
      this.setState({ Total: total, MonthRewards: MonthTot, showVal: true });
    } else {
      this.setState({ err: "Name not Found" });
    }
  };

  ToTAmount = (p) => {
    let Total = p.reduce((acc, item) => {
      let points;
      if (item.amount < 50) points = 0;
      else if (item.amount <= 100) points = item.amount - 50;
      else points = 50 + (item.amount - 100) * 2;
      return acc.concat(points);
    }, []);
    if (Total.length > 0) return Total.reduce((acc, cv) => acc + cv);
    else return 0;
  };

  render() {
    const { name, err, Total, MonthRewards, showVal, Months } = this.state;
    return (
      <div>
        <form>
          <label>Name: </label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          ></input>
          <button type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
          <button type="reset" onClick={this.handleReset}>
            Reset
          </button>
        </form>
        <p> {name}</p>
        <p style={{ color: "red" }}> {err}</p>
        {showVal ? (
          <Result MonthRewards={MonthRewards} Total={Total} Months={Months} />
        ) : (
          ""
        )}
      </div>
    );
  }
}
