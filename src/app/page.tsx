import { Slider } from './slider'
import { Card } from './components/card'

const Home = () => {
  return (
    <>
      <div className='bg-white w-full h-screen'>
        <Card
          isCustom={false}
          imgSrc={'/pcimage/1.png'}
          pcName={'Creator RDY Y40BG201'}
          osVersion={'Windows 11 Pro'}
          cpuName={'Intel® Core™ 19-13900KF CPU'}
          gpuName={'GeForce RTX 4090 - 24GB'}
          diskDriveName={'2TB M.2 NVMe GEN4 SSD'}
          ramName={'32GB DDR5-6000MHz RGB RAM'}
          savePrice={'400'}
          currentPrice={'3545'}
          originalPrice={'3999'}
          moPrice={'172.07'}
        />
      </div>
    </>
  )
}

export default Home
