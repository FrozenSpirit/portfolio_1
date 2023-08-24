import './App.css';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';
import styles from './style';


function App() {
  return (
    
    <div className=' w-full overflow-hidden'>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Projects/>
      <TechnicalSkills/>
      <Footer/>
      
    </div>

    

    /*
<div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
    */

  );
}

export default App;
