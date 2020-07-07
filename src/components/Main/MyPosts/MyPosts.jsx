import React from 'react';
import st from './MyPosts.module.css'
import PostForm from './PostForm/PostForm'
import Post from './Post/Post';

function MyPosts() {
  return (

    <div className={st.myPosts}>
      <PostForm />
      <Post message = {postsData[0].message}  likeCounter = {postsData[0].likeCounter} id = {postsData[0].id}/>
      <Post message = {postsData[1].message}  likeCounter = {postsData[1].likeCounter} id = {postsData[1].id} />
      
    </div>

  )
}

/* типа данные с сервера */
let postsData = [
  {id: 1, message: 'Privet', likeCounter: 20, },
  {id: 2, message: 'Tu Pityxxxx', likeCounter: 12, }
]
export default MyPosts;