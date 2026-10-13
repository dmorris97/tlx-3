import React from 'react';

const UserProfile = props => {
  const { currentUser } = props;
  const { displayName } = currentUser;

  return (
    <div className="up-userProfile">
      <ul className='up-ul'>
        <li className='up-li'>
          <div className="up-img">
            <img src='/images/userIMG.png' />
          </div>
        </li>
        <li className='up-li-text'>
          <span className="up-displayName">
            {displayName && displayName}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default UserProfile;