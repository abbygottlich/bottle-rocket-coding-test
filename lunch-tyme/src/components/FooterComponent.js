import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

class Footer extends Component {

    // lunch footer
    lunchFooter = () => {
        return <div className="footer">
            <div className="icons-and-text">
                <div className="lunch">
                    <div className="lunch-icon"></div>
                    <div className="lunch-text">lunch</div>
                </div>
                <div className="internets">
                    <div className="internets-icon-2"></div>
                    <div className="internets-text">internets</div>
                </div>
            </div>
        </div>
    }

    // internets footer
    internetsFooter = () => {
        return <div className="footer">
            <div className="icons-and-text">
                <div className="lunch">
                    <div className="lunch-icon-2"></div>
                    <div className="lunch-text">lunch</div>
                </div>
                <div className="internets">
                    <div className="internets-icon"></div>
                    <div className="internets-text">internets</div>
                </div>
            </div>
        </div>
    }

    render() {
        return (
            <BrowserRouter>
                <Route exact path='/' component={this.lunchFooter} />
                <Route path='/detail' component={this.lunchFooter} />
                <Route path='/contact' component={this.internetsFooter} />
            </BrowserRouter>
        );
    }
}

export default Footer;