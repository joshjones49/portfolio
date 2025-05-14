import './Contact.css'

import { useEffect, useState } from 'react'

const Contact = () => {

    const [githubData, setGithubData] = useState({avatar: '', bio: ''})

    const fetchGitHubData = async() => {
        try {
            const res = await fetch('https://api.github.com/users/joshjones49')
            const data = await res.json()
            setGithubData({
                avatar: data.avatar_url,
                bio: data.bio
            })
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchGitHubData()
    }, [])

  return (
    <div className='contact-page pages' >
        <div className='contact-ctn ctns' >

            <div className='info-div' >

                <div className='info-ctns' >
                    <h1>GitHub / <a href='https://github.com/joshjones49' target='_blank'>joshjones49</a></h1>
                    <img src={githubData.avatar} />
                    <h1>{githubData.bio}</h1>
                </div>

                <div className='info-ctns' >
                    <h1>LinkedIn / <a href='https://www.linkedin.com/in/joshjones49/' target='_blank'>joshjones49</a></h1>
                    <img src='https://media.licdn.com/dms/image/v2/D4E03AQGiZhy3ZykUQQ/profile-displayphoto-shrink_800_800/B4EZYtf2dyGgAc-/0/1744520070791?e=1752710400&v=beta&t=Xqt952KmYLNY1sf84ahBiC4-1zR9fdZX2Um6MrKQI5s' />
                </div>

                <div className='info-ctns' >
                      <h1><a href="mailto:joshjones200285@gmail.com?subject=Contact%20from%20Portfolio&body=Hello%20Joshua,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect." aria-label='"Send email to Josh'>joshjones200285@gmail.com</a></h1>
                      <img src='https://lh3.googleusercontent.com/a/ACg8ocIw7T5T_6QKmSOPoGPZwLnGN35hahG7rkdYrVRflxSK6nz8FQ=s360-c-no' />
                </div>

              </div>

        </div>
    </div>
  )
}

export default Contact
