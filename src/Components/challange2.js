import React, { useState } from "react";

export default function () {
  const [inputVal, setinputVal] = useState("");
  const [result, setresult] = useState("");

  const solution = (string) => {
    // console.log("string", string);
    let obj = divideString(string);
    // console.log("obj", obj);
    let newObjArra = Object.values(obj);
    // console.log("newobj", newObjArra);
    let indexArray = removeDup(newObjArra);
    // console.log("removeDup", indexArray);
    let returnlength = indexArray.length;
    let num = [10];
    do {
      let result = check(indexArray, newObjArra);
      if (result === 0) {
        break;
      }
      newObjArra = result;
      indexArray = removeDup(newObjArra);
      returnlength += indexArray.length;
    } while (num.length > 0);
    console.log(returnlength);
    return returnlength;
  };

  const check = (qqq, newObjArra) => {
    if (qqq.length === 0) {
      return 0;
    } else {
      for (let m = 0; m < qqq.length; m++) {
        if (newObjArra[qqq[m]] !== 0)
          newObjArra[qqq[m]] = newObjArra[qqq[m]] - 1;
      }
      return newObjArra.filter((item) => item !== 0);
    }
  };

  const removeDup = (newObjArra) => {
    let cache = {};
    let results = [];
    for (var i = 0; i < newObjArra.length; i++) {
      if (cache[newObjArra[i]] === true) results.push(i);
      else cache[newObjArra[i]] = true;
    }
    return results;
  };

  const divideString = (string) => {
    return string.split("").reduce((total, letter) => {
      total[letter] ? total[letter]++ : (total[letter] = 1);
      return total;
    }, {});
  };

  const handleSubmit = () => {
    console.log("inputVal", inputVal);

    let rel = solution(inputVal);
    console.log("rel", rel);
    setresult(rel);
  };

  const handleReset = () => {
    setresult("");
    setinputVal("");
  };
  return (
    <div>
      Enter Text:
      <input
        name="inputVal"
        value={inputVal}
        onChange={(e) => setinputVal(e.target.value)}
      ></input>
      <button onClick={handleSubmit}>result</button>
      <button onClick={handleReset}>reset</button>
      {typeof result !== "string" ? <p>{result}</p> : null}
    </div>
  );
}
