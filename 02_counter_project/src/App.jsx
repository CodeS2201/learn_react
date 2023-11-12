import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCount] = useState(5)

  const addValue = () => {
    // count++
    setCount(count + 1);
  }

  const removeValue = () => {
    // count--
    setCount(count - 1);
  }

  return (
    <>
      <h1>React Counter</h1>
      <h2>Counter Value: {count}</h2>

      <button onClick={addValue}>Add Value: {count}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value: {count}</button>
      <p>footer: {count}</p>
    </>
  )
}

export default App
