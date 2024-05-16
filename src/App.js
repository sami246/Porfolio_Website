import { Analytics } from '@vercel/analytics/react';
import './App.css';
import { AppProvider } from './contexts/AppContext';
import { MainApp } from './MainApp';



function App() {
  return (
    <AppProvider>
      <Analytics />
      <MainApp />
    </AppProvider>
  );
}

export default App;
