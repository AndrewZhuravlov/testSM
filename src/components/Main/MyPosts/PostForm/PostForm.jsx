import React from 'react';
import st from './PostForm.module.css'


function PostForm() {
  return (

    <div className={st.postCreater}>
      <form action="#">
          <h2>My Posts</h2>
          <input type="text" placeholder = 'your news...' />
          <button>Post</button>
      </form>
    </div>

  )
}
export default PostForm;