import React from 'react';
import { useDispatch } from 'react-redux';
import { signOutUserStart } from '../../redux/User/user.actions'
import VerticalNav from './VerticalNav';

const AdminLayout = props => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutUserStart());
  };


//<div className="adminLayout">
//<Header {...props} />
  return (
      
    <div className="AL-adminLayout">
      <div className="AL-controlPanel">
        <div className="AL-sidebar">
          <VerticalNav>
            <ul>
              
              <li>
                <span className="signOut" onClick={() => signOut()}>
                  Sign Out
                </span>
              </li>
            </ul>
          </VerticalNav>
        </div>
        <div className="AL-content">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;