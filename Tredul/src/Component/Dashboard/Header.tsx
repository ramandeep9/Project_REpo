import React from 'react'
import IconProfile from './IconProfile';
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

 function Header({OpenSidebar}: {OpenSidebar: () => void}) {
  return (
    
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>  <h3>Dashboard</h3>


        </div>

        <div className='header-right'>
            <BsFillBellFill className='icon'/>
           <BsFillEnvelopeFill className='icon'/>
          <IconProfile />
                
            
        </div>
    </header>
  )
}

export default Header