import './About.css'

const About = () => {
  return (
    <div className='about-page pages' >

      <div className="about-ctn ctns" >

        <div className='about-top' >
            <div className='profile-pic pic' ></div>
            <h1>Joshua Jones</h1>
        </div>

        <div className='about-mid' >
            <h3>Front-end: JavaScript | React | Angular</h3>
            <h3>Back-end: Node | Java | Spring-Boot</h3>
        </div>

        <div className='p-div' >
            <p>
                Hello! <br/>
                I am Joshua Jones a full-stack developer based out of Nashville, TN. <br/>
                Before I entered the world of software development I served in the US Army as a Cavalry Scout for 6 years. <br/>
                I was sationed at Ft. Campbell, KY (2017-2020), then reenlisted and moved to Ft. Hood, TX (2020-2023) where I was promoted to SGT and served as a team leader and then received more responsibilities as section leader. <br/>
                During my last year in the Army I found out about the Galvanize/Hack Reactor Coding Bootcamp that was starting that October. <br/>
                Though I had no previous experience with software devlopment or computer science, I decided to give it a try and complete the pre-course work to see if I could learn enough to pass the acceptance interview, which I did.<br/>
                While enrolled in the bootcamp I learned both front and backend technologies with the PERN stack. <br/>
                After completing the bootcamp I started looking for work as a developer but neever had any luck. <br/>
                I worked as an unloader for the AWG warehouse through Capstone and then switched jobs to working as the IT Specialist for the new Ferguson warehouse in Lebanon, TN. <br/>
                During the time I was working I had a friend who worked for Bridgestone Americas as the Sr. Education Learning Analyst who was switching roles within the company. <br/>
                After having a converation she decided she would recommend me for the job so I started learning what I could of data analytics and completed the IBM certifcate. <br/>
                A few weeks later I had a few interviews over the course of 2 weeks and wes hired on. <br/>
                After 8 months I was laid off, which landed me in the Cook Systems Fast-Track Program where I learned Java, Spring-Boot, and Angular.
            </p>
        </div>
      </div>
    </div>
  )
}

export default About
