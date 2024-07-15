import React, { useState } from 'react'
function App() {
  let counter = 1;
  const [count, setCount] = useState(0)
  const [meassage, setMessage] = useState("");
  const addValue = () => {
    console.log("count", count);
    if (count < 20) {
    return  setCount(count + 1);
    }
    setMessage(`Cannot number after ${count}`)
  }
  const removeValue = () => {
    console.log("count", count)
    if (count > 0) {
      setCount(count - 1);
    }
    setMessage(`Cannot number after ${count}`)
  }
  return (
    <>
      <h1>Count is {count}</h1>
      <button onClick={addValue}>add value </button>
      <button onClick={removeValue}>remove value</button>
      <p>{meassage}</p>
    </>
  )
}

export default App
