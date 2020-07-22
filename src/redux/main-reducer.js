
const postReducer = (state, action)=>{
    console.log(state, action);
    if(action.type === 'AddPost'){

        state.postsData.push({
            id: 6,
            message: action.postMes,
            likeCounter: 20,
        });
        

    }else if(action.type === 'textChange'){

        
        state.newPostText.text = action.newText;
        

    }
    return state;

}

export const textChangerActionCreator = (typeOfAction, varValue) => {

    return {
  
      type: typeOfAction,
      newText: varValue,
  
    }
  
  }
  
export const addPostActionCreator = (typeOfAction, varValue) => {
  
    return {
  
      type: typeOfAction,
      postMes: varValue,
  
    }
  
  }
export default postReducer;