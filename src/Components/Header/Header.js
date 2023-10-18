import React from 'react'
import { CiSearch } from 'react-icons/ci';
import { BsJustify } from 'react-icons/bs';
import './Header.css'

const Header = ({OpenSidebar}) => {
  return (
    <>
      <div className='header'>
            <div className='menu-icon'>
                <BsJustify className='icon' onClick={OpenSidebar}/>
            </div>
            <div>
              <p>Hello Shahrukh👋, </p>
            </div>  
            <div className="search-bar">
                <div className="search-icon">
                  <CiSearch />
                </div>
                <div>
                <input type="text" placeholder="Search..." />
                </div> 
            </div>
      </div>

    </>
    
  )
}

export default Header
