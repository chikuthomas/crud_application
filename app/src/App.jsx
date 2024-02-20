import { React } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EditProduct from './pages/edit_product';
import AddProduct from './pages/add_product';
import Products from './pages/products';


function App() {


  return (

    <Router>
      <Routes>
        <Route exact path='/' Component={Products} />
        <Route  path='/add-product' Component={AddProduct} />
        <Route  path='/edit-product/:id' element={<EditProduct />}  />
      </Routes>
    </Router>


  );

}

export default App
