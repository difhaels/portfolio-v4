import React from 'react'
import SideNavbar from './SideNavbar'

export default function PageContainer({children}) {
  return (
    <div>
        <SideNavbar/>
        <div className='pl-16'>
        {children}
        </div>
    </div>
  )
}
