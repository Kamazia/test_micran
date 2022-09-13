import React, {useState,useEffect} from 'react'
import './modal.css'

const Modal =({active,setActive,children}) => {
    return(
        <div className={active ? 'modal active':'modal'}>
            <div className="model_content" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}


export default Modal