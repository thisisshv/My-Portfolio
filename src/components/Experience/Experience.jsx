import React from 'react'
import './Experience.css'

function Experience() {
  return (
    <div className="experience">
        <div className="knowledge">
            <div className="circle fresherCircle">Fresher</div>
            <span>Industry</span>
            <span>Experience</span>
        </div>
        <div className="knowledge">
            <div className="circle bOfEnggCircle">Bachelor <br /> of <br /> Engineering</div>
            <span>Electrical and Electronics Engineering</span>
            <span>Sir M. Visvesvaraya Institute of Technology, Bangalore, Karnataka</span>
        </div>
        <div className="knowledge">
            <div className="circle">XII</div>
            <span>CBSE</span>
            <span>Shakti S Academy, Saran, Bihar</span>
        </div>
        <div className="knowledge">
            <div className="circle">X</div>
            <span>CBSE</span>
            <span>Chapra Central School, Chapra, Bihar</span>
        </div>
    </div>
  )
}

export default Experience
