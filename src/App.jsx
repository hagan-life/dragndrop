import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className="dragndrop">
        <h1>Drag & Drop</h1>
      </p>
    </>
  )
}

export default App
