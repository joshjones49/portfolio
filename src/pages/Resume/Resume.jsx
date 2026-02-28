import './Resume.css'

import { IoMdDownload } from "react-icons/io";
import resumePDF from '../../assets/SD_Joshua_Jones_4.pdf';
import resumeObj from './resume.mjs'

const Resume = () => {
  return (
    <div className='resume pages' >

      <div className='resume-form'>
        
        <h2>SOFTWARE DEVELOPER PROJECTS</h2>
        {resumeObj.projectList.map((project, index) => (
          <div key={index}>
            <h4>{project.title} | {project.stack} | {project.date}</h4>
            <ul>
              {project.bullets.map((item, bulletIndex) => (
                <li key={bulletIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        <h2>PROFESSIONAL EXPERIENCE</h2>
        {resumeObj.professionalExperience.map((job, index) => (
          <div key={index}>
            <h4>
              {job.company} | {job.role}
              {job.location ? ` | ${job.location}` : ''} | {job.date}
            </h4>
            <ul>
              {job.bullets.map((item, bulletIndex) => (
                <li key={bulletIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        <h2>MILITARY EXPERIENCE</h2>
        <div>
          <h4>
            {resumeObj.militaryExperience.company} | {resumeObj.militaryExperience.role} | {resumeObj.militaryExperience.location} | {resumeObj.militaryExperience.date}
          </h4>
          <ul>
            {resumeObj.militaryExperience.bullets.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <h2>EDUCATION & CERTIFICATES</h2>
        <ul>
          {resumeObj.educationAndCertificates.map((item, index) => (
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
