import React, { Component } from 'react';
import HomeHeader from "./HomeHeaderComponent";
import SimpleMap from "./MapComponent";

class Home extends Component {

    state = {
        restaurantInfo: [],
        showDetail: false,
        singleRestaurant: {}
    }

    componentDidMount = () => {

        let restaurants = []

        fetch('http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                data.restaurants.map(info => restaurants.push(info))
            })
            .then(() => this.setState({
                restaurantInfo: restaurants
            }))
    }

    showDetailToggle = (e, restaurant) => {
        if (this.state.showDetail === false) {
            this.setState({
                showDetail: true,
                singleRestaurant: restaurant
            })
            console.log(restaurant)
        }
    }

    ListComponent = () => {
        return (
            <div>
                <div className="main">{this.state.restaurantInfo.map(restaurant =>
                    <div onClick={() => { this.showDetailToggle(this, restaurant) }} className="restaurant-block">
                        <img className="restaurant-image" src={restaurant.backgroundImageURL} alt={restaurant.category}></img>
                        {/* using multiple gradients because one was not dark enough */}
                        <div className="gradient"></div>
                        <div className="gradient"></div>
                        <div className="gradient"></div>
                        <div className="gradient"></div>
                        <div className="gradient"></div>
                        <div className="restaurant-name-and-category">
                            <div className="restaurant-name">{restaurant.name}</div>
                            <div className="restaurant-category">{restaurant.category}</div>
                        </div>
                    </div>
                )}</div>
            </div>
        )
    }

    DetailComponent = () => {
        return (
            <div>
                <div className="detail-wrapper">
                    <div className="map"><SimpleMap restaurant={this.state.singleRestaurant} /></div>
                    <div className="restaurant-name-header">
                        <div className="detail-restaurant-name">{this.state.singleRestaurant.name ? this.state.singleRestaurant.name : null}</div>
                        <div className="detail-restaurant-category">{this.state.singleRestaurant.category ? this.state.singleRestaurant.category : null}</div>
                    </div>
                    <div className="restaurant-info">
                        <div className="address">
                            <div className="address-street">{this.state.singleRestaurant.location ? this.state.singleRestaurant.location.address : null}</div>
                            <div className="address-city-state">
                                {/* if there is a city AND state, return the city with a comma, else, return the city without a comma */}
                                <span>{this.state.singleRestaurant.location && this.state.singleRestaurant.location.city && this.state.singleRestaurant.location.state ? this.state.singleRestaurant.location.city + ", " : this.state.singleRestaurant.location && this.state.singleRestaurant.location.city && !this.state.singleRestaurant.location.state ? this.state.singleRestaurant.location.city : null}</span>
                                <span>{this.state.singleRestaurant.location && this.state.singleRestaurant.location.state ? this.state.singleRestaurant.location.state : null}</span>
                                <span>{this.state.singleRestaurant.location && this.state.singleRestaurant.location.postalCode ? " " + this.state.singleRestaurant.location.postalCode : null}</span>
                            </div>
                        </div>
                        <div className="number">{this.state.singleRestaurant.contact && this.state.singleRestaurant.contact.formattedPhone ? this.state.singleRestaurant.contact.formattedPhone : null}</div>
                        <div className="twitter">{this.state.singleRestaurant.contact && this.state.singleRestaurant.contact.twitter ? "@" + this.state.singleRestaurant.contact.twitter : null}</div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="App">
                <div className="header-container">
                    <HomeHeader />
                </div>
                <div className="list-component">{this.ListComponent()}</div>
                <div className="detail-component">{this.DetailComponent()}</div>
            </div>
        )
    }
}

export default Home;