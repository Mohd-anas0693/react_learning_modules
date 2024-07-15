import { useCallback, useEffect, useState, useRef } from 'react'

// import './App.css'

function App() {

  const [length, setLength] = useState(0);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const copyPassword = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    // console.log(window.navigator.clipboard.readText());
  }

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str = str + '1234567890'
    if (charAllowed) str = str + "!@#$%^&*~"

    for (let i = 1; i <= length; i++) {
      const index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword])


  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-slate-700">
        <h1 className='text-white  text-xl text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={() => { copyPassword() }}> copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min="6"
              max="100"
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} ></input>
            <label className="text-orange-500">Length {length}</label>

            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={
                () => {
                  setNumberAllowed((prev) => !prev)
                }
              } ></input>
            <label className="text-orange-500">Number Allowed</label>

            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={
                () => {
                  setCharAllowed((prev) => !prev)
                }
              } ></input>
            <label className="text-orange-500">characters Allowed</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
