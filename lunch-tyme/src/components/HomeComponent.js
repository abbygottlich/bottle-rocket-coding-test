import React, { Component } from 'react';
import Detail from "./DetailComponent";

class Home extends Component {

    state = {
        restaurantInfo: [],
        showDetail: false,
        singleRestaurant: null
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

    showDetailToggle = () => {
        if (this.state.showDetail === false) {
            this.setState({
                showDetail: true
            })
        }
    }

    render() {
        if (this.state.showDetail === false) {
            return (
                <div className="App">
                    <div className="main">{this.state.restaurantInfo.map(restaurant =>
                        <div onClick={this.showDetailToggle} className="restaurant-block">
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
        } else return <Detail singleRestaurant={this.state.singleRestaurant} />
    }
}

export default Home;