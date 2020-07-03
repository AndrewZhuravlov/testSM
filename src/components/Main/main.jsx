import React from 'react';
import st from './main.module.css'
import MyPosts from './MyPosts/MyPosts';


function Main(){
    return(
        <main className={st.main}>
        
        <div className={st.aboutMe}>
          <div className={st.ava}>
              image
          </div>
          <div className={st.description}>
              desc
          </div>
        </div>
        <MyPosts/>
      </main>
    )
}
export default  Main;