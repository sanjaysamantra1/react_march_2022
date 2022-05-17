import React, { useState } from "react";
import "./footer.css";

// export default class Footer extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "sanjay",
//     };
//   }
//   render() {
//     return <div className="footer">This is My Footer -{this.state.name}</div>;
//   }
// }

export default function Footer() {
  const [name] = useState("sanjay");
  return <div className="footer">This is My Footer- {name}</div>;
}
