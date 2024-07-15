import { useState } from "react"
// import Footer from "./Footer"
function App() {
  const [color, setColor] = useState("white");
 const data = `${color} h-screen w-max-content`; 
  return (
    <>
      <div className={data}>
      <footer className="bg-slate-500  rounded w-auto  p-2.5 flex flex-nowrap place-content-center place-items-center">
            <div onClick={()=> setColor("bg-yellow-300")} className="bg-yellow-300 m-3.5 rounded  w-auto p-2.5 text-cyan-950 " >
                yellow
            </div>
          
            <div onClick={()=> setColor("bg-green-500")} className="bg-green-500 m-3.5 rounded  w-auto p-2.5 text-cyan-950 " >
                yellow
            </div>
            <div onClick={()=> setColor("bg-black")} className="bg-black m-3.5 rounded  w-auto p-2.5 text-white " >
          
                green
            </div>
          
            <div onClick={()=> setColor("bg-red-300")} className="bg-red-300 m-3.5 rounded  w-auto p-2.5 text-cyan-950 " >
                pink
            </div>
          
            <div onClick={()=> setColor("bg-gray-900")} className="bg-gray-900 m-3.5 rounded  w-auto p-2.5 text-white " >
                grey
            </div>
          
            <div onClick={()=> setColor("bg-blue-300")} className="bg-blue-300 m-3.5 rounded  w-auto p-2.5 text-cyan-950 " >
                blue
            </div>
          
            <div onClick={()=> setColor("bg-purple-300")} className="bg-purple-300 m-3.5 rounded  w-auto p-2.5 text-cyan-950 " >
                Purple
            </div>
          
           

        </footer>
      </div>
    </>
  )
}

export default App
