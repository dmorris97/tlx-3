import React from 'react'

import Login from '../components/sign-in/Login'
import SignUp from '../components/sign-in/SignUp'

function SignIn() {
    return (
        <div className='SignIn-container'>
            <Login />

            <SignUp />
            
        </div>
    )
}

export default SignIn
