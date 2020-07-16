import React from 'react';
import style from './aside.module.css'
import { NavLink } from 'react-router-dom';
function Aside(props) {
 
 let fellows = props.store.map(item=> <Fellow name = {item.name} path = {item.path}/>) 
 
  return (
    <aside className={style.nav}>
      <nav>
        <ul>
          <li ><NavLink activeClassName={style.active} /* className = {`${style.nav} ${style.active}`} */ to="/Profile">Profile</NavLink></li>
          <li><NavLink activeClassName={style.active} to="/music">Music</NavLink></li>
          <li><NavLink activeClassName={style.active} to="/messages">Messages</NavLink></li>
          <li><NavLink activeClassName={style.active} to="/news">News</NavLink></li>
          <li className={style.last}><NavLink activeClassName={style.active} to="settings">Settings</NavLink></li>
        </ul>
      </nav>
      <div className={style.fellows}>

        {fellows}

      </div>
    </aside>
  )
}


function Fellow(props) {
  return (
    <div id = {props.path}  className={style.fellowsItem}>
      <div className={style.ava}></div>
      <span>{props.name}</span> 
    </div>

  )
}
export default Aside;