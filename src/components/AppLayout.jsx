import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from './Header'

const AppLayout = () => {
  return (
    <nav>
       <Header/>
        <Outlet/>
    </nav>
  )
}

export default AppLayout