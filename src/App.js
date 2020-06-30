import React from 'react';
import './App.css';
import Header from './components/header';
import Aside from './components/aside';
import Main from './components/main';


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
