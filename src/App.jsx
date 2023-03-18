import React from 'react'

import Header from './components/header/Header'
import Navigation from './components/nav/Navigation'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import CoverLetter from './components/cover-letter/CoverLetter'
import Capstone from './components/capstone/Capstone'

const App = () => {
  return (
    <>
      <Header />
      <Navigation/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Capstone/>
      <CoverLetter/>
      <Contact/>
      <Footer/>

    </>
  )
}

export default App