import React from 'react'
import styles from './button.module.scss';
import classNames from 'classnames';

export default function Button({ btnStyle, text, outline, icon, send, onClick, isBtnLoading = false }) {
  return (
    <div className={classNames(styles.button, outline ? styles.outline : "", btnStyle ? styles.btnStyle : "")}>

      <button onClick={onClick}>
        {text}
        {icon}
        {isBtnLoading && <span className={styles.loader}></span>}
      </button>
    </div >
  )
}
