
import './App.css';
import React from 'react';
import Nav from './components/Nav';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './router/AppRoutes';
import { PizzasProvider } from './context/PizzasContext';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <PizzasProvider>
      <Router>
        <Nav />
        <AppRoutes />
        <Footer />
      </Router>
      </PizzasProvider>
    </div>
  );
}

export default App;
