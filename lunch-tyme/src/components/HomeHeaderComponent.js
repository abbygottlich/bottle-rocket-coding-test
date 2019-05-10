import React, { Component } from 'react';

class HomeHeader extends Component {
    render() {
        return (
            <div className="header">
                <div className="arrow-name-map-container">
                    {this.props.headerArrow === true ? <div onClick={() => { document.location.reload(true) }} className="back-arrow"></div> : null}
                    <div className="app-name-icon-container">
                        <div className="app-name">Lunch Tyme</div>
                        <div className="map-icon"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeHeader;