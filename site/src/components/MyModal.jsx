import React, { useState } from 'react'

const MyModal = (props) => {
   
    if(props.isOpen === true) {
        return (
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={ () => props.setIsOpen(false)}>&times;</span>
                    <p>{props.children}</p>
                </div>
            </div>
        )
    }
}

export default MyModal