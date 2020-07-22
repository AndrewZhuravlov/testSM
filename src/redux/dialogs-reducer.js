export const dialogReducer = (state, action) =>{

    switch(action.type){

        case 'messageCurrentText': 
        state.newMessageText.text = action.currentText;
            return state;
        case 'postNewMessage':
        state.messageData.push({name:'Andrew2', message: action.currentMessages, id: 2},)
            return state;  
        default: 
            return state;
    }
}

export const messageCurrentTextCreator = (typeOfAction, varValue) =>{

    return {
  
        type: typeOfAction,
        currentText: varValue,
    
      }

};

export const postNewMessageCreator = (typeOfAction, varValue) =>{

    return {
  
        type: typeOfAction,
        currentMessages: varValue,
    
      }

}