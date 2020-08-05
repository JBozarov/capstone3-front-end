import React from 'react';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import routes from './routes'
import './App.css';
import './App.sass'
import Admin from './components/admin/Admin.jsx';
import Products from './components/products/Products.jsx';
import AdminDetails from './components/adminDetails/AdminDetails';

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default App;
