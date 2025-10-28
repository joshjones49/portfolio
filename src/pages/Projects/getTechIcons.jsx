import { FileTypeAngular } from '../../components/SVGs/angular'
import { ReactIcon } from '../../components/SVGs/react'
import { Postgresql } from '../../components/SVGs/postgresql'
import { Java } from '../../components/SVGs/java'
import { Springboot } from '../../components/SVGs/springboot'
import { Nodejs } from '../../components/SVGs/node'
import { Javascript } from '../../components/SVGs/javascript'
import { Html5 } from '../../components/SVGs/html'
import { Css3 } from '../../components/SVGs/css'

export const iconMap = {
  'Angular': <FileTypeAngular />,
  'React': <ReactIcon />,
  'PostgreSQL': <Postgresql />,
  'JavaScript': <Javascript />,
  'Java': <Java />,
  'Spring Boot': <Springboot className='spring-boot' />,
  'Express': <span className='expressjs'>ex</span>,
  'Node.js': <Nodejs />,
  'HTML': <Html5 />,
  'CSS': <Css3 />
};

const getTechIcon = (techName) => {
  return iconMap[techName] || <span style={{ fontSize: '50px', color: '#gray' }}>?</span>;
};

export default getTechIcon