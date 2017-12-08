import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <header className="headerwrapper">
                    <h2><a href="/">MentalBoost</a></h2>
                    <div className="rightnav">
                        <h5><a href="/#/login">Log In / Register</a></h5>
                        <h5><a href="/#/resources">For More Resources</a></h5>
                        <h5><a href="/#/contact">Contact</a></h5>
                    </div>
                </header>

            </div>
        )
    }
}

export default Header;