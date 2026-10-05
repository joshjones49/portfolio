import './Home.css'

import { LocationRipple24 } from '../../components/SVGs/location'

import { iconMap } from '../Projects/getTechIcons'

const Home = () => {



  return (
    <div className='home pages' >

      <div className='header' >
        <h1>Josh Jones</h1>
        <h1>U.S. Army Veteran</h1>
        <h1>Full-Stack Software Developer</h1>
        <div className='location'>
          <LocationRipple24 className='ripple' /> <h3>Hawley, TX</h3>
        </div>
        
      </div>

      <div className='summary-ctn'>

        <div className="skills home-ctns">
          <h1>Technologies & Languages</h1>
          <div className='tech' >
            {Object.values(iconMap).map((icon, index) => (
              <div key={index} className="tech-item">
                <div>{icon}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hobbies home-ctns">
          <h1>About</h1>
          <div className="hobbies-list">
            <p className='about-bio'>
              Software developer with a mix of full-stack web development, systems programming, and real-world technical problem-solving. Comfortable working in C++, Java/Spring Boot, Angular, and PostgreSQL, and enjoys building things that are solid and maintainable.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
