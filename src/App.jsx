import gsap from 'gsap'

import './App.css'

import HeroSection from './sections/HeroSection/HeroSection'
import PlaySection from './sections/PlaySection/PlaySection'
import GameDesSection from './sections/GameDesSection/GameDesSection'
import GameDesCard from './components/GameDesCard/GameDesCard'

import paavalan from './assets/paavalan.webp'
import video1 from './assets/video1.webm'

import smallBoi from './assets/small-boi.webp'
import video2 from './assets/video2.webm'

import venba from './assets/venba.webp'
import Slider from './components/Slider/Slider'
import Footer from './components/Footer/Footer'



function App() {
  return (
    <>
      <HeroSection />
      <PlaySection />
      <GameDesSection />
      <div className="home-des-container">
        <GameDesCard
          headingText={'Discover a heartfelt story of family, love, loss, and more'}
          pngImage={paavalan}
          videoSrc={video1}
          hOneText={'Explore, Converse, Experience'}
          pText={'Get to know the family well, hold branching conversations, and explore as you face the challenges that arise from day to day life'}
          no={1}
        />
        <GameDesCard
          no={2}
          headingText={'Cook and learn authentic food from regional South Indian cuisine'}
          pngImage={smallBoi}
          videoSrc={video2}
          hOneText={'Cook Mouth Watering Dishes'}
          pText={'Venba\'s recipe book gets damaged when she moves to Canada. Restore the lost recipes to cook delicious, mouth-watering dishes that serve as a connection to the home left behind'}
        />

        <GameDesCard
          no={3}
          headingText={'Immerse yourself in a beautifully crafted world inspired by South Indian culture'}
          pngImage={venba}
          videoSrc={video1}
          hOneText={'Stunning Visuals and Authentic Soundscapes'}
          pText={'Experience the rich, vibrant visuals that bring South Indian culture to life. The game\'s authentic soundscapes, featuring traditional music and ambient sounds, immerse you in Venba\'s journey and enhance the emotional depth of her story'}
        />

      </div>
      <Slider />

      <Footer />
    </>
  )
}

export default App
