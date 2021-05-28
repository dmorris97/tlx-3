import {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useRouter} from 'next/router'


const mapState = ({user}) => ({
    currentUser: user.currentUser
})

const useAuth = props => {
    const {currentUser} = useSelector(mapState)
    const router = useRouter()

    useEffect(() => {
        if (!currentUser) {
            router.push('/sign-in')
        }
    }, [currentUser])

    return currentUser
}

export default useAuth