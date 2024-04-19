
import React from "react"
import { useState } from "react"

function Button({color}) {
  const [currcolor, setColor] = useState("yellow")
   
  return (
    <>
    <div style={{backgroundColor:currcolor}}>
    <button
         onClick = {() => setColor("red")}
        className=" rounded-md px-3 py-2 text-sm font-semibold text-black shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mb-4" style={{backgroundColor:"red"}}>
        Red
    </button>
    </div>
    </>
  )
}

export default Button



