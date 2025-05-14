import './GitHub.css'

import { IoLogoReact } from "react-icons/io5";
import { FaNode } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";

const Github = () => {
  return (
    <div className="github-page pages" >
        <div className="github-ctn ctns" >

            <div className='project-div' >
                <IoLogoReact className='react-logo logos' />
                <h1>Smart-Card | Front-end</h1>
                <ul>
                    <li>Personal project that allows users to use flashcards to review questions and answers</li>
                    <li>Utilizes React and various libraries such as React-Router-Dom for navigation, and React-Hot-Toast for notifications</li>
                </ul>
                <button>
                  <a href='https://github.com/joshjones49/smart-card' target='_blank'>GO TO GITHUB</a>
                </button>
            </div>

              <div className='project-div' >
                  <FaNode className='node-logo logos' />
                  <h1>Smart-Card | Back-end</h1>
                  <ul>
                      <li>Back-end for the Smart-Card application</li>
                      <li>Utilizes Express and is connected to a PostgreSQL database</li>
                  </ul>
                  <button>
                      <a href='https://github.com/joshjones49/smart-card-be' target='_blank'>GO TO GITHUB</a>
                  </button>
              </div>

              <div className='project-div' >
                  <SiSpringboot className='spring-logo logos' />
                  <h1>Twitter Clone</h1>
                  <ul>
                      <li>Group project created with 2 other developers where we built a Twitter clone RESTful API using Java, Spring Boot, and PostgreSQL</li>
                  </ul>
                  <button>
                      <a href='https://github.com/joshjones49/Twitter-Clone' target='_blank'>GO TO GITHUB</a>
                  </button>
              </div>

              <div className='project-div' >
                  <IoLogoReact className='react-logo logos' />
                  <h1>Humble Bumble Clone</h1>
                  <ul>
                    <li>Front-end group project using React</li>
                    <li>With 3 other developers, recreated the product page of the Mario RPG video game on the Humble Bundle website</li>
                  </ul>
                  <button>
                      <a href='https://github.com/joshjones49/arrogant-bundle-next' target='_blank'>GO TO GITHUB</a>
                  </button>
              </div>
        </div>
    </div>
  )
}

export default Github
