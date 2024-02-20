import React, { Component } from 'react';



class Footer extends Component {

    render() {

        return (

            <div >

                <footer className="footer mt-auto py-3 text-center">
                    <div className="container">
                        <span className="text-muted">
                            &copy; {new Date().getFullYear()} CodeGuyMW. All rights reserved.
                        </span>
                    </div>
                </footer>

            </div>
        );
    }
}

export default Footer;