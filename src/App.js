import './App.css';
import { About } from './Components/About/About';
import { Bio } from './Components/Bio/Bio';
import { Contact } from './Components/Contact/Contact';
import { Experience } from './Components/Experience/Experience';
import { Projects } from './Components/Projects/Projects';
import { Skills } from './Components/Skills/Skills';
import { Testimonial } from './Components/Testimonial/Testimonial';

function App() {
  return (
    <div className="App">
      <div className='leftContainer'>
        <Bio />

      </div>
      <div className='rightContainer'>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Testimonial />
        <Contact />
      </div>
    </div>
  );
}

export default App;
