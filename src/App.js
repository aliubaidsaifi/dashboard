import React,{useState} from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import Main from './Components/Main/Main'
const App = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
     <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
     <Header OpenSidebar={OpenSidebar}/>
     <Main/>
    </div>
  )
}

export default App
