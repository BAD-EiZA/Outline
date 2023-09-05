
import Hero from './components/Hero'
import Demo from './components/Demo'
import './App.css'  
import Introduce from './components/Introduce'
import Reason from './components/Reason'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { motion, AnimatePresence } from "framer-motion";
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
        <motion.div className="divider"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 2.10 }}></motion.div> 
        <Introduce/>
        <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 2.40 }} className="divider"></motion.div> 
        <Projects/>
        <Footer/>
      </div>
    </main>
  )
}

export default App