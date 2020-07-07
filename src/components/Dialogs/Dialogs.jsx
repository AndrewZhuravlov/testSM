import style from './Dialogs.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';



function Dialogs(props) {

    return (
        <div className={style.dialogWrap}>
            <div className={style.userNameWrap}>
                <ul>
                    <Dialog path={userData[0].path} name={userData[0].name} />
                    <Dialog path={userData[1].path} name={userData[1].name} />
                    <Dialog path={userData[2].path} name={userData[2].name} />
                    <Dialog path={userData[3].path} name={userData[3].name} />
                    <Dialog path={userData[4].path} name={userData[4].name} />
                </ul>
            </div>
            <div className={style.messageHistory}>
                <MessageItem  message = {messageData[0].message} id={messageData[0].id} />
                <MessageItem  message =  {messageData[1].message} id={messageData[1].id}/>
            </div>
        </div>
    )

}




function Dialog(props) {
    return (
        <li>
            <NavLink to={`/messages/${props.path}`} className={style.userName} activeClassName={style.active}>{props.name}</NavLink>
        </li>
    )
}

function MessageItem(props) {
    return (
        <div className={style.messageHistoryItem}>
            <div className={style.person}>
                <img src="https://c7.hotpng.com/preview/472/833/87/emoji-hug-smiley-emoticon-angry-emoji.jpg" alt="" />
                <span>Andrew</span>
            </div>
            <div className={style.dialogMess}>
             <span>
                 {props.message}
            </span>
            </div>
        </div>
    )
}

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

/* messages constructor */
function Mes(message, id){
    
    this.id = id;
    this.message = message;
}
let messageData=[
    new Mes('YO', 1),
    new Mes('YO2', 2),
    
]
export default Dialogs;