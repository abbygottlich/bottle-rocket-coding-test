import React, { Component } from 'react';

class HomeHeader extends Component {
    render() {
        return (
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

export default HomeHeader;