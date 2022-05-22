import React, { useState } from "react";

export default function Form2() {
  const [user, setUser] = useState({
    fname: ["sachin", ""],
    lname: ["tendulkar", ""],
    state: ["odisha", ""],
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        First Name:
        <input disabled
          name="fname"
          value={user.fname[0]}
          onChange={(e) => {
            setUser({ ...user, fname: [e.target.value, ""] });
            if (!e.target.value) {
              setUser({
                ...user,
                fname: [e.target.value, "please fill the field"],
              });
            } else if (e.target.value.length < 5) {
              setUser({
                ...user,
                fname: [e.target.value, "length should be greater than 5"],
              });
            } else {
              setUser({ ...user, fname: [e.target.value, ""] });
            }
          }}
        />
        <span className="text-danger">{user.fname[1]}</span>
        <br />
        Last Name:
        <input
          name="lname"
          value={user.lname[0]}
          onChange={(e) => setUser({ ...user, lname: [e.target.value, ""] })}
        />
        <br />
        State:
        <select
          value={user.state[0]}
          onChange={(e) => setUser({ ...user, state: [e.target.value, ""] })}
        >
          <option value="odisha">Odisha</option>
          <option value="andhrapradesh">AP</option>
          <option value="up">UP</option>
          <option value="kerala">KL</option>
        </select>
        <br />
        <h2>
          state data:{" "}
          {user.fname[0] + " " + user.lname[0] + " " + user.state[0]}{" "}
        </h2>
        <br />
        <button>submit</button>
      </form>
    </>
  );
}
