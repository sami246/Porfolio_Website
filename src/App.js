import { Analytics } from '@vercel/analytics/react';
import './App.css';
import { AppProvider } from './contexts/AppContext';
import ModalContainer from './routes/ModalContainer';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Analytics />
        <ModalContainer />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
