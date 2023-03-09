import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
// import Navbar from "./Navbar.jsx"
import "./App.css"
import Form from "./PostDetails.jsx"
import Home from './Home'
import Edit from './UpdateDetails'
import Page2 from './GetDetails'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
    {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/GetDetails" element={<Page2/>}/>
        <Route path="/form" element={<Form/>}/>
      </Routes>
    </div>
  )
}

export default App
