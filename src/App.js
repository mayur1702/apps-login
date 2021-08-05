import React from 'react';
import AppRouter from './components/routes/AppRouter';
import "./App.scss"
import "./styles/generic.scss";
import { AppProvider } from './AppContext';

const App = () => {

  return (
    <AppProvider>
      <div className="app-container">
        <AppRouter />    
      </div>
    </AppProvider>
    
  )
};

export default App;