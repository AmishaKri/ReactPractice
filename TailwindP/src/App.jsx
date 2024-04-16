import { useState } from 'react'
import Card from './Components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username: "hitesh",
    age: 21
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'> Tailwind Test</h1>
      <Card username="chaiaurcode" someObject={myObj}/> {/* error myArr=[1,2,3] */}
      <Card username="hitesh" btnText="visit me"/>

    </>
  )
}

export default App
