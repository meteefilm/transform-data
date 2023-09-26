import React from 'react';
import { useNavigate } from 'react-router-dom';

import AppMenu from './AppMenu';
import Lottie from 'react-lottie-player';
import * as logoIcon from 'logo.json';

const AppTopbar = (props) => {
    const navigate = useNavigate();

    return (
        <>
            <div className="layout-topbar">
                <div className="layout-topbar-left">
                    <button className="topbar-menu-button p-link" onClick={props.onMenuButtonClick}>
                        <i className="pi pi-bars"></i>
                    </button>

                    {/* <button className="logo p-link" onClick={() => navigate('/')}>
                        <img src={`assets/layout/images/logo-${props.colorScheme === 'light' ? 'dark' : 'light'}.png`} alt="logo" />
                    </button> */}
                    <button className="logo p-link" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
                        <Lottie loop animationData={logoIcon} play style={{ width: 60, height: 70 }} />
                    </button>

                    {/* <button className="p-link" onClick={() => navigate('/')}>
                        <img src={`assets/layout/images/appname-${props.colorScheme === 'light' ? 'dark' : 'light'}.png`} className="app-name" alt="app-name" />
                    </button> */}
                </div>

                <AppMenu
                    model={props.items}
                    menuMode={props.menuMode}
                    colorScheme={props.colorScheme}
                    menuActive={props.menuActive}
                    activeInlineProfile={props.activeInlineProfile}
                    onSidebarMouseOver={props.onSidebarMouseOver}
                    onSidebarMouseLeave={props.onSidebarMouseLeave}
                    toggleMenu={props.onToggleMenu}
                    onChangeActiveInlineMenu={props.onChangeActiveInlineMenu}
                    onMenuClick={props.onMenuClick}
                    onRootMenuItemClick={props.onRootMenuItemClick}
                    onMenuItemClick={props.onMenuItemClick}
                />
            </div>
        </>
    );
};

export default AppTopbar;
