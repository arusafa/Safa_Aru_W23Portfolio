import React from 'react'
import resume from '../../assets/resume.pdf'

function CTA() {
  return (
    <div className='cta'>
        <a href='#contact' className='btn btn-primary'>Contact Me</a>
        <a href={resume} download className='btn btn-primary'>Download CV</a>
        <a href='#capstone' className='btn btn-primary'>Capstone Project</a>
    </div>
  )
}

export default CTA