import { useCallback, useEffect, useState, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberStatus, setNumberStatus] = useState(false);
  const [charStatus, setCharStatus] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let passwordSource = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; 
    if (numberStatus){
      passwordSource += "0123456789";
    } 
    if (charStatus){
      passwordSource += "!@#$%^&*()'-_=+{}[]|;:,.<>/?";
    }
    for(let i=1; i <= length; i++){
      let char = Math.floor(Math.random() * passwordSource.length + 1);
      pass += passwordSource.charAt(char);
    }

    setPassword(pass);

  }, [length, numberStatus, charStatus, setPassword]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(() => {
    passwordGenerator();
  },[length, numberStatus, charStatus,passwordGenerator]);
  return (
    <>
      <div className="container w-full max-w-md mx-auto shadow-md
      rounded-lg px-4 py-4 my-8 bg-gray-800 text-center">
        <h1 className="text-2xl text-white my-5">Password Generator</h1>
        <div className="flex shadow rounded-lg mb-4">
          <input type="text" value={password}
          className=" outline-none w-full py-1 px-3 rounded-lg"
          placeholder="password"
          readOnly
          ref={passwordRef}
          />

          <button onClick={copyToClipboard}
          className=" outline-none bg-blue-700 text-white
          px-3 py-0.5 shrink-0 rounded-lg copy-btn">Copy</button>
        </div>
        
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1 text-white">
              <input type="range" 
              min={8}
              max={20}
              value={length}
              className="cursor-pointer"  
              onChange={(e) => {setLength(e.target.value)}}          
              />
              <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1 text-white">
            <input type="checkbox" 
            defaultChecked={numberStatus}
            id="numberInput"
            onChange={()=> {
              setNumberStatus((prev) => !prev);
            }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1 text-white">
            <input type="checkbox" 
            defaultChecked={charStatus}
            id="characterInput"
            onChange={()=> {
              setCharStatus((prev) => !prev);
            }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>

      </div>
    </>
  )
}

export default App;
