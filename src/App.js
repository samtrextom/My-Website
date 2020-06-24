import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Main'
import About from './About'
import Portfolio from './Portfolio'
import Blog from './Blog'
import Contact from './Contact'
import NavBar from './NavBar'


function App() {
  return (
    <div className="App">
      <Main></Main>
      <NavBar></NavBar>
      <About></About>
      <Portfolio></Portfolio>
      <Blog></Blog>
      <Contact></Contact>
    </div>
  );
}

export default App;
