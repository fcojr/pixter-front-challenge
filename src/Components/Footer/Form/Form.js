import React, { useState } from 'react'
import './Form.scss'

function Form() {

    const [userData, setUserData] = useState({
        website: 'Pixter Digital Books',
        userEmail: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Message sent! Check console for payload.')
        console.log(userData)
    }

    return (
        <div className='form'>
            <h2>Keep in touch with us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.</p>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='enter your email to update' 
                    type='email' 
                    required
                    onChange={e => 
                        setUserData({...userData,  userEmail: e.target.value})
                    }
                    value={userData.userEmail}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form
