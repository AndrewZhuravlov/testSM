import React from 'react';
import st from './PostForm.module.css'


function PostForm(props) {
console.log(props);
  let newPostElement = React.createRef();

  let addPost= ()=>{
    
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  }
  
  return (

    <div className={st.postCreater}>
      <form action="#">
          <h2>My Posts</h2>
          <input ref={newPostElement}   type="text" placeholder = 'your news...' />
          <button onClick={addPost}>Post</button>
      </form>
    </div>

  )
}
export default PostForm;