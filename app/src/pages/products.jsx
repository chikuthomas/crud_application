import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Products extends Component {

    render() {

        return (

            <div className='container'>

                <div className='row'>
                    <div className='col-md-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4>
                                    Product List
                                    <Link to={'add-product'} className="btn btn-primary btn-small float-end">
                                        Add Product
                                    </Link>
                                </h4>


                            </div>
                            <div className='card-body'>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Products;