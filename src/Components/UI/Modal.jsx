import React from 'react';
import style from '../../css/modal.module.css'

const Modal = ({ children, visible, setVisible}) => {

    let rootClass = [style.modal]
    if (visible) {
        rootClass.push(style.active)
    }

    return(
        <div className={rootClass.join(' ')} onClick={()=>setVisible(false)}>
            <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal
