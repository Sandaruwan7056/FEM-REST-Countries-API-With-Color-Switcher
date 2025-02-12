import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router'

const MainLayout = ({setdarkMode ,darkMode}) => {
  return (
    <>
    <Header setdarkMode={setdarkMode} darkMode={darkMode} />
    <Outlet />
    </>
  )
}

export default MainLayout