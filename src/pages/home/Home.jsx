import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import "./home.css"

export const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <div className="homeContainer">
          <Featured />
        </div>
    </div>
  )
}

