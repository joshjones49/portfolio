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

          {/* Front-End --------------------------------------------------- */}
          {Array.isArray(item.front) && item.front.length > 0 && (
            <>
              <h3>Front-End</h3>
              <ul>
                {item.front.map((elem, elemIndex) => (
                  <li key={elemIndex}>{elem}</li>
                ))}
              </ul>
            </>
          )}

          {/* Back-End ---------------------------------------------------- */}
          {Array.isArray(item.back) && item.back.length > 0 && (
            <>
              <h3>Back-End</h3>
              <ul>
                {item.back.map((elem, elemIndex) => (
                  <li key={elemIndex}>{elem}</li>
                ))}
              </ul>
            </>
          )}

        <h3 className="tech-title">Technologies & Languages</h3>
        <div className="tech-icons">
          {item.technologies && item.technologies.map((tech, techIndex) => (
            <div key={techIndex} className="tech-item">
              {getTechIcon(tech)}
            </div>
          ))}
        </div>
          <a href={item.githubLink} className='github' target='_blank'>
            <GithubSquare className='logo' />
          </a>
        </div>
        ))
        }
    </div>
  )
}

export default Projects
