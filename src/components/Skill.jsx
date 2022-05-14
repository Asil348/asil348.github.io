import React from 'react'
import '../styles/Skills.css'

const Skill = ({ skill }) => {
  return (
    <div className="col-sm d-flex justify-content-center align-items-center">
      <div className="skill px-4">
        <h5 className="text-light mb-0">{skill.title}</h5>
        {/* <div>{skill.icon}</div> */}
      </div>
    </div>
  )
}

export default Skill
