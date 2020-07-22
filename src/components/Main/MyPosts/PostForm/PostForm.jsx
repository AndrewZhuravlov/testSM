import React from 'react';
import st from './PostForm.module.css'
import { textChangerActionCreator, addPostActionCreator} from '../../../../redux/main-reducer';



function PostForm(props) {

  let newPostElement = React.createRef();

  const textChanger = () => {

    let currentText = newPostElement.current.value;
    props.store.dispatch(textChangerActionCreator('textChange', currentText));

  }
  let addPost= ()=>{

    let text = newPostElement.current.value;
    props.store.dispatch(addPostActionCreator('AddPost', text));
  }
  
  return (

    <div className={st.postCreater}>
      <form action="#">
          <h2>My Posts</h2>
          <input onChange = {textChanger} ref={newPostElement} value ={props.store.getState.newPostText.text}   type="text" placeholder = 'your news...' />
          <button onClick={addPost}>Post</button>
      </form>
    </div>

  )
}
export default PostForm;