import React from 'react';
import st from './main.module.css'


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
        <div className={st.myPosts}>
          <div className={st.postCreater}>
              inputttt
          </div>
          <div className={st.currentPosts}>
              postsss
          </div>
        </div>
      </main>
    )
}
export default  Main;