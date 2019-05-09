import React, { Component } from 'react';

class Detail extends Component {

    render() {
        return (
            <div>
                <div className="map"></div>
                <div className="restaurant-name-header"></div>
                <div className="restaurant-info">
                    <div className="address">{this.props.singleRestaurant.name}</div>
                    <div className="number"></div>
                    <div className="twitter"></div>
                </div>
            </div>
        );
    }
}

export default Detail;