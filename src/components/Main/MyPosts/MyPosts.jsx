import React from 'react';
import st from './MyPosts.module.css'
import PostForm from './PostForm/PostForm'
import Post from './Post/Post';

function MyPosts(props) {
  /* типа данные с сервера */
  /* тут мы преобразуем данные пришедшие с сервера в массив обьектов который в JSX читается */
  let posts = props.postsData.map(item=>  <Post message = {item.message}  likeCounter = {item.likeCounter} id = {item.id} />)


    
  return (

    <div className={st.myPosts}>
      <PostForm />
      {posts}
     
    </div>

  )
}









export default MyPosts;