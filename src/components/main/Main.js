import React, { useState } from "react";
import Demo from "../demo/Demo";
// import EmployeeCRUD from "../employeeCRUD/EmployeeCRUD";
// import Addition from "../addition/Addition";
// import Addition2 from "../addition/Addition2";
// import Demo1 from "../demo1/Demo1";
// import ProductList from "../products/ProductList";
// import Greet from "../greet/Greet";
// import Counter1 from "../counter/Counter1";
// import Counter2 from "../counter/Counter2";
import "./main.css";

export default function Main() {
  const [a] = useState(10);
  // const updateA = (newA) => {
  //   setA(newA);
  // };
  return (
    <div className="main">
      My own data a is {a}
      {/* <Counter1></Counter1>
      <Counter2></Counter2> */}
      {/* <Addition></Addition> */}
      {/* <Addition2></Addition2> */}
      <Demo name={"sanjay"}></Demo>
      {/* <Demo1 updateA={updateA}></Demo1> */}
      {/* <Greet name={"sanjay"} message={"good morning"}>
        <div>
          <div>Div-1</div>
          <div>Div-2</div>
          <div>Div-3</div>
        </div>
      </Greet>
      <Greet name={"mohit"} message={"good afternoon"}></Greet>
      <Greet name={"neha"} product={{a:10,b:20,c:30}}></Greet> */}
      {/* <EmployeeCRUD></EmployeeCRUD> */}
      {/* <ProductList></ProductList> */}
    </div>
  );
}
