import React, { SFC, MouseEvent } from 'react';
import { Link } from "react-router-dom";
import { signOutRequest } from '../../models/auth/actions';

type Props = {
  onSignOutClick: typeof signOutRequest;
  userName: string;
}

const AppSideBar: SFC<Props> = ({ onSignOutClick, userName }) => {
  return (
    <div
      style={{
        padding: "10px",
        minWidth: "200px",
        background: "#f0f0f0",
      }}
    >
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li style={{textOverflow: "ellipsis", overflow: "hidden"}}><i>{userName}</i></li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <button style={{ margin: '12px' }} onClick={onSignOutClick}>Log out</button>
        </li>
      </ul>
    </div>
  );
}

export default AppSideBar;
