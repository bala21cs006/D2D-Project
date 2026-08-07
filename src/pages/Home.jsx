import React from 'react'
import Navbar from '../components/common/Navbar'
import Hero from '../components/home/Hero'
import Category from '../components/home/Category'
import PromoBanner from '../components/home/PromoBanner'
const Home = () => {
  return (
   <>
    <Hero/>
    <Category/>
    <PromoBanner/>
   </>
  )
}

export default Home