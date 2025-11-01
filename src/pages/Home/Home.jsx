import './Home.css'

import { LocationRipple24 } from '../../components/SVGs/location'

const Home = () => {

  return (
    <div className='home pages' >

      <div className='header' >
        <h1>Josh Jones</h1>
        <h1>U.S. Army Veteran</h1>
        <h1>Full-Stack Software Developer</h1>
        <div className='location'>
          <LocationRipple24 /> <h3>Marietta, GA</h3>
        </div>
        
      </div>

      <div className='summary-ctn'>

        <h2>
          I served 6 years in the U.S. Army as a Calvary Scout, 2 years as a team leader and 1 as a section leader. After my contract ended I started the Galvanize Coding Bootcamp, also known as the Hack Reactor Bootcamp. During that time I learned the PERN stack and how to develop front, back, and full-stack applications in teams of 2-5 developers and also solo development. After completing the course I would end up working at Bridgestone Americas as the Sr. Learning Education Analyst. Months later I joined the Cook Systems FastTrack Program where I learned Angular, Java, Spring-Boot, and PostgreSQL. Just like my previous bootcamp I created front, back, and full-stack applications in groups of 3 and gained a better understanding of how to work with others in a remote environment. Currently I am attending trade school in Jacksonville, FL but, I am really excited about and looking forward to opportunities as a software developer and contributing to a team and imporoving my development skills.
        </h2>

        <h2>
          Outside of development I really enjoy gaming, strength training, mid day walks to get those steps in, and binging some anime every now and then. If you are wondering my Top 5 All-Time would have to be Mobile Suit Gundam (1979), Dragon Ball, Berserk (1997 and the manga), Ruroni Kenshin, and YuYu Hakusho. Honorable mention to Attack On Titan!
        </h2>

      </div>
    </div>
  )
}

export default Home
