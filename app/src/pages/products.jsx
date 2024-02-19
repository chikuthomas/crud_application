import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
//for http calls
import axios from 'axios';

class Products extends Component {

    state = {

        products: [],
        loading: true,

    }

    async componentDidMount() {

        const res = await axios.get('http://localhost:8000/api/products');

        //console.log(res);

        if (res.data.status === 200) {


            this.setState({

                products: res.data.products,
                loading: false,

            });
        }
    }

    render() {

        var product_HTMLTABLE = "";

        if (this.state.loading) {

            product_HTMLTABLE =
                <tr>
                    <td colSpan="7">
                        <h3>
                            Loading.......
                        </h3>
                    </td>
                </tr>

        } else {

            product_HTMLTABLE =
                this.state.products.map((item) => {
                    return (

                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.qty}</td>
                            <td>

                                <Link to={'edit-product/${item.id}'} className="btn btn-success btn-sm">Edit</Link>

                              
                            </td>
                            <td>
                            <button className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    );
                });
        }


        return (
            <>
                <Navbar />
                <div className='container mt-3'>

                    <div className='row justify-content-center'>
                        <div className='col-md-8
                    '>
                            <div className='card'>
                                <div className='card-header bg-dark text-white' data-bs-theme="dark">
                                    <h5>
                                        Product List
                                        <Link to={'add-product'} className="btn btn-primary btn-small float-end">
                                            Add Item
                                        </Link>
                                    </h5>


                                </div>
                                <div className='card-body'>

                                    <table className="table table-stiped">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Image</th>
                                                <th colSpan="2">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {product_HTMLTABLE}
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>

                </div></>
        );
    }
}

export default Products;