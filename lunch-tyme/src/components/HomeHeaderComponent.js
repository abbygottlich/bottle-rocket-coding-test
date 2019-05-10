import React, { Component } from 'react';

class HomeHeader extends Component {
    render() {
        return (
            <div className="header">
                <div className="app-name-icon-container">
                    <div className="app-name">Lunch Tyme</div>
                    <div className="map-icon"></div>
                </div>
            </div>
        );
    }
}

export default HomeHeader;