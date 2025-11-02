import './Resume.css'

import { IoMdDownload } from "react-icons/io";
import resumePDF from '../../assets/SD_Joshua_Jones3.pdf';
import resumeObj from './resume.mjs'

const Resume = () => {
  return (
    <div className='resume pages' >

      <div className='resume-form'>
        <h2>EDUCATION</h2>
        <h4>{resumeObj.Education[0]}</h4>
        <h4>{resumeObj.Education[1]}</h4>
        <h2>PROJECTS</h2>
        <h4>SmartCard | Full-Stack</h4>
        <ul>
          {resumeObj.SmartCardList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h4>Project Management Dashboard | Full-Stack</h4>
        <ul>
          {resumeObj.PMDList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2>PROFESSIONAL EXPERIENCE</h2>
        <h4>{resumeObj.BSAList.name} | {resumeObj.BSAList.position} | {resumeObj.BSAList.location} </h4>
        <ul>
          {resumeObj.BSAList.accs.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2>MILITARY EXPERIENCE</h2>
        <h4>U.S. Army | Fort Hood, TX | Cavalry Scout Section Leader</h4>
        <ul>
          {resumeObj.Military.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="download-btn">
        <IoMdDownload />
        <a href={resumePDF} download="Joshua_Jones.pdf">
          Download
        </a>
      </div>
    </div>
  )
}

export default Resume
