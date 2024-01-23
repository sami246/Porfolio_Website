import './App.css';
import { AppProvider } from './contexts/AppContext';
import { MainApp } from './MainApp';

function App() {
  return (
    <AppProvider>
      <MainApp />
    </AppProvider>
  );
}

export default App;
