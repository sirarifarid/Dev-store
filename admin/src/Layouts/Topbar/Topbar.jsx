import React from 'react';
import './topbar.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import Profile from '../../Media/user.jpg';
import { Avatar } from '@mui/material';

const Topbar = () => {
    return (
        <>
            <div className="topbar">
                <div className="topContainer">
                    <div className="topbarIcon">
                         <div className="notification">
                            <NotificationsIcon />
                             <span>2</span>
                         </div>
                          <div className="language">
                             <LanguageIcon />
                          </div>
                          <div className="setting">
                             <SettingsIcon />
                          </div>
                          <Avatar alt="Remy Sharp" src={Profile} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Topbar;