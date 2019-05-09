import React, { Component } from 'react';

class Home extends Component {

    state = {
        restaurantInfo: []
    }

    componentDidMount = () => {

        let restaurantNames = []

        fetch('http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                data.restaurants.map(info => restaurantNames.push(info))
            })
            .then(() => this.setState({
                restaurantInfo: restaurantNames
            }))
    }

    render() {

        return (
            <div className="App">
                <div className="main">{this.state.restaurantInfo.map(restaurant =>
                    <div className="restaurant-block">
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
        );
    }
}

export default Home;