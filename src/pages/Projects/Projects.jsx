import './Projects.css'

import { GithubSquare } from '../../components/SVGs/githubsvg'

import projectsObj from './Projects.mjs'
import getTechIcon from './getTechIcons'

const Projects = () => {
  return (
    <div className='projects pages' >
      {
      projectsObj.map((item, index) => (
        <div key={index} className="project-card">
          <h1>{item.name}</h1>
          <h3>{item.description}</h3>
          <h3>Front-End</h3>
          {item.front && (
            <ul>
              {item.front.map((elem, elemIndex) => (
                <li key={elemIndex}>{elem}</li>
              ))}
            </ul>
          )}

          <h3>Back-End</h3>
          {item.back && (
            <ul>
              {item.back.map((elem, elemIndex) => (
                <li key={elemIndex}>{elem}</li>
              ))}
            </ul>
          )}
        <h3>Technologies & Languages</h3>
        <div className="tech-icons">
          {item.technologies && item.technologies.map((tech, techIndex) => (
            <div key={techIndex} className="tech-item">
              {getTechIcon(tech)}
            </div>
          ))}
        </div>
        <button className='github' ><GithubSquare className='logo' /> Github</button>
        </div>
        ))
        }
    </div>
  )
}

export default Projects
