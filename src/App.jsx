
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import About from './components/About'
import Aboutme from './components/Aboutme'
import Projects from './components/Projects'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './components/StyleProject.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Header/>
       
       <Aboutme/>
       <About/>
       <Projects/>
      <Footer/>
    </>
  
  )
}

export default App
