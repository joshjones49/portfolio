import './Home.css'
import { LocationRipple24 } from '../../components/SVGs/location'
import { iconMap } from '../Projects/getTechIcons'

const Home = () => {
  return (
    <main className="home pages">
      <div className="header">
        <p className="eyebrow">U.S. Army Veteran</p>
        <h1>Josh Jones</h1>
        <p className="role">Full-Stack Software Developer</p>
        <div className="location">
          <LocationRipple24 aria-hidden="true" />
          <span>Hawley, TX</span>
        </div>
      </div>

      <div className="summary-ctn">
        <section className="hobbies home-ctns" aria-labelledby="about-heading">
          <h2 id="about-heading">About me</h2>
          <p className="about-bio">
            U.S. Army veteran and software developer living in Hawley, Texas. My projects range from full-stack applications built with React, Angular, Java/Spring Boot, and PostgreSQL to a C++ telemetry simulation focused on concurrency, memory management, and automated testing. Alongside my development side projects, I troubleshoot datacenter hardware and network connectivity at Oracle, building on earlier experience in technical research and data analysis. I'm currently pursuing my online bachelor's degree in Computer Science at Louisiana State University of Alexandria (LSUA), deepening my understanding of the systems behind the software I build.
          </p>
        </section>

        <section className="skills home-ctns" aria-labelledby="tech-heading">
          <h2 id="tech-heading">Technologies &amp; languages</h2>
          <div className="tech">
            {Object.entries(iconMap).map(([name, icon]) => (
              <div key={name} className="tech-item">
                <div aria-hidden="true">{icon}</div>
                <span>{name}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home
