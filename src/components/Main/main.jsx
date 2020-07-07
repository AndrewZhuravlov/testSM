import React from 'react';
import st from './main.module.css'
import MyPosts from './MyPosts/MyPosts';



function Main(){
    return(
        <main className={st.main}>
        
        <AboutMe/>
        <MyPosts/>
      </main>
    )
}
export default  Main;



function AboutMe(props){
  return(
    <div className={st.aboutMe}>
    <div className={st.ava}>
        image
    </div>
    <div className={st.description}>
        desc
    </div>
  </div>
  )
}