import React from 'react'
import profile from '../../Assets/pro.jpg'
import{TbHexagonLetterO,TbCube} from 'react-icons/tb'
import{BiChevronRight} from 'react-icons/bi'
import{LuBadgePercent,LuKeyRound} from 'react-icons/lu'
import {MdOutlineAccountBox,MdOutlineAccountBalanceWallet,MdOutlineLiveHelp} from 'react-icons/md';
import './Sidebar.css'
const Sidebar = ({openSidebarToggle, OpenSidebar}) => {
   
  return (
    
      <div id='sidebar' className={openSidebarToggle ? "sidebar-responsive": ""}>
          <div className="dashboard-heading">
          <div><TbHexagonLetterO className='dashboard-icon'/>
            <h3>Dashboard</h3>  </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
          </div>
          <ul className="navigation">
            <li><LuKeyRound/><a href="#">Dashboard</a><BiChevronRight/></li>
            <li><TbCube/><a href="#">Products</a>&nbsp;<BiChevronRight/></li>
            <li><MdOutlineAccountBox/><a href="#">Customers</a><BiChevronRight/></li>
            <li><MdOutlineAccountBalanceWallet/><a href="#">Income</a>&nbsp;<BiChevronRight/></li>
            <li><LuBadgePercent/><a href="#">Promote</a><BiChevronRight/></li>
            <li><MdOutlineLiveHelp/><a href="#">Help</a>&nbsp;<BiChevronRight/></li>
          </ul>
          <div className="user-profile">
            <img src={profile} alt='Evano' />
            <div style={{'fontSize':'10px','marginLeft':'10px','color':'gray'}}>
            <h4>Evano</h4>
            Project Manager
            </div>
        
          </div>
    </div>
  
  )
}

export default Sidebar
