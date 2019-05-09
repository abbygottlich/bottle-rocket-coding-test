import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            // <div className="header">
            //     <div className="app-name-icon-container">
            //         <div className="app-name">Lunch Tyme</div>
            //         <div className="map-icon"></div>
            //     </div>
            // </div>

            // <div className="header">
            //     <div className="arrow-name-map-container">
            //         <div className="back-arrow"></div>
            //         <div className="app-name">Lunch Tyme</div>
            //         <div className="map-icon"></div>
            //     </div>
            // </div>

            <div className="header">
                <div className="arrows">
                    <div className="back-arrow"></div>
                    <div className="refresh-arrow"></div>
                    <div className="forward-arrow"></div>
                </div>
            </div>
        );
    }
}

export default Header;