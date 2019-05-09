import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            // <div className="footer">
            //     <div className="icons-and-text">
            //         <div className="lunch">
            //             <div className="lunch-icon"></div>
            //             <div className="lunch-text">lunch</div>
            //         </div>
            //         <div className="internets">
            //             <div className="internets-icon-2"></div>
            //             <div className="internets-text">internets</div>
            //         </div>
            //     </div>
            // </div>

            <div className="footer">
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
        );
    }
}

export default Footer;