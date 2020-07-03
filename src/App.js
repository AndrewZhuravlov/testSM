import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Aside from './components/Aside/aside';
import Main from './components/Main/main';
import Dialogs from './components/Dialogs/Dialogs';


function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <Aside/>
     {/*  <Main/> */}
     <Dialogs  />
    </div>
  );
}



export default App;
