import React from 'react';

const AppFooter = (props) => {
    return (
        <div className="layout-footer">
            <div className="footer-logo-container">
                <span className="app-name">Transform Data</span>
            </div>
            <span className="copyright">
                {process.env.REACT_APP_VERSION} - {process.env.REACT_APP_DEPLOY}
            </span>
            <span className="copyright">&#169; Metee Khumchat - 2023</span>
        </div>
    );
};

export default AppFooter;
