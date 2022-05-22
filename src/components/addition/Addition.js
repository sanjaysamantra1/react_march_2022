import React, { useState } from "react";

export default function Addition() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);
  const [name, setname] = useState("sachin");

  //   const changeHandler1 = (e) => {
  //     setNum1(e.target.value);
  //   };
  //   const changeHandler2 = (e) => {
  //     setNum2(e.target.value);
  //   };
  const changeHandler = (e) => {
    const fieldName = e.target.name;
    if (fieldName == "num1") {
      setNum1(e.target.value);
    } else {
      setNum2(e.target.value);
    }
  };
  const findSum = () => {
    setSum(+num1 + +num2);

    setTimeout(() => {
      setname("rahul");
    }, 2000);
  };

  return (
    <>
      <div>Addition Example</div>
      <input name="num1" onChange={changeHandler} />
      <input name="num2" onChange={changeHandler} />
      <button onClick={findSum}>Add</button>

      <p>
        addition of {num1} and {num2} is {sum} - {name}
      </p>
    </>
  );
}
