
/* типа данные с сервера */
/* user constructor */
/* mesasges constructor */

let store = {
    addPost: function addPost(postMes) {


        return this._state.postsData.push({
            id: 6,
            message: postMes,
            likeCounter: 20,
        });

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
    }

}



export default store;