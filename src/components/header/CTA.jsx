import React from 'react'
import resume from '../../assets/resume.pdf'

function CTA() {
  return (
    <div className='cta'>
        <a href='#contact' className='btn btn-primary'>Contact Me</a>
        <a href={resume} download className='btn'>Download CV</a>
    </div>
  )
}

export default CTA