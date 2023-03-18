import React from 'react'

import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

function HeaderSocial() {
  return (
    <div className='header__socials'>
        <a href='https://github.com/arusafa' target='_blank' rel="noreferrer"><BsGithub/></a>
        <a href='https://www.linkedin.com/in/safaaru' target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href='https://instagram.com/safaaru' target='_blank' rel="noreferrer"><BsInstagram/></a>
        <a href='https://www.facebook.com/safaaru' target='_blank' rel="noreferrer"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocial