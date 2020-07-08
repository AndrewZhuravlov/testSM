import style from './Dialogs.module.css';
import React from 'react';
import Dialog from './Dialog/Dialog';
import MessageItem from './MessageItem/MessageItem';





/* тут мы преобразуем данные пришедшие с сервера в массив обьектов который в JSX читается */


/* messages constructor */

/* тут мы преобразуем данные пришедшие с сервера в массив обьектов который в JSX читается */


function Dialogs(props) {
let users = props.DATA[0].map(item => <Dialog path={item.path} name={item.name} />  )/* преобразуем в массив компонент */
let messages =  props.DATA[1].map(item=>  <MessageItem name={item.name} message = {item.message} id={item.id} /> )

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