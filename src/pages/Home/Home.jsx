import './Home.css'

import { IoLocationSharp } from "react-icons/io5";

const Home = () => {

  return (
    <div className='home pages' >

      <div className='header' >
        <h1>Josh Jones</h1>
        <h1>U.S. Army Veteran</h1>
        <h1>Full-Stack Software Developer</h1>
        <div className='location'>
          <IoLocationSharp /> <h3>Marietta, GA</h3>
        </div>
        
      </div>

      <div className='summary-ctn'>

        <h2>
          It is important to be a life-long learner and to make continous efforts to improve yourself. <br />
          Full-stack developer with a more recent focus on back-end development using Java. <br />
          I feel a strong connection with software development because it allows your creativity and logic to be put into action through a technological service that people can use to solve their problems or just have fun with.
        </h2>

        <h2>
          Outside of software development I enjoy quite a few activties and hobbies: <br />
          <ul>
            <li>Gaming</li>
            <li>Gun range</li>
            <li>Strength Training</li>
            <li>Anime</li>
            <li>Guitar</li>
          </ul>
          Besides software development I have experience as a data analyst and am currently <span>(as of Sept. 8, 2025)</span> attending trade school to become an HVAC technician.
        </h2>

      </div>
    </div>
  )
}

export default Home
