import React from 'react';

export default function Header() {
  return (
    <div
      style={{
        backgroundColor: "purple",
        color: "white",
        textAlign: "center",
        fontSize: "30px",
        fontWeight:'bolder'
      }}
    >
      This is My Header-React Version-{React.version}
    </div>
  );
}

export const userName = 'sachin'
