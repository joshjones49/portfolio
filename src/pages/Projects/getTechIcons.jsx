import { FileTypeAngular } from '../../components/SVGs/angular'
import { ReactIcon } from '../../components/SVGs/react'
import { Postgresql } from '../../components/SVGs/postgresql'
import { Java } from '../../components/SVGs/java'
import { Springboot } from '../../components/SVGs/springboot'
import { Nodejs } from '../../components/SVGs/node'
import { Javascript } from '../../components/SVGs/javascript'

const getTechIcon = (techName) => {
  const iconMap = {
    'Angular': <FileTypeAngular />,
    'React': <ReactIcon />,
    'PostgreSQL': <Postgresql />,
    'JavaScript': <Javascript />,
    'Java': <Java />,
    'Spring Boot': <Springboot className='spring-boot' />,
    'Express': <span className='expressjs'>ex</span>,
    'Node.js': <Nodejs />
  };
  
  return iconMap[techName] || <span style={{ fontSize: '50px', color: '#gray' }}>?</span>;
};

export default getTechIcon