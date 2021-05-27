import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useRouter} from 'next/router'

import {signUpUserStart} from '../redux/User/user.actions'

import FormIn from './form/FormIn'
import SIButton from './SIButton';
import AuthWrapper from '../auth/wrapper/AuthWrapper'

const mapState = ({user}) => ({
    currentUser: user.currentUser,
    userErr: user.userErr
})

const SignUp = props => {
    const dispatch = useDispatch()
    const router = useRouter()
    const {currentUser, userErr} = useSelector(mapState)

    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfrimPassword] = useState('')
    const [errors, setErrors] = useState([])

    useEffect(() => {
        if (currentUser) {
            reset()
            
            router.push('/')
        }
    }, [currentUser])

    useEffect(() => {
        if (Array.isArray(userErr) && userErr.length > 0) {
            setErrors(userErr)
        }
    }, [userErr])

    const reset = () => {
        setDisplayName('')
        setEmail('')
        setPassword('')
        setConfrimPassword('')
        setErrors([])
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        dispatch(signUpUserStart({
            displayName,
            email,
            password,
            confirmPassword
        }))
    }

    const configAuthWrapper = {
        headline: 'SignUp'
    }
    return (
        <div className='SU-size'>
        <AuthWrapper {...configAuthWrapper}>
            <div className='formWrap'>
                {errors.length > 0 && (
                    <ul>
                        {errors.map((err, index) => {
                            return (
                                <li key={index}>
                                    {err}
                                </li>
                            )
                        })}
                    </ul>
                )}

                <form onSubmit={handleFormSubmit}>
                    <FormIn 
                        type="text"
                        name="displayName"
                        value={displayName}
                        placeholder="Full Name"
                        handleChange={e => setDisplayName(e.target.value)}
                    />
                    <FormIn 
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        handleChange={e => setEmail(e.target.value)}
                    />
                    <FormIn 
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        handleChange={e => setPassword(e.target.value)}
                    />
                    <FormIn 
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        placeholder="Confirm Password"
                        handleChange={e => setConfrimPassword(e.target.value)}
                    />
                    <SIButton type='submit'>
                        Register
                    </SIButton>

                </form>
            </div>
        </AuthWrapper>
        </div>
    );
}
    

export default SignUp
