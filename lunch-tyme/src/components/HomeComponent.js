import React, { Component } from 'react';

class Home extends Component {

    componentDidMount() {
        fetch('http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (restaurantInfo) {
                console.log(JSON.stringify(restaurantInfo));
            });
    }

    render() {
        return (
            <div className="App">
                <div className="main"></div>
            </div>
        );
    }
}

export default Home;