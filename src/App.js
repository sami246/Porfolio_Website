import './App.css';
import { Bio } from './Components/Bio/Bio';

function App() {
  return (
    <div className="App">
      <div className='boxContainer'>
        <Bio />

      </div>
      <div className='boxContainer'>
        Right Box
      </div>
    </div>
  );
}

export default App;
