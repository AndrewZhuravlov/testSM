
import style from './../Dialogs.module.css';
import React from 'react';


function MessageItem(props) {

    let message = React.createRef();

    function sendMessage(){
       let textMessage= message.current.value;
    }


    return (
        <div className={style.messageHistoryItem}>
            <div className={style.person}>
                <img src="https://c7.hotpng.com/preview/472/833/87/emoji-hug-smiley-emoticon-angry-emoji.jpg" alt="" />
                <span>{props.name}</span>
            </div>
            <div className={style.dialogMess}>
             <span>
                 {props.message}
            </span>
            <input ref={message} type="text"/>
            <button onClick={sendMessage} >Send Message</button>
            </div>
        </div>
    )
}
export default MessageItem;