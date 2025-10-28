import './Info.css'

import { Link } from 'react-router-dom'

import { GithubSquare } from '../SVGs/githubsvg';
import { GmailLight } from '../SVGs/gmailsvg';
import { Linkedin } from '../SVGs/linkedinsvg';

import getTechIcon from '../../pages/Projects/getTechIcons';
import { iconMap } from '../../pages/Projects/getTechIcons';

import { FileTypeAngular } from '../../components/SVGs/angular'
import { ReactIcon } from '../../components/SVGs/react'
import { Postgresql } from '../../components/SVGs/postgresql'
import { Java } from '../../components/SVGs/java'
import { Springboot } from '../../components/SVGs/springboot'
import { Nodejs } from '../../components/SVGs/node'
import { Javascript } from '../../components/SVGs/javascript'
import { Html5 } from '../../components/SVGs/html'
import { Css3 } from '../../components/SVGs/css'

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

        <div className="skills">
          <FileTypeAngular className='skill-item' />
          <ReactIcon className='skill-item' />
          <Postgresql className='skill-item' />
          <Java className='skill-item' />
          <Springboot className='skill-item spring-boot' />
          <Nodejs className='skill-item' />
          <Javascript className='skill-item' />
          <Html5 className='skill-item' />
          <Css3 className='skill-item' />
        </div>
      
    </div>
  )
}

export default Info


