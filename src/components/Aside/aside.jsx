import React from 'react';
import style from './aside.module.css'
function Aside(){
    return(
        <aside className={style.nav}>
        <nav>
          <ul>
            <li ><a className = {`${style.nav} ${style.active}`} href="#">Profile</a></li>
            <li><a href="#">Music</a></li>
            <li><a href="#">Message</a></li>
            <li><a href="#">News</a></li>
            <li className={style.last}><a href="#">Settings</a></li>
          </ul>
        </nav>
      </aside>
    )
}
export default Aside;