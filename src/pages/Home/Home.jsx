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
          <LocationRipple24 className='ripple' /> <h3>Marietta, GA</h3>
        </div>
        
      </div>

      <div className='summary-ctn'>

        <div className="skills home-ctns">
          <h1>Technologies & Languages</h1>
          <div className='tech' >
            
          </div>
        </div>

        <div className="hobbies home-ctns">
          <h1>Hobbies</h1>
        </div>

      </div>
    </div>
  )
}

export default Home
