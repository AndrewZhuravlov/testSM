import React from 'react';
import style from './aside.module.css'
import { NavLink } from 'react-router-dom';
function Aside(){
    return(
        <aside className={style.nav}>
        <nav>
          <ul>
            <li ><NavLink activeClassName ={style.active} /* className = {`${style.nav} ${style.active}`} */ to="/Profile">Profile</NavLink></li>
            <li><NavLink activeClassName ={style.active} to="/music">Music</NavLink></li>
            <li><NavLink activeClassName ={style.active} to="/messages">Message</NavLink></li>
            <li><NavLink activeClassName ={style.active} to="/news">News</NavLink></li>
            <li className={style.last}><NavLink activeClassName ={style.active} to="settings">Settings</NavLink></li>
          </ul>
        </nav>
      </aside>
    )
}
export default Aside;