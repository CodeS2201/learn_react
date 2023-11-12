import { useState } from 'react'

function App() {

  const [color, setColor] = useState("olive");

  return (
    <>
      <div className='w-full h-screen duration-200'
       style={{backgroundColor: color}}
      >
        <div className='fixed flex flex-wrap justify-center right-10 inset-y-5 h-fit'>
          <div className='flex flex-wrap flex-col justify-center gap-3 shadow-lg px-2 py-3 rounded-3xl bg-white'>
            <button className='outline-none py-4 px-1 rounded-full shadow-2xl w-8 border-black border-x-2 border-y-2' 
            style={{backgroundColor: "red"}} onClick={() => setColor("red")}></button>
            <button className='outline-none py-4 px-1 rounded-full shadow-2xl w-8 border-black border-x-2 border-y-2' 
            style={{backgroundColor: "green"}} onClick={() => setColor("green")}></button>
            <button className='outline-none py-4 px-1 rounded-full shadow-2xl w-8 border-black border-x-2 border-y-2' 
            style={{backgroundColor: "yellow"}} onClick={() => setColor("yellow")}></button>
            <button className='outline-none py-4 px-1 rounded-full shadow-2xl w-8 border-black border-x-2 border-y-2' 
            style={{backgroundColor: "blue"}} onClick={() => setColor("blue")}></button>
            <button className='outline-none py-4 px-1 rounded-full shadow-2xl w-8 border-black border-x-2 border-y-2' 
            style={{backgroundColor: "gray"}} onClick={() => setColor("gray")}></button>
            <button className='outline-none py-4 px-1 rounded-full shadow-2xl w-8 border-black border-x-2 border-y-2' 
            style={{backgroundColor: "black"}} onClick={() => setColor("black")}></button>
            <button className='outline-none py-4 px-1 rounded-full shadow-2xl w-8 border-black border-x-2 border-y-2' 
            style={{backgroundColor: "violet"}} onClick={() => setColor("violet")}></button>
            <button className='outline-none py-4 px-1 rounded-full shadow-2xl w-8 border-black border-x-2 border-y-2' 
            style={{backgroundColor: "hotpink"}} onClick={() => setColor("hotpink")}></button>
            <button className='outline-none py-4 px-1 rounded-full shadow-2xl w-8 border-black border-x-2 border-y-2' 
            style={{backgroundColor: "pink"}} onClick={() => setColor("pink")}></button> 
            <button className='outline-none py-4 px-1 rounded-full shadow-2xl w-8 border-black border-x-2 border-y-2' 
            style={{backgroundColor: "purple"}} onClick={() => setColor("purple")}></button>
            <button className='outline-none py-4 px-1 rounded-full shadow-2xl w-8 border-black border-x-2 border-y-2' 
            style={{backgroundColor: "gold"}} onClick={() => setColor("gold")}></button>
            <button className='outline-none py-4 px-1 rounded-full shadow-2xl w-8 border-black border-x-2 border-y-2' 
            style={{backgroundColor: "orange"}} onClick={() => setColor("orange")}></button>
            <button className='outline-none py-4 px-1 rounded-full shadow-2xl w-8 border-black border-x-2 border-y-2' 
            style={{backgroundColor: "darkred"}} onClick={() => setColor("darkred")}></button>
            <button className='outline-none py-4 px-1 rounded-full shadow-2xl w-8 border-black border-x-2 border-y-2' 
            style={{backgroundColor: "brown"}} onClick={() => setColor("brown")}></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
