import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

class Header extends Component {

    homeHeader = () => {
        return <div className="header">
            <div className="app-name-icon-container">
                <div className="app-name">Lunch Tyme</div>
                <div className="map-icon"></div>
            </div>
        </div>
    }

    detailHeader = () => {
        return <div className="header">
            <div className="arrow-name-map-container">
                <div className="back-arrow"></div>
                <div className="app-name">Lunch Tyme</div>
                <div className="map-icon"></div>
            </div>
        </div>
    }

    contactHeader = () => {
        return <div className="header">
            <div className="arrows">
                <div className="back-arrow"></div>
                <div className="refresh-arrow"></div>
                <div className="forward-arrow"></div>
            </div>
        </div>
    }

    render() {
        return (
            <BrowserRouter>
                <Route exact path='/' component={this.homeHeader} />
                <Route path='/detail' component={this.detailHeader} />
                <Route path='/contact' component={this.contactHeader} />
            </BrowserRouter>
        );
    }
}

export default Header;