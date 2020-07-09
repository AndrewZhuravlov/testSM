import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Aside from './components/Aside/aside';
import Main from './components/Main/main';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';


function App(props) {
 console.log(props);
 
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Aside />
        <Route path='/profile' render={()=><Main state ={props.state.postsData} />} />
        <Route path='/messages' render={()=><Dialogs state={props.state.forDialogsData} />} />
        <Route path='/music' component={Music} />
        <Route path='/news' component={News} />
        <Route path='/settings' component={Settings } />


      </div>
    </BrowserRouter>
  );
}



export default App;
