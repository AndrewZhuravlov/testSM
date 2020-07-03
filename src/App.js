import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Aside from './components/Aside/aside';
import Main from './components/Main/main';


function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <Aside/>
      <Main/>
    </div>
  );
}



export default App;
