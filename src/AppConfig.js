import React from 'react';
import { classNames } from 'primereact/utils';
import { RadioButton } from 'primereact/radiobutton';

const AppConfig = (props) => {
    const componentThemes = [
        { name: 'blue', color: '#0F8BFD' },
        { name: 'green', color: '#0BD18A' },
        { name: 'magenta', color: '#EC4DBC' },
        { name: 'orange', color: '#FD9214' },
        { name: 'purple', color: '#873EFE' },
        { name: 'red', color: '#FC6161' },
        { name: 'teal', color: '#00D0DE' },
        { name: 'yellow', color: '#EEE500' }
    ];

    return (
        <div id="layout-config">
            <button id="layout-config-button" className="layout-config-button p-link" onClick={props.onConfigButtonClick}>
                <i className="pi pi-cog"></i>
            </button>
            <div className={classNames('layout-config', { 'layout-config-active': props.configActive })} onClick={props.onConfigClick}>
                <h5>Color Scheme</h5>
                <div className="field-radiobutton">
                    <RadioButton name="colorScheme" value="light" id="theme1" checked={props.colorScheme === 'light'} onChange={() => props.changeColorScheme('light')}></RadioButton>
                    <label htmlFor="theme1">Light</label>
                </div>
                <div className="field-radiobutton">
                    <RadioButton name="colorScheme" value="dark" id="theme2" checked={props.colorScheme === 'dark'} onChange={() => props.changeColorScheme('dark')}></RadioButton>
                    <label htmlFor="theme2">Dark</label>
                </div>
                <hr />

                <h5>Component Themes</h5>
                <div className="layout-themes">
                    {componentThemes.map((theme) => {
                        return (
                            <div key={theme.name}>
                                <button className="p-link" style={{ cursor: 'pointer', backgroundColor: theme.color }} onClick={() => props.changeComponentTheme(theme.name)} title={theme.name}>
                                    {props.componentTheme === theme.name && <i className="pi pi-check"></i>}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AppConfig;
