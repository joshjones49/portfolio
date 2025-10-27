import './Info.css'

import { Link } from 'react-router-dom'

import { GithubSquare } from '../SVGs/githubsvg';
import { GmailLight } from '../SVGs/gmailsvg';
import { Linkedin } from '../SVGs/linkedinsvg';

const Info = () => {
  return (
    <div className='info'>
      <img src="https://avatars.githubusercontent.com/u/143196112?s=400&u=327e8df978240c5aa3419d86cd61e4d70dc6f769&v=4" alt='IMG'  className="photo" />

        <div className="icons">
          <a href="https://github.com/joshjones49" target='_blank' className='social'>
            <GithubSquare />
          </a>
          
          <a href="https://www.linkedin.com/in/joshjones49/" target='_blank' className='social'>
            <Linkedin />
          </a>

          <Link to='/contact' className='social'>
            <GmailLight />
          </Link>
        </div>

        {/* <div className="decorations">
        </div> */}
      
    </div>
  )
}

export default Info
