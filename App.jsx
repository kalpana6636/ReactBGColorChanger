import { useState } from "react"



function App() {
  
const [color, setColor] = useState("yellow")
  return (
    
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      {/* <h1>jhgjghgjhjhjhjhgjfghgjhhkjhgj</h1> */}
      <div className="bottom-12">
        <button className="bg-red-500 p-3 m-2" onClick={() => setColor("Red")}>Red</button>
        <button className="bg-green-500 p-3 m-2" onClick={() => setColor("Green")}>Green</button>
        <button className="bg-blue-500 p-3 m-2" onClick={() => setColor("Blue")}>Blue</button>
      </div>
    </div>
     
    
  )
}

export default App
