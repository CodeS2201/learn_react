import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numsOn, setNumsOn] = useState(false)
  const [charsOn, setCharsOn] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook

  const passwordRef = useRef(null)


  const passwordGen = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numsOn) str += "0123456789"
    if (charsOn) str += "!@#$%^&*({+=~`;:'.>,</?|"

    for (let i = 1; i<=length; i++) {
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numsOn, charsOn])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, password.length);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGen()
  }, [length, numsOn, charsOn, passwordGen])

  return (
    <div className='text-2xl text-center w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8
      text-orange-500 bg-gray-800'>
      <h1 className='text-4xl text-center text-white py-3'>Password Generator</h1>
      <div className="flex shadow-rounded-lg mb-4 overflow-hidden mb-4">
        <input type="text"
                value={password}
                className='outline-none w-full py-1 px-3 mt-3'
                placeholder='password'
                readOnly
                ref={passwordRef}
                />
        <button className='text-xl outline-none bg-blue-700 text-white 
        py-0.5 px-2 shrink-0 max-h-10 mt-3 pb-4 rounded-s-none'
        onClick={copyPassword}>copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1 mb-4">
          <input 
            type="range"
            min={6}
            max={50}
            value={length}
            className='cursor-pointer mt-1.5'
            onChange={(e) => {setLength(e.target.value)}}
          />
          <label className='text-lg'>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1 mb-3 px-3">
          <input 
            type="checkbox"
            defaultChecked={numsOn}
            id="numberInput"
            onChange={() => {
              setNumsOn((prev) => !prev)
            }}
          />
          <label htmlFor="numberInput" className='text-lg'>Numbers</label>
        </div>
        <div className="flex items-center gap-x-1 mb-3">
          <input 
            type="checkbox"
            defaultChecked={charsOn}
            id="characterInput"
            onChange={() => {
              setCharsOn((prev) => !prev)
            }}
          />
          <label htmlFor="characterInput" className='text-lg'>Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
