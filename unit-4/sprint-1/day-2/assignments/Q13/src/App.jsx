import React from 'react';
import './App.css';
import Header from './components/Header';
import PlanList from './components/PlanList';

function App() {
  return (
    <div className="app">
      <Header />
      <PlanList />
    </div>
  );
}

export default App;