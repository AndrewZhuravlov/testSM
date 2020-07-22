import style from './Dialogs.module.css';
import React from 'react';
import Dialog from './Dialog/Dialog';
import MessageItem from './MessageItem/MessageItem';
import { messageCurrentTextCreator, postNewMessageCreator } from '../../redux/dialogs-reducer';





/* тут мы преобразуем данные пришедшие с сервера в массив обьектов который в JSX читается */


/* messages constructor */

/* тут мы преобразуем данные пришедшие с сервера в массив обьектов который в JSX читается */


function Dialogs(props) {
    
let users = props.store.getState.userData.map(item => <Dialog path={item.path} name={item.name} />  )/* преобразуем в массив компонент */
let messages =  props.store.getState.messageData.map(item=>  <MessageItem name={item.name} message = {item.message} id={item.id} answer = {props.store._state.answer} /> )

const newMesLetter = (ev) =>{

    let currentText = ev.target.value;
    props.store.dispatch(messageCurrentTextCreator('messageCurrentText', currentText))

};
let contentMes = React.createRef();
const postMessage = () => {
    
    props.store.dispatch(postNewMessageCreator('postNewMessage', contentMes.current.value))

}
    return (
        <div className={style.dialogWrap}>
            <div className={style.userNameWrap}>
                <ul>

                    {users}
                   
                </ul>
            </div>
            <div className={style.messageHistory}>
               
              {messages}
                <input ref = {contentMes} value ={props.store._state.newMessageText.text} type="text" placeholder = "your message" onChange = {newMesLetter}/>
                <button onClick = {postMessage} type= "submit">Send</button>
            </div>
        </div>
    )

}









export default Dialogs;