import HomeLeftCtn from '../../components/HomeLeftCtn/HomeLeftCtn'
import HomeRightCtn from '../../components/HomeRightCtn/HomeRightCtn'
import './Home.css'

const Home = () => {
  return (
    <div className='home' >
      <HomeLeftCtn/>
      <HomeRightCtn/>
    </div>
  )
}

export default Home
