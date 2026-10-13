import React from 'react'
import {useSelector} from 'react-redux'
import Link from 'next/link'
import {checkUserIsAdmin} from '../../../auth/utils/Utils'

const mapState = ({ user }) => ({
    currentUser: user.currentUser
  })
  
const AdminToolbar = props => {
    const { currentUser } = useSelector(mapState);
  
    const isAdmin = checkUserIsAdmin(currentUser);
    if (!isAdmin) return null;
  
    return (
        <div className="at-container">
            <ul className='at-ulist'>
                <li className="at-ilist">
                    <Link href="/admin">
                        <a className="at-text">My Admin</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default AdminToolbar