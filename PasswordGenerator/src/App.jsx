import { useState ,useCallback, useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllow,setNumberAllow] = useState(false);
  const [charAllow,setCharAllow]=useState(false);
  const [password,setPassword] = useState("");

  //useRef Hook  =====> used to take referece for manipulation
  const passwordRef=useRef(null)
  const passwordGenerator = useCallback(()=>{
    let password=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     if(numberAllow)
     str+="0123456789"
    if(charAllow)
    str+="!@#$%^&*()_+{}[]~`"
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      password+=str.charAt(char)
    }
    setPassword(password)
  },[length,numberAllow,charAllow,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,101);
window.navigator.clipboard.writeText(password) // window is working because we are using Rectjs but in Nodejs we will use different element
  },[password])
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllow,charAllow,passwordGenerator])
  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
         <h1 className='text-white text-center my-3'>Password Generator</h1>
         <div className='flex shadow rounded-lg overflow-hidden mb-4'>
           <input
             type="text"
             value={password}
             className='outline-none w-full py-1 px-3'
             placeholder="Password"
             readOnly
             ref={passwordRef}
             />
             <button
              onClick={copyPasswordToClipboard}
              className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
              </div>
             <div className='flex text-sm gap-x-2'>
              <div className='flex items-center gap-x-1'>
                <input
                 type="range"
                 min={8}
                 max={100}
                 value={length}
                 className='cursor-pointer'
                 onChange={(e)=>{setLength(e.target.value)}}/>
                  <label>Length:{length}</label>
                 
              </div>
              <div className='flex items-center gap-x-1'>
              <input
                type="checkbox"
                defaultChecked={numberAllow}
                id="numberInput"
                onChange={()=>{
                   setNumberAllow((prev)=>!prev);
                }}
                />
                <label htmlFor="numberInput">Numbers</label>
              </div>
              <div className='flex items-center gap-x-1'>
              <input
                type="checkbox"
                defaultChecked={charAllow}
                id="characterInput"
                onChange={()=>{
                   setCharAllow((prev)=>!prev); //previous value will changed
                }}
                />
                <label htmlFor="characterInput">Characters</label>
              </div>
              
              </div> 
         
      </div>
    </>
  )
}

export default App
