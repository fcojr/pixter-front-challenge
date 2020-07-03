import React, { useState } from 'react'
import './Book.scss'

function Book(props) {

    const handleOpen = () => {
        setModal(true)
    }

    const handleClose = () => {
        setModal(false)
    }

    const [modal, setModal] = useState(false)

    return (
        <div className='book'>
            {props.thumbnail
                ? <img onClick={handleOpen} src={props.thumbnail} />
                : <p onClick={handleOpen}>{props.title}<br />No image available</p>
            }
            { modal && 
                <div className='modal'>
                    <div className='modal-content'>
                        <header>
                            <h3>{props.title} ({props.publishedDate})</h3>
                            <span onClick={handleClose}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" enableBackground="new 0 0 40 40">
                                    <line x1="15" y1="15" x2="25" y2="25" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10"></line>
                                    <line x1="25" y1="15" x2="15" y2="25" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10"></line>    
                                </svg>
                            </span>
                        </header>
                        {props.thumbnail
                            ? <img src={props.thumbnail} alt={props.title} />
                            : <p>No image found.</p>
                        } 
                        {props.description
                            ? <p>{props.description}</p>
                            : <p>No description found.</p>
                        }
                    </div>
                </div> 
            }
        </div>
    )
}

export default Book
