import React from 'react'
import Navbar from '../utils/Navbar'
import Footer from '../utils/Footer'
import UserSignin from '../auth/UserSignin'
import UserSignup from '../auth/UserSignup'
import UserSignup2 from '../auth/UserSignup2'
import UserSignup3 from '../auth/UserSignup3'

const Layout = () => {
  return (
    <>
      <Navbar/>
      <UserSignin/>
      <Footer/>
      <Navbar/>
      <UserSignup/>
      <Footer/>
      <Navbar/>
      <UserSignup2/>
      <Footer/>
      <Navbar/>
      <UserSignup3/>
      <Footer/>
    </>
  )
}

export default Layout