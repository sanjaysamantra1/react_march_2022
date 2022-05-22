import React, { useEffect, useId } from "react";

export default function Demo() {
  const id = useId(0);
  useEffect(() => {
    console.log('i am useeffect')
  
    return () => {
      
    }
  }, [])
  
  return (
    <div>
      <label htmlFor={id + "-firstName"}>First Name</label>
      <div>
        <input id={id + "-firstName"} type="text" />
      </div>
      <label htmlFor={id + "-lastName"}>Last Name</label>
      <div>
        <input id={id + "-lastName"} type="text" />
      </div>
    </div>
  );
}
