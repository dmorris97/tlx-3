import React from 'react';
import { useSelector } from 'react-redux'
import UserProfile from '../user-profile/UserProfile';

const mapState = ({ user }) => ({
  currentUser: user.currentUser
})

const VerticalNav = ({ children }) => {
  const { currentUser } = useSelector(mapState);

  const configUserProfile = {
    currentUser
  }

  return (
    <div className="vn-container">

      <UserProfile {...configUserProfile} />

      <div className="vn-menu vn-text">
        {children}
      </div>
    </div>
  );
}

export default VerticalNav;