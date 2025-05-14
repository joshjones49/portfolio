import './Resume.css'

import resume from './SD_Joshua_Jones.pdf'

const Resume = () => {
  return (
    <div className='resume-page pages' >
        <div className='resume-ctn ctns' >
            <embed type='application/pdf' src={resume}/>
        </div>
    </div>
  )
}

export default Resume
