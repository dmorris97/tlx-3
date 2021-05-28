import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useRouter} from 'next/router'
import {resetPasswordStart, resetUserState} from '../../redux/User/user.actions'

import AuthWrapper from '../../auth/wrapper/AuthWrapper'
import FormIn from '../form/FormIn'
import SIButton from '../SIButton'


const mapState = ({user}) => ({
    resetPasswordSuccess: user.resetPasswordSuccess,
    userErr: user.userErr
})

const EmailPassword = props => {
    const dispatch = useDispatch()
    const router = useRouter()
    const {resetPasswordSuccess, userErr} = useSelector(mapState)
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState([])

    useEffect(() => {
        if (resetPasswordSuccess) {
            dispatch(resetUserState())
            router.push('/sign-in')
        }
    }, [resetPasswordSuccess])

    useEffect(() => {
        if (Array.isArray(userErr) && userErr.length > 0) {
            setErrors(userErr)
        }
    }, [userErr])

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(resetPasswordStart({email}))
        
    }

        const configAuthWrapper = {
            headline: "Email Password"
        }

    return (
        <div className="EP-container">
        <AuthWrapper {...configAuthWrapper}>
            <div className='formWrap'>
                {errors.length > 0 && (
                    <ul>
                        {errors.map((e, index) => {
                            return (
                                <p key={index}>
                                    {e}
                                </p>
                            )
                        })}
                    </ul>
                )}
                <form onSubmit={handleSubmit}>
                    <FormIn 
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        handleChange= {e => setEmail(e.target.value)}
                    />
                    <SIButton type='submit'>
                        Email Password
                    </SIButton>
                </form>
            </div>
        </AuthWrapper>
        </div>
    );
}


export default EmailPassword