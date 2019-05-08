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
                    <div>{restaurant.name}</div>
                )}</div>
            </div>
        );
    }
}

export default Home;