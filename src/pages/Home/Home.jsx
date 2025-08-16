import HomeLeftCtn from '../../components/HomeLeftCtn/HomeLeftCtn'
import HomeRightCtn from '../../components/HomeRightCtn/HomeRightCtn'
import './Home.css'

const Home = () => {
  return (
    <div className='home' >
      <div>
        <HomeLeftCtn/>
        <HomeRightCtn/>
      </div>  
    </div>
  )
}

export default Home
