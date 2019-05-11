import React, { Component } from 'react';
import HomeHeader from "./HomeHeaderComponent";
import SimpleMap from "./MapComponent";

class Home extends Component {

    state = {
        restaurantInfo: [],
        columnLeft: [],
        columnRight: [],
        showDetail: false,
        singleRestaurant: {},
        detailWrapperClass: "detail-wrapper-hidden",
        mainClass: "main",
        headerArrow: false
    }

    // ---------------------------------- FETCHING DATA AND CREATING COLUMNS ----------------------------------
    componentDidMount = () => {
        const restaurants = []
        const leftColumnItems = []
        const rightColumnItems = []

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
            .then(() => {
                for (let i = 0; i < this.state.restaurantInfo.length; i++) {
                    let sortedRestaurant = this.state.restaurantInfo[i]
                    if (i % 2 === 0) {
                        leftColumnItems.push(sortedRestaurant)
                    } else {
                        rightColumnItems.push(sortedRestaurant)
                    }
                }
            }
            )
            .then(() => this.setState({
                columnLeft: leftColumnItems,
                columnRight: rightColumnItems
            }))
            .then(console.log("left", leftColumnItems, "right", rightColumnItems))
    }

    // ---------------------------------- ONCLICK FUNCTION FOR EACH RESTAURANT ----------------------------------
    showDetailToggle = (e, restaurant) => {
        if (this.state.showDetail === false) {
            this.setState({
                showDetail: true,
                singleRestaurant: restaurant,
                detailWrapperClass: "detail-wrapper-visible",
                mainClass: "main-hidden",
                headerArrow: true
            })
            console.log(restaurant)
        }
    }

    // ---------------------------------- LISTING OUT ALL OF THE RESTAURANTS - MOBILE ----------------------------------
    ListComponent = () => {
        return (
            <div>
                <div className={this.state.mainClass}>{this.state.restaurantInfo.map(restaurant =>
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

    // ---------------------------------- LISTING OUT ALL OF THE RESTAURANTS - TABLET+ ----------------------------------
    columnLeftComponent = () => {
        return (
            <div>
                <div className={this.state.mainClass}>{this.state.columnLeft.map(restaurant =>
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

    columnRightComponent = () => {
        return (
            <div>
                <div className={this.state.mainClass}>{this.state.columnRight.map(restaurant =>
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

    // ---------------------------------- SHOWING CLICKED RESTAURANT DETAILS ----------------------------------
    DetailComponent = () => {
        return (
            <div>
                <div className={this.state.detailWrapperClass}>
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

    // ---------------------------------- ALL MOBILE FUNCTIONALITY ----------------------------------
    showMobileView = () => {
        return <div className="component-wrapper">
            <div className="list-component">{this.ListComponent()}</div>
            <div className="detail-component">{this.DetailComponent()}</div>
        </div>
    }

    // ---------------------------------- ALL TABLET+ FUNCTIONALITY ----------------------------------
    tabletPlusView = () => {
        return <div className="tablet-component-wrapper">
            <div className="column-wrapper">
                <div className="left-column">{this.columnLeftComponent()}</div>
                <div className="right-column">{this.columnRightComponent()}</div>
            </div>
            <div className="detail-component">{this.DetailComponent()}</div>
        </div>
    }

    showSpecificView = () => {
        if (window.innerWidth <= 375) {
            return this.showMobileView()
        } else return this.tabletPlusView()
    }

    render() {
        return (
            <div className="App">
                <div className="header-container">
                    <HomeHeader headerArrow={this.state.headerArrow} />
                </div>
                {this.showSpecificView()}
            </div>
        )
    }
}

export default Home;