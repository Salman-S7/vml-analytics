import { Button } from "../components/ui/ButtonCoolBorders"
import { BackgroundGradientAnimation } from "../components/ui/WavvyBg"
// import { img } from '../assets/home_screen_logo.avif'

const Home = () => {
  return (
      <BackgroundGradientAnimation>
          <div className="font-mono sm:flex-row flex flex-col w-full h-[100vh] justify-between items-center px-32 z-100">
              <div className="w-[46%] flex flex-col h-[30%] gap-5">
                <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 font-extrabold text-6xl">Vector ML Analytics <span className="rounded-full bg-[#3b82f6] text-[#3b82f6]"></span></p>
                <p className="font-bold text-white">Financial Modeling for Banks and Lenders.</p>
                  <div className="flex justify-start gap-10 items-center">
                      <Button>
                          Request Demo
                      </Button>
                      <Button>
                          Learn More
                   </Button>
                  </div>  
              </div>
              <div className="w-[50%]">
                  <img className="object-cover" src='src/assets/home_screen_logo.avif' alt="" />
              </div>
              
          </div>
      </BackgroundGradientAnimation>
  )
}

export default Home