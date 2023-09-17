import { useState } from 'react'
import Articulation from './Articulation'

function App() {
  const [startArticulation, setStartArticulation] = useState("false")
 console.log(startArticulation)

  return (
    <>
     <p className='bg-red-500 mb-6 text-white font-bold text-[14px] p-1 text-center'>Fluent-Speech</p>

     { startArticulation === "false" ? <div onClick={()=>setStartArticulation("true")} className='cursor-pointer flex items-center justify-center mt-48 '><div className='flex items-center justify-center bg-red-500 h-[40vh] w-[50vw] rounded-[12px]'>
         <button className='font-bold text-[23px] text-white' >Start Articulation Exercise</button>
      </div></div> : null}
  
    {
      startArticulation === "true" ? <Articulation></Articulation> : null
      
    }
   
      
    
    
    </>
  )
}

export default App
