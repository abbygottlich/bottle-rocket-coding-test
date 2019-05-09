import React, { Component } from 'react';

class Detail extends Component {

    render() {
        return (
            <div>
                <div className="map"></div>
                <div className="restaurant-name-header">
                    <div className="detail-restaurant-name">{this.props.singleRestaurant.name}</div>
                    <div className="detail-restaurant-category">{this.props.singleRestaurant.category}</div>
                </div>
                <div className="restaurant-info">
                    <div className="address">
                        <div className="address-street">{this.props.singleRestaurant.location.address}</div>
                        <div className="address-city-state">{this.props.singleRestaurant.location.city}, {this.props.singleRestaurant.location.state} {this.props.singleRestaurant.location.postalCode}</div>
                    </div>
                    <div className="number">{this.props.singleRestaurant.contact.formattedPhone}</div>
                    <div className="twitter">@{this.props.singleRestaurant.contact.twitter}</div>
                </div>
            </div>
        );
    }
}

export default Detail;