import React from 'react'
import Header from './components/Head/Header'
import Footer from './components/Footer/Footer'

import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
