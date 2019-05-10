import React from 'react';
import DetailHeader from "./DetailHeaderComponent";
import Footer from "./FooterComponent";

function Detail(props) {
    return (
        <div>
            <DetailHeader />
            <div className="detail-wrapper">
                <div className="map"></div>
                <div className="restaurant-name-header">
                    <div className="detail-restaurant-name">{props.singleRestaurant.name}</div>
                    <div className="detail-restaurant-category">{props.singleRestaurant.category}</div>
                </div>
                <div className="restaurant-info">
                    <div className="address">
                        <div className="address-street">{props.singleRestaurant.location.address ? props.singleRestaurant.location.address : null}</div>
                        <div className="address-city-state">
                            {/* if there is a city AND state, return the city with a comma, else, return the city without a comma */}
                            <span>{props.singleRestaurant.location.city && props.singleRestaurant.location.state ? props.singleRestaurant.location.city + ", " : props.singleRestaurant.location.city && !props.singleRestaurant.location.state ? props.singleRestaurant.location.city : null}</span>
                            <span>{props.singleRestaurant.location.state ? props.singleRestaurant.location.state : null}</span>
                            <span>{props.singleRestaurant.location.postalCode ? " " + props.singleRestaurant.location.postalCode : null}</span>
                        </div>
                    </div>
                    <div className="number">{props.singleRestaurant.contact && props.singleRestaurant.contact.formattedPhone ? props.singleRestaurant.contact.formattedPhone : null}</div>
                    <div className="twitter">{props.singleRestaurant.contact && props.singleRestaurant.contact.twitter ? "@" + props.singleRestaurant.contact.twitter : null}</div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Detail;