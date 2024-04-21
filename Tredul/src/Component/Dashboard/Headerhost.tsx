import React from 'react'
import IconProfile from './IconProfile';
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

 function Headerhost({OpenSidebarhost}: {OpenSidebarhost: () => void}) {
  return (
    
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebarhost}/>
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

export default Headerhost