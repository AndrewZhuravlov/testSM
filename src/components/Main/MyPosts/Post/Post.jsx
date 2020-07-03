import React from 'react';
import st from './Post.module.css'


function Post(props) {
  return (

    
      <div className={st.currentPosts}>
        <img src="https://besthqwallpapers.com/Uploads/31-10-2019/110142/thumb2-black-leather-texture-close-up-leather-textures-leather-texture-background-black-backgrounds.jpg" alt=""/>
  {props.message} <span>like {props.likeCounter}</span>
      </div>
    

  )
}
export default Post;