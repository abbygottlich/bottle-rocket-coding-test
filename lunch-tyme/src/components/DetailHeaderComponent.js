import React, { Component } from 'react';

class DetailHeader extends Component {
    render() {
        return (
            <div className="header">
                <div className="arrow-name-map-container">
                    <div onClick={() => { document.location.reload(true) }} className="back-arrow"></div>
                    <div className="app-name">Lunch Tyme</div>
                    <div className="map-icon"></div>
                </div>
            </div>
        );
    }
}

export default DetailHeader;