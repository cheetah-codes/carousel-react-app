
import './App.css'
import { Carousel } from './components/Carousel'
import {slide} from './data/carousel.json'

function App() {
  return (
    <>
      <div className='App'> 

        <Carousel data={slide} />
      </div>
    
    </>
  )
}

export default App
