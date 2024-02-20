import React, { Component, useEffect, useState } from 'react';
import { Link, useParams, useRoutes, useNavigate } from 'react-router-dom';
//for http calls
import axios from 'axios';
import Navbar from '../components/navbar';
import Swal from 'sweetalert'


// Functional component to fetch and pass the id
function getID() {
    const { id } = useParams();
    return id;
}

//this function is used to use hooks inside class component 
function navigateTo() {
    const navigate = useNavigate();//this is a hook
    return navigate;
}


// this function links the getID function to th editProduct function
function EditProductPage() {
    const id = getID(); // Call Update function to get the id
    const navigate = navigateTo(); // Call Update function to get the id
    return <EditProduct id={id} navigate={navigate} />; // Pass id to EditProduct as a prop
}



class EditProduct extends Component {

    //setting the initial data of the input fields
    state = {

        name: '',
        price: '',
        qty: '',
        image: '',
        error_list: [],
    }


    //set the values of the inputs once the values are entered
    handleInput = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        });
    }




    async componentDidMount() {


        //calling the id from route
        const prod_id = this.props.id;

        // Get the navigate function from the props
        const navigate = this.props.navigate;

        const res = await axios.get(`http://localhost:8000/api/edit-product/${prod_id}`);

        //console.log(params.id);

        //if data is fetched attach to input field
        if (res.data.status === 200) {


            this.setState({

                name: res.data.product.name,
                price: res.data.product.price,
                qty: res.data.product.qty,
                image: res.data.product.image,

            });
        }

        else if (res.data.status === 404) {

            Swal({
                title: "Warning!",
                text: res.data.message,
                icon: "warning"
            });


            navigate('/'); // Navigate to the homepage if no such id is found



        }
    }

    //will call the api for storing products here
    updateProduct = async (e) => {

        e.preventDefault();

        document.getElementById('updateBtn').disabled = true;
        document.getElementById('updateBtn').innerText = "updating..";
        //calling the id from route
        const prod_id = this.props.id;


        const res = await axios.put(`http://localhost:8000/api/update-product/${prod_id}`, this.state);

        if (res.data.status === 200) {

            Swal({
                title: "Updated!",
                text: res.data.message,
                icon: "success"
            });

            document.getElementById('updateBtn').disabled = false;
            document.getElementById('updateBtn').innerText = "update";

        } else {

            
            this.setState({
                error_list: res.data.validate_err,
            });

            document.getElementById('updateBtn').disabled = false;
            document.getElementById('updateBtn').innerText = "update";
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
                                        Edit Product
                                        <Link to={'/'} className="btn btn-primary btn-small float-end">
                                            Previous
                                        </Link>
                                    </h5>

                                </div>
                                <div className='card-body'>

                                    <form onSubmit={this.updateProduct}>
                                        <div className='form-group mb-3'>
                                            <label htmlFor="name">Name</label>
                                            <input type="text" name='name' id='name' autoComplete='false' onChange={this.handleInput} value={this.state.name} className='form-control' />
                                            <span className='text-danger'>{this.state.error_list.name}</span>
                                        </div>
                                        <div className='form-group mb-3'>
                                            <label htmlFor="price">Price</label>
                                            <input type="number" name='price' id='price' autoComplete='false' onChange={this.handleInput} value={this.state.price} className='form-control' />
                                            <span className='text-danger'>{this.state.error_list.price}</span>
                                        </div>
                                        <div className='form-group mb-3'>
                                            <label htmlFor="qty">Quantity</label>
                                            <input type="number" name='qty' id='qty' autoComplete='false' onChange={this.handleInput} value={this.state.qty} className='form-control' />
                                            <span className='text-danger'>{this.state.error_list.qty}</span>
                                        </div>
                                        <div className='form-group mb-3'>
                                            <label htmlFor="image">Image</label>
                                            <input type="text" name='image' id='image' autoComplete='false' onChange={this.handleInput} value={this.state.image} className='form-control' />
                                            <span className='text-danger'>{this.state.error_list.image}</span>
                                        </div>
                                        <div className='form-group mb-3'>
                                            <button type='submit' className='btn btn-primary' id='updateBtn'>Update</button>
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



export default EditProductPage;