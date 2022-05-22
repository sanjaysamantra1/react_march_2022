import React, { useRef } from "react";

export default function Referencevariable() {
  const myRef1 = useRef();
  const myRef2 = useRef();



  const add = () => {
    console.log(myRef1);
    let val1 = +myRef1.current.value;
    let val2 = parseInt(myRef2.current.value)
    console.log(`addition of ${val1} and ${val2} is ${val1 + val2}`);
  };
  return (
    <>
      <input name="textbox1" ref={myRef1} type="text" /> 
      <input name="textbox2" ref={myRef2} type="text" />
      <button onClick={add}>Add</button>
    </>
  );
}
