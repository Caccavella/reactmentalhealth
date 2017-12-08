import React, { Component } from 'react';
import './home.css';
import Header from '../header/header';

class Home extends Component {
    render() {
        return (
            <div className="homecontainer">
                <Header />
                <h1>Mental Health Positive Messages</h1>
                <div className="bodycontainer">
                </div>

            </div>
        )
    }
}

export default Home;