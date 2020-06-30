import React from 'react';

function Aside(){
    return(
        <aside className='nav'>
        <nav>
          <ul>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Music</a></li>
            <li><a href="#">Message</a></li>
            <li><a href="#">News</a></li>
            <li className="last"><a href="#">Settings</a></li>
          </ul>
        </nav>
      </aside>
    )
}
export default Aside;