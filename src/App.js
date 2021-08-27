import React from 'react';
import './fonts.css'
import './App.css';
import Header from './components/Header/Header.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import Profile from './components/Profile/Profile.jsx';


const App = () => {
  return (
<div className="App">
  <div className="container">
    <div className="page-wrapper">
      <Header />
      <Navigation />
      <Profile />
    </div>
  </div>
</div>
  );
}

export default App;
