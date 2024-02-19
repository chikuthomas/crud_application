import React, { Component } from 'react';
import reactLogo from '../assets/react.svg'


class Navbar extends Component {

    render() {

        return (

            <div >

                <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={reactLogo} className="logo react d-inline-block align-text-center" alt="React logo" width="40" height="40"  />
                            Crud Application
                        </a>
                    </div>
                </nav>

            </div>
        );
    }
}

export default Navbar;