import { FileTypeAngular } from '../../components/SVGs/angular'
import { ReactIcon } from '../../components/SVGs/react'
import { Postgresql } from '../../components/SVGs/postgresql'
import { Java } from '../../components/SVGs/java'
import { Springboot } from '../../components/SVGs/springboot'
import { Nodejs } from '../../components/SVGs/node'
import { Javascript } from '../../components/SVGs/javascript'
import { SiDocker, SiGit, SiKubernetes, SiLinux } from 'react-icons/si'

export const iconMap = {
  'Angular': <FileTypeAngular />,
  'React': <ReactIcon />,
  'PostgreSQL': <Postgresql />,
  'JavaScript': <Javascript />,
  'Java': <Java />,
  'Git': <SiGit color='#F05032' />,
  'Docker': <SiDocker color='#2496ED' />,
  'Kubernetes': <SiKubernetes color='#326CE5' />,
  'Linux': <SiLinux color='black' />,
  'Node.js': <Nodejs />,
  'Spring Boot': <Springboot className='spring-boot' />,
  'Express': <span className='expressjs'>ex</span>,
  'C++': <span className='cpp-icon'>C++</span>
};

const getTechIcon = (techName) => {
  return iconMap[techName] || <span style={{ fontSize: '50px', color: '#gray' }}>?</span>;
};

export default getTechIcon