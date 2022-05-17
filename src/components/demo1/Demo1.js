/* eslint-disable react/prop-types */
import React from 'react'

export default function Demo1(props) {
  return (
    <div style={{border:'5px solid green'}}>Demo1
      <button onClick={()=>props.updateA(20)}>update parent data</button>
    </div>
  )
}
