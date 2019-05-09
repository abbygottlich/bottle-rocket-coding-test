import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <div className="home-header">
                <div className="app-name-icon-container">
                    <div className="app-name">Lunch Tyme</div>
                    <div className="map-icon"></div>
                </div>
            </div>
        );
    }
}

export default Header;