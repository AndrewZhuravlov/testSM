


let store = {
    rerenderEntireTree ()  {
        console.log('State changed');
    },

   
    dispatch(action){

        if(action.type === 'AddPost'){

            this._state.postsData.push({
                id: 6,
                message: action.postMes,
                likeCounter: 20,
            });
            

        }else if(action.type === 'textChange'){

            
            this._state.newPostText.text = action.newText
            this.rerenderEntireTree(this);

        }

    },
    
    subscribe(observer) {
        this.rerenderEntireTree = observer;  // observer
    },

    get getState(){
        return this._state;
    },

    _state: {
        postsData: [
            { id: 1, message: 'Privet', likeCounter: 20 },
            { id: 2, message: 'Tu Pityxxxx', likeCounter: 12 },
            { id: 3, message: 'Tu Pityxxxx', likeCounter: 12 },
            
        ],
        userData: [
             {name:'Andrew', path: 1},
             {name:'Helen', path: 2},
             {name:'Svin', path: 3},
             {name:'Alex', path: 4},
           
        ],
    
        fellows: [
            {name:'Andrew', path: 1},
            {name:'Helen', path: 2},
            {name:'Svin', path: 3},
        ],
    
        messageData: [
            {name:'Andrew', message: 'YO', id: 1},
            {name:'Andrew2', message: 'YO2', id: 2},
            
    
        ],

        newPostText:{
            text : 'write',
        },
    }

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

export default store;