import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  let myObject = {
    name: "react_learner",
    age: "23"
  }

  let myArray = [1, 3, 7, 24]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Tailwind Test</h1>
      <Card username="i_learn_react" 
      description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis repudiandae, ipsum distinctio consequuntur dignissimos officiis?" 
      imgUrl='https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      someObject={myObject} someArray = {myArray} />
      <Card username="iAlsoLearnReact" 
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat possimus quidem placeat."
      imgUrl='https://images.pexels.com/photos/7533347/pexels-photo-7533347.jpeg?auto=compress&cs=tinysrgb&w=600'
       someObject={myObject} someArray = {myArray} />
    </>
  )
}

export default App