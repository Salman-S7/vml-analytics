import { Button } from "../components/ui/ButtonCoolBorders"
import { BackgroundGradientAnimation } from "../components/ui/WavvyBg"
// import { img } from '../assets/home_screen_logo.avif'

const Home = () => {
  return (
      <BackgroundGradientAnimation>
          <div className="font-mono sm:flex-row flex flex-col w-full h-[100vh] gap-16 sm:justify-between justify-center items-center sm:px-32 px-4 pt-12 sm:pt-0 z-100">
              <div className="flex flex-col sm:gap-5 gap-2 w-[100%] sm:w-auto text-center justify-center items-center">
                <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 font-extrabold sm:text-6xl text-4xl">Vector ML Analytics<span className="rounded-full bg-[#3b82f6] h-3 w-3 text-[#3b82f6] inline-block"></span></p>
                <p className="font-bold text-white">Financial Modeling for Banks and Lenders.</p>
                  <div className="flex justify-start sm:gap-10 gap-3 items-center w-[90%]">
                      <Button>
                          Request Demo
                      </Button>
                      <Button>
                          Learn More
                   </Button>
                  </div>  
              </div>
              <div className="sm:w-[70%]">
                  <img className="object-cover" src='src/assets/home_screen_logo.avif' alt="" />
              </div>
              
          </div>
      </BackgroundGradientAnimation>
  )
}

export default Home