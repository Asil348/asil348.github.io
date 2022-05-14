import React from 'react'
import '../styles/Works.css'

const Work = ({ work }) => {
  return (
    <div className="col-sm d-flex justify-content-center align-items-center">
      <div className="work px-4">
        <h5 className="text-light mb-0">{work.title}</h5>
        <p className="text-light">{work.description}</p>
        <a href={work.link}>Go to project</a>
        {work.technologies.map((technology, i) => (
          <p key={i} className="text-light">{technology}</p>
        ))}
        {/* <div>{skill.icon}</div> */}
      </div>
    </div>
  )
}

export default Work
