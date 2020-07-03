import React from 'react'
import tablet from './tablet.png'
import './Presentation.scss'

function Presentation() {
    return (
        <div className='presentation container'>
            <div className='text'>
                <h1>Pixter Digital Books</h1>
                <h2>Lorem ipsum dolor sit amet? consectetur elit, volutpat.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta lobortis sit</p>
                <ul className='icons'>
                    <li>
                        <svg width="27" height="31" viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.1611 16.3682C22.1475 13.8594 23.2822 11.9658 25.5791 10.5713C24.2939 8.73242 22.3525 7.7207 19.7891 7.52246C17.3623 7.33105 14.71 8.9375 13.7393 8.9375C12.7139 8.9375 10.3623 7.59082 8.5166 7.59082C4.70215 7.65234 0.648438 10.6328 0.648438 16.6963C0.648438 18.4873 0.976562 20.3376 1.63281 22.2471C2.50781 24.7559 5.66602 30.9082 8.96094 30.8057C10.6836 30.7646 11.9004 29.582 14.1426 29.582C16.3164 29.582 17.4443 30.8057 19.3652 30.8057C22.6875 30.7578 25.5449 25.166 26.3789 22.6504C21.9219 20.5518 22.1611 16.498 22.1611 16.3682ZM18.292 5.14355C20.1582 2.92871 19.9873 0.912109 19.9326 0.1875C18.2852 0.283203 16.3779 1.30859 15.291 2.57324C14.0947 3.92676 13.3906 5.60156 13.541 7.48828C15.3252 7.625 16.9521 6.70898 18.292 5.14355Z" fill="black"/>
                        </svg>
                    </li>
                    <li>
                        <svg width="27" height="31" viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.3125 11.9795V19.8955C4.3125 20.9483 3.48535 21.7891 2.43262 21.7891C1.38672 21.7891 0.375 20.9414 0.375 19.8955V11.9795C0.375 10.9473 1.38672 10.0996 2.43262 10.0996C3.46484 10.0996 4.3125 10.9473 4.3125 11.9795ZM5.05078 22.7119C5.05078 23.833 5.95312 24.7354 7.07422 24.7354H8.43457L8.45508 28.9121C8.45508 31.4346 12.2285 31.4141 12.2285 28.9121V24.7354H14.7715V28.9121C14.7715 31.4209 18.5654 31.4278 18.5654 28.9121V24.7354H19.9463C21.0537 24.7354 21.9561 23.833 21.9561 22.7119V10.4483H5.05078V22.7119ZM22.0039 9.78517H4.97559C4.97559 6.85939 6.72559 4.31642 9.32324 2.99025L8.01758 0.577166C7.82617 0.242205 8.31152 0.0302911 8.47559 0.3174L9.80176 2.75099C12.1875 1.69142 14.9287 1.74611 17.2051 2.75099L18.5244 0.324236C18.6953 0.0302909 19.1738 0.249041 18.9824 0.584002L17.6768 2.99025C20.2539 4.31642 22.0039 6.85939 22.0039 9.78517ZM10.335 5.99123C10.335 5.60158 10.0205 5.27346 9.61719 5.27346C9.22754 5.27346 8.91992 5.60158 8.91992 5.99123C8.91992 6.38088 9.23438 6.709 9.61719 6.709C10.0205 6.709 10.335 6.38088 10.335 5.99123ZM18.0869 5.99123C18.0869 5.60158 17.7725 5.27346 17.3896 5.27346C16.9863 5.27346 16.6719 5.60158 16.6719 5.99123C16.6719 6.38088 16.9863 6.709 17.3896 6.709C17.7725 6.709 18.0869 6.38088 18.0869 5.99123ZM24.5674 10.0996C23.5352 10.0996 22.6875 10.9268 22.6875 11.9795V19.8955C22.6875 20.9483 23.5352 21.7891 24.5674 21.7891C25.6201 21.7891 26.625 20.9414 26.625 19.8955V11.9795C26.625 10.9268 25.6133 10.0996 24.5674 10.0996Z" fill="black"/>
                        </svg>
                    </li>
                    <li>
                        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.1875 4.40527L12.7383 2.67578V14.8027H0.1875V4.40527ZM0.1875 26.5947L12.7383 28.3242V16.3477H0.1875V26.5947ZM14.1191 28.5088L30.8125 30.8125V16.3477H14.1191V28.5088ZM14.1191 2.49121V14.8027H30.8125V0.1875L14.1191 2.49121Z" fill="black"/>
                        </svg>
                    </li>
                </ul>
            </div>
            <div className='picture'>
                <img src={tablet} alt="Tablet" />
            </div>
        </div>
    )
}

export default Presentation