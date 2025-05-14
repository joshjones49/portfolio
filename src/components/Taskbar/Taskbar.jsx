import './taskbar.css'
import { Link } from 'react-router-dom';

// react icons
import { HiMiniHome } from "react-icons/hi2";
import { FcAbout } from "react-icons/fc";
import { TbNotes } from "react-icons/tb";
import { SiGithub } from "react-icons/si";
import { LuMessageSquareMore } from "react-icons/lu";

const Taskbar = () => {
  return (
    <div className='taskbar' >
        <div className='home-div icon-divs' >
            <h2>Home</h2>
            <Link to='/'>
                <HiMiniHome className='home-icon icons' />
            </Link>
        </div>

        <div className='about-div icon-divs' >
            <h2>About</h2>
            <Link to='/about'>
                <FcAbout className='about-icon icons' />
            </Link>
        </div>

        <div className='note-div icon-divs' >
            <h2>Resume</h2>
            <Link to='/resume'>
                <TbNotes className='note-icon icons'/>
            </Link>
        </div>

        <div className='github-div icon-divs' >  
            <h2>GitHub</h2> 
            <Link to='/github-projects'>
                <SiGithub className='github-icon icons'/>
            </Link>
        </div>

        <div className='message-div icon-divs' >  
            <h2>Contact / Socials</h2>
            <Link to='contact'>
                <LuMessageSquareMore className='message-icon icons' />
            </Link>
        </div>
    </div>
  )
}

export default Taskbar
