import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useRouter} from 'next/router'
import Link from 'next/link'
import {emailSignInStart, googleSignInStart} from '../redux/User/user.actions'

import SIButton from './SIButton'
import AuthWrapper from '../auth/wrapper/AuthWrapper'
import FormIn from './form/FormIn'

const mapState = ({user}) => ({
    currentUser: user.currentUser
})

const Login = props => {
    const dispatch = useDispatch()
    const router = useRouter()
    const {currentUser} = useSelector(mapState)
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if (currentUser) {
            ResetForm()
            router.push('/')
        }
    }, [currentUser])

    const ResetForm = () => {
        setEmail('')
        setPassword('')
    }

    const handleSubmit =  e => {
        e.preventDefault();
        dispatch(emailSignInStart({email, password}))
    }

    const handleGoogleSignIn = () => {
        dispatch(googleSignInStart())
    }

    const configAuthWrapper = {
        headline: 'Login'
    }

    return (
        <div className='Login--size'>
        <AuthWrapper {...configAuthWrapper}>
            <div className='login-form-wrap'>
                <form onSubmit={handleSubmit}>

                    <FormIn 
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        handleChange = {e => setEmail(e.target.value)}
                    />

                    <FormIn 
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        handleChange = {e => setPassword(e.target.value)}
                    /> 

                    <SIButton type="submit">
                        LogIn
                    </SIButton>

                    <div className='Login-socialSignIn'>
                        <div className='sSI-Row'>
                            <SIButton onClick={handleGoogleSignIn}>
                                Sign in with Google
                            </SIButton>
                        </div>
                    </div>
                    <div className='Login-links'>
                        <Link href='/recover'>
                            <p className='Login-reset-text'>Reset Password</p>
                        </Link>
                    </div>
                </form>
            </div>
        </AuthWrapper>
        </div>
    )
}


export default Login
