import './App.scss';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';

import PrimeReact from 'primereact/api';
import { Tooltip } from 'primereact/tooltip';
import { classNames } from 'primereact/utils';
import React, { useEffect, useRef, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import AppConfig from './AppConfig';
import AppFooter from './AppFooter';
import AppMenu from './AppMenu';
import AppTopbar from './AppTopbar';
import BlocksDemo from './components/BlocksDemo';
import ButtonDemo from './components/ButtonDemo';
import ChartDemo from './components/ChartDemo';
import Dashboard from './components/Dashboard';
import Documentation from './components/Documentation';
import FileDemo from './components/FileDemo';
import FloatLabelDemo from './components/FloatLabelDemo';
import FormLayoutDemo from './components/FormLayoutDemo';
import InputDemo from './components/InputDemo';
import InvalidStateDemo from './components/InvalidStateDemo';
import ListDemo from './components/ListDemo';
import MediaDemo from './components/MediaDemo';
import MenuDemo from './components/MenuDemo';
import MessagesDemo from './components/MessagesDemo';
import MiscDemo from './components/MiscDemo';
import OverlayDemo from './components/OverlayDemo';
import PanelDemo from './components/PanelDemo';
import TableDemo from './components/TableDemo';
import TreeDemo from './components/TreeDemo';
import CalendarDemo from './pages/CalendarDemo';
import CrudDemo from './pages/CrudDemo';
import EmptyPage from './pages/EmptyPage';
import Help from './pages/Help';
import Invoice from './pages/Invoice';
import Params from './pages/params/Params';
import Service from './pages/service/Service';
import TimelineDemo from './pages/TimelineDemo';
import IconsDemo from './utilities/IconsDemo';

const App = (props) => {

    const [configActive, setConfigActive] = useState(false);
    const [menuMode, setMenuMode] = useState('slim');
    const [overlayMenuActive, setOverlayMenuActive] = useState(false);
    const [ripple, setRipple] = useState(true);
    const [sidebarStatic, setSidebarStatic] = useState(false);
    const [staticMenuDesktopInactive, setStaticMenuDesktopInactive] = useState(false);
    const [staticMenuMobileActive, setStaticMenuMobileActive] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
    const [topbarMenuActive, setTopbarMenuActive] = useState(false);
    const [sidebarActive, setSidebarActive] = useState(false);
    const [pinActive, setPinActive] = useState(false);
    const [activeInlineProfile, setActiveInlineProfile] = useState(false);
    const [resetActiveIndex, setResetActiveIndex] = useState(null);
    const copyTooltipRef = useRef();
    const location = useLocation();

    PrimeReact.ripple = true;

    const menu = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            items: [{ label: 'Home', icon: 'pi pi-home', to: '/' }]
        },
        {
            label: 'Transform Params',
            icon: 'pi pi-book',
            items: [{ label: 'Params', icon: 'pi pi-sort-alt', to: '/params' }]
        },
        {
            label: 'Transform Service',
            icon: 'pi pi-link',
            items: [{ label: 'Service', icon: 'pi pi-sort-alt', to: '/service' }]
        },
    ];

    let configClick;
    let menuClick;
    let searchClick = false;
    let topbarItemClick;

    useEffect(() => {
        copyTooltipRef && copyTooltipRef.current && copyTooltipRef.current.updateTargetEvents();
    }, [location]);

    useEffect(() => {
        setResetActiveIndex(true);
        setMenuActive(false);
    }, [menuMode]);

    const onDocumentClick = () => {
        if (!searchClick && searchActive) {
            onSearchHide();
        }

        if (!topbarItemClick) {
            setTopbarMenuActive(false);
        }

        if (!menuClick) {
            if (isHorizontal() || isSlim()) {
                setMenuActive(false);
                setResetActiveIndex(true);
            }

            if (overlayMenuActive || staticMenuMobileActive) {
                setOverlayMenuActive(false);
                setStaticMenuMobileActive(false);
            }

            hideOverlayMenu();
            unblockBodyScroll();
        }

        if (configActive && !configClick) {
            setConfigActive(false);
        }

        topbarItemClick = false;
        menuClick = false;
        configClick = false;
        searchClick = false;
    };

    const onSearchHide = () => {
        setSearchActive(false);
        searchClick = false;
    };

    const onMenuModeChange = (menuMode) => {
        setMenuMode(menuMode);
        setOverlayMenuActive(false);
    };

    const onConfigClick = () => {
        configClick = true;
    };

    const onConfigButtonClick = (event) => {
        setConfigActive((prevState) => !prevState);
        configClick = true;
        event.preventDefault();
    };

    const onRippleChange = (e) => {
        PrimeReact.ripple = e.value;
        setRipple(e.value);
    };

    const onMenuButtonClick = (event) => {
        menuClick = true;

        if (isOverlay()) {
            setOverlayMenuActive((prevState) => !prevState);
        }

        if (isDesktop()) {
            setStaticMenuDesktopInactive((prevState) => !prevState);
        } else {
            setStaticMenuMobileActive((prevState) => !prevState);
        }

        event.preventDefault();
    };

    const hideOverlayMenu = () => {
        setOverlayMenuActive(false);
        setStaticMenuMobileActive(false);
    };

    const onTopbarItemClick = (event) => {
        topbarItemClick = true;
        setTopbarMenuActive((prevState) => !prevState);
        hideOverlayMenu();
        event.preventDefault();
    };

    const onToggleMenu = (event) => {
        menuClick = true;

        if (overlayMenuActive) {
            setOverlayMenuActive(false);
        }

        if (sidebarActive) {
            setSidebarStatic((prevState) => !prevState);
        }

        event.preventDefault();
    };

    const onSidebarMouseOver = () => {
        if (menuMode === 'sidebar' && !sidebarStatic) {
            setSidebarActive(isDesktop());
            setTimeout(() => {
                setPinActive(isDesktop());
            }, 200);
        }
    };

    const onSidebarMouseLeave = () => {
        if (menuMode === 'sidebar' && !sidebarStatic) {
            setTimeout(() => {
                setSidebarActive(false);
                setPinActive(false);
            }, 250);
        }
    };

    const onMenuClick = () => {
        menuClick = true;
    };

    const onChangeActiveInlineMenu = (event) => {
        setActiveInlineProfile((prevState) => !prevState);
        event.preventDefault();
    };

    const onRootMenuItemClick = () => {
        setMenuActive((prevState) => !prevState);
    };

    const onMenuItemClick = (event) => {
        if (!event.item.items) {
            hideOverlayMenu();
            setResetActiveIndex(true);
        }

        if (!event.item.items && (isHorizontal() || isSlim())) {
            setMenuActive(false);
        }
    };

    const isHorizontal = () => {
        return menuMode === 'horizontal';
    };

    const isSlim = () => {
        return menuMode === 'slim';
    };

    const isOverlay = () => {
        return menuMode === 'overlay';
    };

    const isDesktop = () => {
        return window.innerWidth > 991;
    };

    const unblockBodyScroll = () => {
        if (document.body.classList) {
            document.body.classList.remove('blocked-scroll');
        } else {
            document.body.className = document.body.className.replace(new RegExp('(^|\\b)' + 'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    };

    const layoutClassName = classNames('layout-wrapper', {
        'layout-static': menuMode === 'static',
        'layout-overlay': menuMode === 'overlay',
        'layout-overlay-active': overlayMenuActive,
        'layout-slim': menuMode === 'slim',
        'layout-horizontal': menuMode === 'horizontal',
        'layout-active': menuActive,
        'layout-mobile-active': staticMenuMobileActive,
        'layout-sidebar': menuMode === 'sidebar',
        'layout-sidebar-static': menuMode === 'sidebar' && sidebarStatic,
        'layout-static-inactive': staticMenuDesktopInactive && menuMode === 'static',
        'p-ripple-disabled': !ripple
    });

    return (
        <div className={layoutClassName} onClick={onDocumentClick}>
            <Tooltip ref={copyTooltipRef} target=".block-action-copy" position="bottom" content="Copied to clipboard" event="focus" />

            <div className="layout-main">
                <AppTopbar
                    items={menu}
                    menuMode={menuMode}
                    colorScheme={props.colorScheme}
                    menuActive={menuActive}
                    topbarMenuActive={topbarMenuActive}
                    activeInlineProfile={activeInlineProfile}
                    onTopbarItemClick={onTopbarItemClick}
                    onMenuButtonClick={onMenuButtonClick}
                    onSidebarMouseOver={onSidebarMouseOver}
                    onSidebarMouseLeave={onSidebarMouseLeave}
                    onToggleMenu={onToggleMenu}
                    onChangeActiveInlineMenu={onChangeActiveInlineMenu}
                    onMenuClick={onMenuClick}
                    onMenuItemClick={onMenuItemClick}
                    onRootMenuItemClick={onRootMenuItemClick}
                    resetActiveIndex={resetActiveIndex}
                />

                <AppMenu
                    model={menu}
                    onRootMenuItemClick={onRootMenuItemClick}
                    onMenuItemClick={onMenuItemClick}
                    onToggleMenu={onToggleMenu}
                    onMenuClick={onMenuClick}
                    menuMode={menuMode}
                    colorScheme={props.colorScheme}
                    menuActive={menuActive}
                    sidebarActive={sidebarActive}
                    sidebarStatic={sidebarStatic}
                    pinActive={pinActive}
                    onSidebarMouseLeave={onSidebarMouseLeave}
                    onSidebarMouseOver={onSidebarMouseOver}
                    activeInlineProfile={activeInlineProfile}
                    onChangeActiveInlineMenu={onChangeActiveInlineMenu}
                    resetActiveIndex={resetActiveIndex}
                />
                
                <div className="layout-main-content">
                    <Routes>
                        <Route path="/" exact="true" element={<Dashboard />} />
                        <Route path="/service" element={<Service />} />
                        <Route path="/params" element={<Params />} />

                        <Route path="/documentation" element={<Documentation />} />
                        <Route path="/formlayout" element={<FormLayoutDemo />} />
                        <Route path="/floatlabel" element={<FloatLabelDemo />} />
                        <Route path="/input" element={<InputDemo />} />
                        <Route path="/invalidstate" element={<InvalidStateDemo />} />
                        <Route path="/button" element={<ButtonDemo />} />
                        <Route path="/table" element={<TableDemo />} />
                        <Route path="/list" element={<ListDemo />} />
                        <Route path="/tree" element={<TreeDemo />} />
                        <Route path="/panel" element={<PanelDemo />} />
                        <Route path="/overlay" element={<OverlayDemo />} />
                        <Route path="/menu/*" element={<MenuDemo />} />
                        <Route path="/message" element={<MessagesDemo />} />
                        <Route path="/media" element={<MediaDemo />} />
                        <Route path="/file" element={<FileDemo />} />
                        <Route path="/chart" element={<ChartDemo colorMode={props.colorScheme} location={location} />} />
                        <Route path="/misc" element={<MiscDemo />} />
                        <Route path="/blocks" element={<BlocksDemo />} />
                        <Route path="/icons" element={<IconsDemo />} />
                        <Route path="/crud" element={<CrudDemo />} />
                        <Route path="/calendar" element={<CalendarDemo />} />
                        <Route path="/help" element={<Help />} />
                        <Route path="/invoice" element={<Invoice colorMode={props.colorScheme} location={location} />} />
                        <Route path="/empty" element={<EmptyPage />} />
                        <Route path="/timeline" element={<TimelineDemo />} />
                    </Routes>
                </div>

                <AppFooter colorScheme={props.colorScheme} />
            </div>

            {/* <AppRightMenu rightMenuActive={rightMenuActive} onRightMenuClick={onRightMenuClick} onRightMenuActiveChange={onRightMenuActiveChange} /> */}

            <AppConfig
                configActive={configActive}
                onConfigButtonClick={onConfigButtonClick}
                onConfigClick={onConfigClick}
                menuMode={menuMode}
                changeMenuMode={onMenuModeChange}
                colorScheme={props.colorScheme}
                changeColorScheme={props.onColorSchemeChange}
                theme={props.theme}
                changeTheme={props.onMenuThemeChange}
                componentTheme={props.componentTheme}
                changeComponentTheme={props.onComponentThemeChange}
                ripple={ripple}
                onRippleChange={onRippleChange}
            />
        </div>
    );
};

export default App;
