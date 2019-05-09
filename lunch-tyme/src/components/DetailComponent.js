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
                        <div className="address-street">{this.props.singleRestaurant.location.address ? this.props.singleRestaurant.location.address : null}</div>
                        <div className="address-city-state">
                            {/* if there is a city AND state, return the city with a comma, else, return the city without a comma */}
                            <span>{this.props.singleRestaurant.location.city && this.props.singleRestaurant.location.state ? this.props.singleRestaurant.location.city + ", " : this.props.singleRestaurant.location.city && !this.props.singleRestaurant.location.state ? this.props.singleRestaurant.location.city : null}</span>
                            <span>{this.props.singleRestaurant.location.state ? this.props.singleRestaurant.location.state : null}</span>
                            <span>{this.props.singleRestaurant.location.postalCode ? " " + this.props.singleRestaurant.location.postalCode : null}</span>
                        </div>
                    </div>
                    <div className="number">{this.props.singleRestaurant.contact && this.props.singleRestaurant.contact.formattedPhone ? this.props.singleRestaurant.contact.formattedPhone : null}</div>
                    <div className="twitter">{this.props.singleRestaurant.contact && this.props.singleRestaurant.contact.twitter ? "@" + this.props.singleRestaurant.contact.twitter : null}</div>
                </div>
            </div>
        );
    }
}

export default Detail;