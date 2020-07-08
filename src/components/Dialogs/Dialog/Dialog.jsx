
import style from './../Dialogs.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Dialog(props) {
    return (
        <li>
            <NavLink to={`/messages/${props.path}`} className={style.userName} activeClassName={style.active}>{props.name}</NavLink>
        </li>
    )
}
export default Dialog;