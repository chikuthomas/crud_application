import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//for http calls
import axios from 'axios';
import Navbar from '../components/navbar';

class AddProduct extends Component {

    //setting the initial data of the input fields
    state = {

        name: '',
        price: '',
        qty: '',
        image: '',
    }


    //set the values of the inputs once the values are entered
    handleInput = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        });
    }

    //will call the api for storing products here
    saveProduct = async (e) => {

        e.preventDefault();

        const res = await axios.post('http://localhost:8000/api/add-product', this.state);

        if (res.data.status === 200) {

            console.log(res.data.message);
            this.setState({
                name: '',
                price: '',
                qty: '',
                image: '',
            });
        }

    }
    render() {

      
        return (

<>  <Navbar />
           
            <div className='container mt-3'>

                <div className='row justify-content-center'>
                    <div className='col-md-6 '>
                        <div className='card'>
                            <div className='card-header bg-dark text-white' data-bs-theme="dark" >
                                <h5>
                                    Add Product
                                    <Link to={'/'} className="btn btn-primary btn-small float-end">
                                        Previous
                                    </Link>
                                </h5>

                            </div>
                            <div className='card-body'>

                                <form onSubmit={this.saveProduct}>
                                    <div className='form-group mb-3'>
                                        <label htmlFor="name">Name</label>
                                        <input type="text" name='name' id='name' autoComplete='false' onChange={this.handleInput} value={this.state.name} className='form-control' />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label htmlFor="price">Price</label>
                                        <input type="number" name='price' id='price' autoComplete='false' onChange={this.handleInput} value={this.state.price} className='form-control' />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label htmlFor="qty">Quantity</label>
                                        <input type="number" name='qty' id='qty' autoComplete='false' onChange={this.handleInput} value={this.state.qty} className='form-control' />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label htmlFor="image">Image</label>
                                        <input type="text" name='image' id='image' autoComplete='false' onChange={this.handleInput} value={this.state.image} className='form-control' />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <button type='submit' className='btn btn-primary'>Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div></>
        );
    }
}

export default AddProduct;