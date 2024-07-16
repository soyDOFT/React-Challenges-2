import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter</h1>
      <div className="card">
        <p>{count}</p>
        <button onClick={() => setCount((c) => c + 1)}>
          increment
        </button>
        <button onClick={() => setCount((c) => c - 1)}>
          decrement
        </button>
      </div>
    </>
  )
}

export default App
