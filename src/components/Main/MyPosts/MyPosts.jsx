import React from 'react';
import st from './MyPosts.module.css'
import PostForm from './PostForm/PostForm'
import Post from './Post/Post';

function MyPosts() {
  return (

    <div className={st.myPosts}>
      <PostForm />
      <Post message = 'Privet'  likeCounter = '20'/>
      <Post message = 'Tu Pityx' likeCounter = '15' />
      
    </div>

  )
}
export default MyPosts;