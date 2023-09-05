
import Hero from './components/Hero'
import Demo from './components/Demo'
import './App.css'  
import Introduce from './components/Introduce'
import Reason from './components/Reason'
import Projects from './components/Projects'
import Footer from './components/Footer'

const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient'/>
      </div>

      <div className='app'>
        <Hero/>
        <Demo/>
        <Reason/>
        <div className="divider"></div> 
        <Introduce/>
        <div className="divider"></div> 
        <Projects/>
        <Footer/>
      </div>
    </main>
  )
}

export default App