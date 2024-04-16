import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// directly implementing JSX
import {jsx as _jsx} from "react/jsx-dev-runtime.js"

function MyApp(){
  return(
    <div>
      <h1>
        Custom App
      </h1>
    </div>
  )
}
// ============ cannot Run ===============
// const reactElement = {   // It's syntax is not appropriate for inbuit Render
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: "Click me to visit google"
// }

const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

//================= React Implement in This way =========
const anotherUser ="chai aur code"
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  anotherUser,
  anotherElement
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <MyApp /> */}
    {/* MyApp() */}
    {/* ReactElement */}
    reactElement
    
    <App/>
    anotherElement
  </React.StrictMode>,
)
