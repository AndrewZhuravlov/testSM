
import style from './../Dialogs.module.css';
import React from 'react';


function MessageItem(props) {
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
            </div>
        </div>
    )
}
export default MessageItem;