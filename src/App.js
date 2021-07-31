import React from 'react';
import AppRouter from './components/routes/AppRouter';
import "./App.scss"
import "./styles/generic.scss";

const App = () => {
  return (
    <div className="app-container">
      <AppRouter />    
    </div>
  )
};

export default App;