import React from 'react'
import './Navigation.css'
import {AiTwotoneHome} from 'react-icons/ai'
import {BiUserCheck} from 'react-icons/bi'
import {BsBook} from 'react-icons/bs'
import {RiPassportFill} from 'react-icons/ri'
import {RiMessage3Fill} from 'react-icons/ri'
import { useState } from 'react'

function Navigation() {

  const [activeNav, setActiveNav] = useState('#home')



  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav ==='#home' ? 'active' : ''}><AiTwotoneHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav ==='#about' ? 'active' : ''}><BiUserCheck/></a>
      <a href="#experience" onClick={() => setActiveNav('#skills')} className={activeNav ==='#skills' ? 'active' : ''}><BsBook/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav ==='#portfolio' ? 'active' : ''}><RiPassportFill/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav ==='#contact' ? 'active' : ''}><RiMessage3Fill/></a>

    </nav>
  )
}

export default Navigation