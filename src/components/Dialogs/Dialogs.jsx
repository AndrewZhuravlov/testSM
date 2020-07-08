import style from './Dialogs.module.css';
import React from 'react';
import Dialog from './Dialog/Dialog';
import MessageItem from './MessageItem/MessageItem';


/* типа данные с сервера */
/* user constructor */

function User(name, path){
    
    this.path = path;
    this.name = name;
}

let userData=[
     new User('Andrew', 1),
     new User('Helen', 2),
     new User('Antony', 3),
     new User('Svin', 4),
     new User('Alex', 5),

]
/* тут мы преобразуем данные пришедшие с сервера в массив обьектов который в JSX читается */
let users = userData.map(item => <Dialog path={item.path} name={item.name} />  )/* преобразуем в массив компонент */

/* messages constructor */
function Mes(message, id){
    
    this.id = id;
    this.message = message;
}
let messageData=[
    new Mes('YO', 1),
    new Mes('YO2', 2),
    
]
/* тут мы преобразуем данные пришедшие с сервера в массив обьектов который в JSX читается */
let messages = messageData.map(item=>  <MessageItem  message = {item.message} id={item.id} /> )

function Dialogs(props) {

    return (
        <div className={style.dialogWrap}>
            <div className={style.userNameWrap}>
                <ul>

                    {users}
                   
                </ul>
            </div>
            <div className={style.messageHistory}>
               
              {messages}

            </div>
        </div>
    )

}









export default Dialogs;