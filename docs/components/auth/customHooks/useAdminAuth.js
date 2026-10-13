import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import {checkUserIsAdmin} from '../utils/Utils'

const mapState = ({ user }) => ({
    currentUser: user.currentUser
  });
  
  const useAdminAuth = props => {
    const { currentUser } = useSelector(mapState);
    const router = useRouter();
  
    useEffect(() => {
      if (!checkUserIsAdmin(currentUser)) {
        router.push('/sign-in');
      }
  
    }, [currentUser]);
  
    return currentUser;
  }
  
  export default useAdminAuth;